import { get } from 'lodash'

import {
  REQUEST_COLLATERAL,
  REQUEST_INFORMATION,
  REQUEST_LOGON,
  REQUEST_MARKET_SUBSCRIPTION,
  REQUEST_ORDER_REJECT,
  REQUEST_ORDER_STATUS,
  REQUEST_PAGED_REPORT,
  REQUEST_PONG,
  REQUEST_POSITIONS,
  REQUEST_REAL_TIME_DATA,
  REQUEST_TRADE_STATUS
} from 'consts/requests'

export const balanceIdentifier = data => {
  const { id, payload } = informationIdentifier(data)

  if (payload) {
    const balance = get(payload, 'lastStatementBalancesReport.balance')
    return balance ? { id, payload: balance } : {}
  } else {
    return {}
  }
}

export const collateralIdentifier = data =>
  data[REQUEST_COLLATERAL].length > 0 ? { id: REQUEST_COLLATERAL, payload: data[REQUEST_COLLATERAL] } : {}

export const informationIdentifier = data => {
  const id = get(data, REQUEST_INFORMATION + '[0].id')

  return id ? { id, payload: data[REQUEST_INFORMATION][0] } : {}
}

export const logonIdentifier = data => (data[REQUEST_LOGON] ? { id: REQUEST_LOGON, payload: data[REQUEST_LOGON] } : {})

export const marketSubscriptionIdentifier = data =>
  data[REQUEST_MARKET_SUBSCRIPTION].length > 0
    ? { id: REQUEST_MARKET_SUBSCRIPTION, payload: data[REQUEST_MARKET_SUBSCRIPTION] }
    : {}

export const orderRejectIdentifier = data => {
  const id = get(data, REQUEST_ORDER_REJECT + '[0].requestId')

  return id ? { id, payload: data[REQUEST_ORDER_REJECT][0] } : {}
}

export const orderStatusUpdatesIdentifier = data =>
  data[REQUEST_ORDER_STATUS].length > 0 ? { id: REQUEST_ORDER_STATUS, payload: data[REQUEST_ORDER_STATUS] } : {}

export const orderStatusIdentifier = data => {
  const id = get(data, REQUEST_ORDER_STATUS + '[0].order.clOrderId')

  return id ? { id, payload: data[REQUEST_ORDER_STATUS][0] } : {}
}

export const pagedReportIdentifier = data => {
  const id = get(data, REQUEST_PAGED_REPORT + '[0].requestId')

  return id ? { id, payload: data[REQUEST_PAGED_REPORT][0] } : {}
}

export const pongIdentifier = data => {
  const token = get(data, REQUEST_PONG + '.token')

  return token ? { id: token, payload: data[REQUEST_PONG] } : {}
}

export const positionsIdentifier = data =>
  data[REQUEST_POSITIONS].length > 0 ? { id: REQUEST_POSITIONS, payload: data[REQUEST_POSITIONS] } : {}

export const realTimeMarketIdentifier = data =>
  data[REQUEST_REAL_TIME_DATA].length > 0 ? { id: REQUEST_REAL_TIME_DATA, payload: data[REQUEST_REAL_TIME_DATA] } : {}

export const tradeSubscriptionIdentifier = data => {
  const id = get(data, REQUEST_TRADE_STATUS + '[0].id')

  return id ? { id, payload: data[REQUEST_TRADE_STATUS][0] } : {}
}
