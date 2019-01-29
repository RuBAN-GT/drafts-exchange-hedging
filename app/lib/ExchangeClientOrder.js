import { readonly } from 'core-decorators'
import Validator from 'fastest-validator'

import {
  getConfig,
  newOrderMessage,
  ordersFilter,
  ordersMapper,
  orderRejectIdentifier,
  orderStatusIdentifier,
  orderStatusUpdatesIdentifier,
  pagedReportIdentifier,
  protoAPI,
  removeOrderMessage,
  randomId,
  tradeSubscriptionIdentifier
} from 'utils'
import { ExchangeClient } from './ExchangeClient'

import { orderLimitSchema, orderSchema } from 'consts/orderSchema'
import { REQUEST_ORDER_STATUS } from 'consts/requests'

export class ExchangeClientOrder extends ExchangeClient {
  @readonly
  subscribed

  @readonly
  validator

  constructor(...args) {
    super(...args)

    this.subscribed = false
    this.validator = new Validator()
  }

  identifiers() {
    return {
      ...super.identifiers(),
      orderRejectIdentifier,
      orderStatusUpdatesIdentifier,
      pagedReportIdentifier,
      tradeSubscriptionIdentifier
    }
  }

  /**
   * Validate options for common orders and specific fields of limit
   *
   * @param {Object} options
   * @returns {Array<Object>|true} Array with errors or true on successfully result
   */
  validateOptions = options => {
    const common = this.validator.validate(options, orderSchema)

    if (common === true && options.orderType === 'limit') {
      return this.validator.validate(options, orderLimitSchema)
    } else {
      return common
    }
  }

  buy(options) {
    options.side = protoAPI.Order.Side.BUY

    return this.makeOrder(options)
  }

  sell(options) {
    options.side = protoAPI.Order.Side.SELL

    return this.makeOrder(options)
  }

  /**
   * Select all orders
   *
   * @param {Number} page
   * @param {Number} pageSize
   * @returns {Promise<Order>}
   */
  async select(page = 1, pageSize = 40) {
    const requestId = randomId()

    const offset = page > 1 ? page * pageSize : 0
    const message = protoAPI.ClientMsg.create({
      pagedOrderRequest: protoAPI.PagedOrderRequest.create({
        requestId: +requestId,
        offset,
        pageSize
      })
    })

    const { payload } = await this.sendRequest(message, requestId)
    return this._handleSelectResult(payload)
  }

  /**
   * Find order by id
   *
   * @param {String} orderId
   * @param {String} clientId
   * @return {Promise<Order>}
   */
  async find(orderId, clientId) {
    return this._searchHelper(orderId, clientId)
  }

  /**
   * Remove order from system
   *
   * @param {String} orderId
   * @param {String} clientId
   * @returns {Promise<Order>}
   */
  async remove(orderId, clientId) {
    const message = removeOrderMessage(orderId, clientId)

    const { identifier, payload } = await this.sendRequest(message, clientId, orderStatusIdentifier)
    return this._handleRemoveResult(identifier, payload)
  }

  /**
   * Subscribe to order updates
   *
   * @param {?Function} callback
   *
   * @returns {Promise<boolean>}
   */
  async tradeSubscription(callback = null) {
    const ts = protoAPI.TradeSubscription
    const id = randomId()

    const message = protoAPI.ClientMsg.create({
      tradeSubscription: [
        ts.create({
          id: +id,
          accountId: getConfig('api.accountId'),
          publicationType: ts.PublicationType.ACCOUNT,
          skipOrdersSnapshot: true,
          subscribe: true,
          subscriptionScope: [ts.SubscriptionScope.ORDERS]
        })
      ]
    })

    const { payload } = await this.sendRequest(message, id)
    this._handleTradeSubscriptionResult(payload)

    if (this.subscribed && callback) {
      this.wse.onIdentifiedMessage(REQUEST_ORDER_STATUS, ({ payload }) =>
        this._handleTradeSubscriptionResponse(payload, callback)
      )
    }

    return this.subscribed
  }

  /**
   * Make order
   *
   * @param {Object} orderOptions with orderSchema
   *
   * @returns {Promise<Order>}
   * @throws {ErrorEvent} if has wrong options for order
   * @throws {ErrorEvent} on order rejections
   * @see orderSchema
   */
  async makeOrder(orderOptions) {
    orderOptions.clOrderId = randomId()

    const validation = this.validateOptions(orderOptions)
    if (validation !== true) {
      throw `Wrong order options: ${JSON.stringify(validation)}`
    }

    const message = newOrderMessage(orderOptions)
    const { identifier, payload } = await this.sendRequest(message, orderOptions.clOrderId, orderStatusIdentifier)

    return this._handleNewOrderResult(identifier, payload)
  }

  _handleSelectResult(report) {
    const orders = report.orderStatus

    if (orders) {
      return ordersFilter(orders).map(ordersMapper)
    } else {
      throw 'No response in select data'
    }
  }

  _handleTradeSubscriptionResult(tradeResult) {
    if (tradeResult.statusCode === protoAPI.TradeSubscriptionStatus.StatusCode.SUCCESS) {
      this.subscribed = true
    } else {
      throw tradeResult.textMessage || 'Unsuccessful trade subscription'
    }
  }

  _handleTradeSubscriptionResponse(orders, callback) {
    const data = orders.map(ordersMapper)

    if (data.length > 0) callback(data)
  }

  _handleRemoveResult(identifier, result) {
    if (identifier == 'orderRejectIdentifier') {
      throw result.textMessage
    } else if (result && result instanceof protoAPI.OrderStatus) {
      return ordersMapper(result)
    } else {
      throw 'Unknown response'
    }
  }

  /**
   * Handler for any order messages
   *
   * @param {String} identifier that select result
   * @param {OrderStatus|OrderRequestReject} result
   * @returns {Order}
   * @private
   *
   * @throws {ErrorEvent} on rejected order
   * @throws {ErrorEvent} on rejected transaction
   */
  _handleNewOrderResult(identifier, result) {
    if (identifier == 'orderRejectIdentifier') {
      throw result.textMessage
    } else if (result instanceof protoAPI.OrderStatus) {
      if (result.status === protoAPI.OrderStatus.Status.REJECTED) {
        throw result.transactionStatus[0].textMessage
      } else {
        return ordersMapper(result)
      }
    } else {
      throw 'Unknown response'
    }
  }

  async _searchHelper(orderId, clientId, page = 1) {
    const data = await this.select(page, 20)
    const elem = data.find(order => order.orderId === orderId && order.clOrderId === clientId)

    return elem || data.length == 0 ? elem : this._searchHelper(orderId, clientId, page + 1)
  }

  _handleStop() {
    this.subscribed = false
  }
}
