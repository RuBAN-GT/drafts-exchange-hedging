import { Action, Method, Service } from 'moleculer-decorators'

import { ExchangeClientOrder } from 'lib'
import { orderOperationSchema } from 'consts'

import ExchangeService from './mixins/exchange.service.js'

/**
 * Service for working with orders
 */
@Service({
  name: 'exchange.order',
  mixins: [ExchangeService],
  settings: {
    client: ExchangeClientOrder
  }
})
class ExchangeOrderService {
  @Action()
  status() {
    return {
      logined: this.client.logined,
      service: this.client.servicePath,
      status: this.client.readyCode(),
      subscribed: this.client.subscribed
    }
  }

  @Action({
    params: {
      page: {
        type: 'number',
        convert: true,
        optional: true,
        min: 1,
        integer: true,
        positive: true
      },
      pageSize: {
        type: 'number',
        convert: true,
        optional: true,
        min: 10,
        max: 60,
        integer: true,
        positive: true
      }
    }
  })
  select({ params: { page = 1, pageSize = 40 } }) {
    return this.client.select(page, pageSize)
  }

  @Action({
    params: {
      orderId: 'string',
      clientId: 'string'
    }
  })
  show({ params: { clientId, orderId } }) {
    return this.client.find(orderId, clientId)
  }

  @Action({ params: orderOperationSchema })
  buy({ params }) {
    return this.client.buy({ ...params })
  }

  @Action({ params: orderOperationSchema })
  sell({ params }) {
    return this.client.sell({ ...params })
  }

  @Action({
    params: {
      orderId: 'string',
      clientId: 'string'
    }
  })
  destroy({ params: { clientId, orderId } }) {
    return this.client.remove(orderId, clientId)
  }

  @Method
  _handleLogonSuccess() {
    return this.client.tradeSubscription(this._handleOrderUpdates)
  }

  @Method
  _handleOrderUpdates(orders) {
    this.broker.call('store.publish', { channel: 'ORDERS_UPDATE', value: orders })
  }
}

module.exports = ExchangeOrderService
