import { Action, Method, Service } from 'moleculer-decorators'

import { ExchangeClientMarket } from 'lib'
import { contractIds, contractKeys, mergeMarketData } from 'utils'
import ExchangeService from './mixins/exchange.service.js'

/**
 * Service for monitoring quote data from external source
 */
@Service({
  name: 'exchange.market',
  mixins: [ExchangeService],
  settings: {
    client: ExchangeClientMarket
  }
})
class ExchangeMarketService {
  @Action()
  last() {
    let data = null

    try {
      data = contractKeys().map(key => this.broker.call('store.read', { key: key.toString() }))
    } catch (error) {
      this.logger.error(error, 'ExchangeMarketService#last')
    }

    return Promise.all(data)
  }

  @Action()
  status() {
    return {
      logined: this.client.logined,
      service: this.client.servicePath,
      status: this.client.readyCode(),
      subscribed: this.client.subscribed,
      subscriptions: this.client.subscriptions
    }
  }

  @Method
  _handleLogonSuccess() {
    return this.client.marketSubscription(contractIds(), this._handleMarketData)
  }

  @Method
  _handleMarketData(data) {
    data.forEach(this._saveContractData)
  }

  @Method
  async _saveContractData(data) {
    const key = data.contractName
    const prev = await this.broker.call('store.read', { key })
    if (prev && typeof prev == 'object') data = mergeMarketData(data, prev)

    this.broker.call('store.write', { key, value: data })
    this.broker.call('store.publish', { channel: key, value: data })
  }
}

module.exports = ExchangeMarketService;
