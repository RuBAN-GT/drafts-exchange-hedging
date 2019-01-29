import { TimeoutError } from 'bluebird/js/release/errors'
import { ExchangeClient, WSEventable } from 'lib'
import { getConfig, protoAPI } from 'utils'

describe('ExchangeClient', () => {
  describe('#login', () => {
    beforeAll(() => {
      ExchangeClient.prototype.sendRequest = jest.fn()
    })

    it('returns true for successfull authorization', async () => {
      expect.assertions(5)

      ExchangeClient.prototype.sendRequest.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.logon).toBeInstanceOf(protoAPI.Logon)
        expect(message.logon.clientId).toMatch(/ExchangeClient/)
        expect(message.logon).toMatchObject({
          clientVersion: '1',
          userName: getConfig('api.user'),
          password: getConfig('api.password')
        })

        return {
          payload: protoAPI.LogonResult.create({
            resultCode: protoAPI.LogonResult.ResultCode.SUCCESS
          })
        }
      })

      const client = new ExchangeClient()
      await client.logon()

      expect(client.logined).toBeTruthy()
    })

    it('throws on failed logon', async () => {
      expect.assertions(2)

      ExchangeClient.prototype.sendRequest.mockResolvedValue({
        payload: protoAPI.LogonResult.create({
          resultCode: protoAPI.LogonResult.ResultCode.FAILURE
        })
      })

      const client = new ExchangeClient()
      try {
        await client.logon()
      } catch (error) {
        expect(typeof error).toBe('string')
      }

      expect(client.logined).toBeFalsy()
    })

    it('throws on wrong response', async () => {
      expect.assertions(2)

      ExchangeClient.prototype.sendRequest.mockResolvedValue({})

      const client = new ExchangeClient()
      try {
        await client.logon()
      } catch (error) {
        expect(typeof error).toBe('string')
      }

      expect(client.logined).toBeFalsy()
    })
  })

  describe('#logoff', () => {
    beforeAll(() => {
      ExchangeClient.prototype.send = jest.fn()
    })

    it('sends query for logout without waiting', async () => {
      expect.assertions(2)

      ExchangeClient.prototype.send.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.logoff).toBeInstanceOf(protoAPI.Logoff)

        return {}
      })

      const client = new ExchangeClient()
      return client.logoff()
    })
  })
})
