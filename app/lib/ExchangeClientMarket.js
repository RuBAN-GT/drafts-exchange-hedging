import { readonly } from 'core-decorators'
import { isEqual } from 'lodash'

import { extractMarketData, marketSubscriptionIdentifier, protoAPI, realTimeMarketIdentifier } from 'utils'
import { ExchangeClient } from './ExchangeClient'
import { REQUEST_MARKET_SUBSCRIPTION, REQUEST_REAL_TIME_DATA } from 'consts/requests'

export class ExchangeClientMarket extends ExchangeClient {
  @readonly
  subscribed

  @readonly
  subscriptions

  constructor(...args) {
    super(...args)

    this.subscribed = false
    this.subscriptions = []
  }

  identifiers() {
    return { ...super.identifiers(), marketSubscriptionIdentifier, realTimeMarketIdentifier }
  }

  /**
   * Subscribe to market (quote) update
   *
   * @param {Array<Number>} ids
   * @param {Function} callback
   * @returns {Promise<Array<Number>>}
   */
  async marketSubscription(ids = [], callback = null) {
    if (this.subscribed && isEqual(ids, this.subscriptions)) {
      return this.subscriptions
    }

    const message = protoAPI.ClientMsg.create({
      marketDataSubscription: ids.map(contractId =>
        protoAPI.MarketDataSubscription.create({
          contractId,
          level: protoAPI.MarketDataSubscription.Level.TRADES_BBA_VOLUMES
        })
      )
    })

    const { data, payload } = await this.sendRequest(message, REQUEST_MARKET_SUBSCRIPTION)
    this._handleMarketSubscriptions(payload)

    if (this.subscriptions.length > 0 && callback) {
      if (data[REQUEST_REAL_TIME_DATA]) {
        this._handleMarketResponse(data[REQUEST_REAL_TIME_DATA], callback)
      }
      this.wse.onIdentifiedMessage(REQUEST_REAL_TIME_DATA, ({ payload }) =>
        this._handleMarketResponse(payload, callback)
      )
    }

    return this.subscriptions
  }

  _handleMarketResponse(realTimeData, callback = null) {
    const contracts = extractMarketData(realTimeData)

    if (contracts.length > 0) callback(contracts)
  }

  _handleMarketSubscriptions(marketData) {
    this.subscriptions = marketData
      .filter(subscription => subscription.statusCode === protoAPI.MarketDataSubscriptionStatus.StatusCode.SUCCESS)
      .map(subscription => subscription.contractId)
    this.subscribed = this.subscriptions.length > 0

    if (!this.subscribed) throw 'Unsuccesfull market subscription'
  }

  _handleStop() {
    this.subscribed = false
    this.subscriptions = []
  }
}
