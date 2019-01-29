import { contractIds, findContractByName } from './contractsHelper'
import { getConfig } from './configHelper'
import { protoAPI } from './protoAPIHelper'
import { scale } from './scaleHelper'

/**
 * Filter unnecessary orders for selection
 *
 * @param {Array<OrderStatus>} orders
 * @returns {*}
 */
export const ordersFilter = orders => {
  const ids = contractIds()

  return orders.filter(
    ({ order: { accountId, contractId } }) => ids.includes(contractId) && accountId == getConfig('api.accountId')
  )
}

/**
 * Map OrderStatus for results
 *
 * @param {OrderStatus} object
 * @return {Object}
 */
export const ordersMapper = item => {
  const {
    chainOrderId,
    firstStatementDate,
    fillQty,
    orderId,
    order,
    submissionUtcTime,
    status,
    statusUtcTime,
    transactionStatus
  } = item.toJSON()

  return {
    orderId,
    chainOrderId,
    firstStatementDate: +firstStatementDate || 0,
    fillQty,
    submissionUtcTime: +submissionUtcTime || 0,
    status,
    statusUtcTime: +statusUtcTime || 0,
    transactionStatus,
    ...order,
    goodThruUtcTime: +order.goodThruUtcTime || 0,
    whenUtcTime: +order.whenUtcTime || 0
  }
}

export function newOrderMessage(options) {
  const contract = findContractByName(options.contractName)
  if (contract == null) throw new Error(`Unknown contract with name ${options.contractName}`)

  const order = {
    accountId: getConfig('api.accountId'),
    clOrderId: options.clOrderId, // Extra order id
    contractId: contract.id,
    isManual: true, // Order placed by the user direct action
    qty: options.quantity, // Count of lots
    side: options.side, // Buy / Sell
    when_utc_time: Date.now() // Client time
  }

  if (options.orderType == 'limit') {
    order.duration = protoAPI.Order.Duration.GTT // Until specific time
    order.goodThruUtcTime = options.duration
    order.limitPrice = scale(options.limitPrice)
    order.orderType = protoAPI.Order.OrderType.LMT
  } else {
    order.duration = protoAPI.Order.Duration.GTC // Until cancel order
    order.orderType = protoAPI.Order.OrderType.MKT
  }

  return protoAPI.ClientMsg.create({
    orderRequest: [
      protoAPI.OrderRequest.create({
        requestId: +options.clOrderId, // id for errors
        newOrder: protoAPI.NewOrder.create({
          suspend: false, // Without drafts
          order: protoAPI.Order.create(order)
        })
      })
    ]
  })
}

export const removeOrderMessage = (orderId, clOrderId) =>
  protoAPI.ClientMsg.create({
    orderRequest: [
      protoAPI.OrderRequest.create({
        requestId: +clOrderId,
        cancelOrder: protoAPI.CancelOrder.create({
          accountId: getConfig('api.accountId'),
          clOrderId,
          orderId: orderId,
          origClOrderId: clOrderId,
          when_utc_time: Date.now()
        })
      })
    ]
  })
