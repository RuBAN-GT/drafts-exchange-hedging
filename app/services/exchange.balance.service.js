import { Action, Method, Service } from 'moleculer-decorators'

import { mergeBalanceData, positionActives } from 'utils'
import { ExchangeClientBalance } from 'lib'
import ExchangeService from './mixins/exchange.service.js'

/**
 * Service for monitoring quote data from external source
 */
@Service({
  name: 'exchange.balance',
  mixins: [ExchangeService],
  settings: {
    client: ExchangeClientBalance
  }
})
class ExchangeDataService {
  @Action()
  async info() {
    const balance = await this.broker.call('store.read', { key: 'balance' })
    const collateral = await this.broker.call('store.read', { key: 'collateral' })

    return mergeBalanceData(balance || {}, collateral || {})
  }

  @Action()
  positions() {
    return this.broker.call('store.read', { key: 'positions' })
  }

  @Action()
  async actives() {
    const positions = await this.broker.call('store.read', { key: 'positions' })

    return positionActives(positions)
  }

  @Action()
  status() {
    return {
      logined: this.client.logined,
      service: this.client.servicePath,
      status: this.client.readyCode(),
      subscriptions: this.client.subscriptions,
      subscribed: this.client.subscribed
    }
  }

  @Action()
  async summary() {
    const actives = await this.broker.call('exchange.balance.actives')
    const info = await this.broker.call('exchange.balance.info')

    return { actives, info }
  }

  @Method
  _handleLogonSuccess() {
    const subscriptions = [
      this.client.balanceSubscription(this._handleBalanceData),
      this.client.tradeSubscription({
        onCollateral: this._handleCollateralData,
        onPosition: this._handlePositionsData
      })
    ]

    return Promise.all(subscriptions)
  }

  @Method
  _handleBalanceData(data) {
    this.broker.call('store.write', { key: 'balance', value: data })
  }

  @Method
  _handleCollateralData(data) {
    this.broker.call('store.write', { key: 'collateral', value: data })
  }

  @Method
  _handlePositionsData(data) {
    this.broker.call('store.write', { key: 'positions', value: data })
  }
}

module.exports = ExchangeDataService
