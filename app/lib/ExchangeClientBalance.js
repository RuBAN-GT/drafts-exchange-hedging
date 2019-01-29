import { readonly } from 'core-decorators'
import { uniq } from 'lodash'

import {
  balanceIdentifier,
  balanceHandler,
  balanceMapper,
  collateralHandler,
  collateralIdentifier,
  collateralMapper,
  getConfig,
  informationIdentifier,
  positionsIdentifier,
  positionsHandler,
  positionMapper,
  protoAPI,
  randomId,
  tradeSubscriptionIdentifier
} from 'utils'
import { ExchangeClient } from './ExchangeClient'

import { REQUEST_COLLATERAL, REQUEST_POSITIONS } from 'consts/requests'

export class ExchangeClientBalance extends ExchangeClient {
  @readonly
  subscriptions

  @readonly
  subscribed

  constructor(...args) {
    super(...args)

    this.subscriptions = []
    this.subscribed = null
  }

  identifiers() {
    return {
      ...super.identifiers(),
      balanceIdentifier,
      collateralIdentifier,
      positionsIdentifier,
      tradeSubscriptionIdentifier
    }
  }

  /**
   * Get balance information
   *
   * @param {boolean} subscribe to balance updates
   *
   * @returns {Promise<Object>}
   */
  async getBalanceInfo(subscribe = false) {
    const id = randomId()

    const message = protoAPI.ClientMsg.create({
      informationRequest: [
        protoAPI.InformationRequest.create({
          id,
          lastStatementBalancesRequest: protoAPI.LastStatementBalancesRequest.create({}),
          subscribe
        })
      ]
    })

    return this.sendRequest(message, id)
  }

  /**
   * Subscribe to balance updates of the account
   *
   * @param {Function} callback
   * @returns {Promise<LastStatementBalancesReport>}
   */
  async balanceSubscription(callback = null) {
    const { data, id, payload } = await this.getBalanceInfo(true)
    this._handleBalanceSubscriptionResult(data)

    if (this.subscriptions.includes('balance') && typeof callback == 'function') {
      this._handleBalanceResponse(payload, callback)
      this.wse.onIdentifiedMessage(id, ({ payload }) => this._handleBalanceResponse(payload, callback))
    }

    return this.subscribed
  }

  /**
   * Subscribe to collateral and positions updates
   *
   * @param {Object} options with callbacks
   * @param {Function} options.onCollateral
   * @parma {Function} options.onPosition
   * @returns {Promise<boolean>}
   */
  async tradeSubscription(options = {}) {
    const ts = protoAPI.TradeSubscription
    const id = randomId()

    const message = protoAPI.ClientMsg.create({
      tradeSubscription: [
        ts.create({
          id: +id,
          accountId: getConfig('api.accountId'),
          publicationType: ts.PublicationType.ACCOUNT,
          skipOrdersSnapshot: false,
          subscribe: true,
          subscriptionScope: [ts.SubscriptionScope.COLLATERAL, ts.SubscriptionScope.POSITIONS]
        })
      ]
    })

    const { data, payload } = await this.sendRequest(message, id)
    this._handleTradeSubscriptionResult(payload)

    if (this.subscriptions.includes('trades')) {
      if (options.onCollateral) {
        if (data[REQUEST_COLLATERAL]) {
          this._handleCollateralResponse(data[REQUEST_COLLATERAL], options.onCollateral)
        }
        this.wse.onIdentifiedMessage(REQUEST_COLLATERAL, ({ payload }) =>
          this._handleCollateralResponse(payload, options.onCollateral)
        )
      }
      if (options.onPosition) {
        if (data[REQUEST_POSITIONS]) {
          this._handlePositionResponse(data[REQUEST_POSITIONS], options.onPosition)
        }
        this.wse.onIdentifiedMessage(REQUEST_POSITIONS, ({ payload }) =>
          this._handlePositionResponse(payload, options.onPosition)
        )
      }
    }

    return this.subscribed
  }

  _handleBalanceResponse(balanceResult, callback) {
    const data = balanceHandler(balanceResult)

    if (data) callback(balanceMapper(data))
  }

  _handleCollateralResponse(collateralStatus, callback) {
    const data = collateralHandler(collateralStatus)

    if (data) callback(collateralMapper(data))
  }

  _handlePositionResponse(positionStatus, callback) {
    const data = positionsHandler(positionStatus)
    const positions = data.map(positionMapper).reduce((total, p) => [...total, ...p], [])

    if (positions) callback(positions)
  }

  _handleBalanceSubscriptionResult(data) {
    const { payload: info } = informationIdentifier(data)

    if (info.statusCode == protoAPI.InformationReport.StatusCode.SUCCESS) {
      this._pushSubscription('balance')
    } else {
      this._removeSubscription('balance')
      throw info.textMessage || 'Unsuccessful balance subscription'
    }
  }

  _handleTradeSubscriptionResult(tradeResult) {
    if (tradeResult.statusCode === protoAPI.TradeSubscriptionStatus.StatusCode.SUCCESS) {
      this._pushSubscription('trades')
    } else {
      this._removeSubscription('trades')
      throw tradeResult.textMessage || 'Unsuccessful collateral & positions subscription'
    }
  }

  _pushSubscription(key) {
    this.subscriptions.push(key)
    this.subscriptions = uniq(this.subscriptions)

    if (this.subscribed !== false) this.subscribed = true
  }
  _removeSubscription(key) {
    this.subscriptions = this.subscriptions.filter(k => k != key)
    this.subscribed = false
  }

  _handleStop() {
    this.subscribed = null
    this.subscriptions = []
  }
}
