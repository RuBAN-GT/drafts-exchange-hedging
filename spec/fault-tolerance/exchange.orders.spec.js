import { delay } from 'bluebird'

import { getConfig } from 'utils'
import { OPENED, WORKING } from 'consts/statuses'

import { ExternalWS, testBroker } from '../support'
import { orderSubscriptionResponse } from '../support/externalResponses'

const externalWS = new ExternalWS()
const broker = testBroker('exchange.order.service.js')

describe('ExchangeMarketService', () => {
  beforeAll(() => {
    jest.setTimeout(100000)
    jest.spyOn(externalWS, 'onUnknownMessage')
  })

  beforeEach(() => {
    externalWS.start()
  })

  afterEach(() => {
    externalWS.stop()
  })

  it('tries to resend subscription on fails', async () => {
    expect.assertions(2)

    const service = broker.getLocalService('exchange.order')
    externalWS.onUnknownMessage.mockImplementation((ws, message) => {
      externalWS.sendResponse(ws, orderSubscriptionResponse(message, false))
    })

    broker.start()

    await broker.waitForServices(service.schema.dependencies)
    await delay(getConfig('timeouts.retry') * 5)

    expect(service.serviceStatus).toBe(WORKING)

    externalWS.onUnknownMessage.mockImplementation((ws, message) => {
      externalWS.sendResponse(ws, orderSubscriptionResponse(message, true))
    })

    await delay(getConfig('timeouts.retry') * 5)

    expect(service.serviceStatus).toBe(OPENED)
  })
})
