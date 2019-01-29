import { delay } from 'bluebird'

import { getConfig, protoAPI } from 'utils'
import { OPENED } from 'consts/statuses'
import { ExchangeClient } from 'lib'
import ExchangeService from 'services/mixins/exchange.service'

import { ExternalWS, testBroker } from '../support'

const externalWS = new ExternalWS()
const broker = testBroker()
broker.createService({
  dependencies: [],
  name: 'sample',
  mixins: [ExchangeService]
})

describe('ExchangeService', () => {
  beforeAll(() => {
    jest.setTimeout(100000)
  })

  beforeEach(() => {
    externalWS.start()
  })

  afterEach(() => {
    externalWS.stop()
  })

  describe('with original behavior', () => {
    beforeEach(() => {
      return broker.start()
    })

    afterEach(() => {
      return broker.stop()
    })

    it('starts service with normal working of ws server', () => {
      expect.assertions(3)

      const service = broker.getLocalService('sample')

      expect(service).not.toBeUndefined()
      expect(service.client.logined).toBeTruthy()
      expect(service.serviceStatus).toBe(OPENED)
    })

    it('tries to restart service on disconnecting', async () => {
      expect.assertions(4)

      const service = broker.getLocalService('sample')

      externalWS.socket.clients.forEach(socket => socket.close())

      await delay(getConfig('timeouts.retry') / 2)

      expect(service.client.readyCode()).not.toBe('OPEN')

      await delay(getConfig('timeouts.retry') * 4)

      expect(service.client.readyCode()).toBe('OPEN')
      expect(service.client.logined).toBeTruthy()
      expect(service.serviceStatus).toBe(OPENED)
    })

    it('reset logined status before new connection', async () => {
      expect.assertions(2)

      const { client } = broker.getLocalService('sample')

      expect(client.logined).toBeTruthy()

      externalWS.stop()

      await delay(getConfig('timeouts.retry') * 4)

      expect(client.logined).toBeFalsy()
    })
  })

  describe('with mocks', () => {
    afterEach(() => {
      return broker.stop()
    })

    it('tries to restart service on failed logon', async () => {
      expect.assertions(2)

      jest.spyOn(externalWS, 'onLogonRequest')

      const service = broker.getLocalService('sample')

      externalWS.onLogonRequest.mockImplementation(ws => {
        return externalWS.sendResponse(ws, {
          logonResult: protoAPI.LogonResult.create({
            resultCode: protoAPI.LogonResult.ResultCode.FAILURE
          })
        })
      })

      broker.start()

      await delay(getConfig('timeouts.retry'))

      expect(service.client.logined).toBeFalsy()

      externalWS.onLogonRequest.mockRestore()

      await delay(getConfig('timeouts.retry') * 6)

      expect(service.client.logined).toBeTruthy()
    })
  })
})
