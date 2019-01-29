import { promisifyAll } from 'bluebird'
import { Errors, Service } from 'moleculer'
import redis from 'redis'

import { getConfig, storeKey } from 'utils'
import { ExternalWS, testBroker } from '../support'

promisifyAll(redis)

let storeClient = null
const broker = testBroker()
const externalWS = new ExternalWS()

const {
  lorem: { word },
  random: { uuid }
} = faker
const randomData = () => ({ key: uuid(), value: word() })
const randomObject = () => ({ key: uuid(), value: { [uuid()]: word() } })

describe('StoreService', () => {
  beforeAll(() => {
    jest.setTimeout(30000)

    storeClient = redis.createClient(getConfig('redis.url'))
    externalWS.start()
    return broker.start()
  })
  afterAll(() => {
    externalWS.stop()
    return storeClient.closeAsync(true)
  })

  describe('service', () => {
    it('checks existing of service', () => {
      const service = broker.getLocalService('store')

      expect(service).not.toBeNull()
      expect(service).toBeInstanceOf(Service)
      expect(service.fullName).toEqual('store')
    })

    it('checks existing actions of service', () => {
      const service = broker.getLocalService('store')
      const actions = ['read', 'write', 'publish']

      expect(actions.every(name => typeof service.actions[name] == 'function')).toBeTruthy()
    })
  })

  describe('#read', () => {
    it('returns value of existed key', async () => {
      expect.assertions(1)

      const { key, value } = randomData()

      await storeClient.setAsync(storeKey(key), value)

      const response = await broker.call('store.read', { key })

      expect(response).toBe(value)
    })

    it('returns null for unexisted existed key', async () => {
      expect.assertions(1)

      const response = await broker.call('store.read', { key: faker.random.uuid() })

      expect(response).toBeNull()
    })

    it('returns object for JSON source', async () => {
      expect.assertions(2)

      const { key, value } = randomObject()

      await storeClient.setAsync(storeKey(key), JSON.stringify(value))

      const response = await broker.call('store.read', { key })

      expect(response).not.toBeNull()
      expect(response).toMatchObject(value)
    })
  })

  describe('#write', () => {
    it('writes random data to store', async () => {
      expect.assertions(2)

      const { key, value } = randomData()

      const status = await broker.call('store.write', { key, value })
      const result = await storeClient.getAsync(storeKey(key))

      expect(status).toBe('OK')
      expect(result).toBe(value)
    })

    it('writes object to store', async () => {
      expect.assertions(3)

      const { key, value } = randomObject()

      const status = await broker.call('store.write', { key, value })
      const result = await storeClient.getAsync(storeKey(key))

      expect(status).toBe('OK')
      expect(typeof result).toBe('string')
      expect(JSON.parse(result)).toMatchObject(value)
    })

    it('writes array with objects to store', async () => {
      expect.assertions(4)

      const { key, value } = randomObject()

      const status = await broker.call('store.write', { key, value: [value] })
      const result = await storeClient.getAsync(storeKey(key))

      expect(status).toBe('OK')
      expect(typeof result).toBe('string')

      const data = JSON.parse(result)
      expect(data).toBeInstanceOf(Array)
      expect(data[0]).toMatchObject(value)
    })

    it('tries to write function to store', async () => {
      expect.assertions(2)

      const key = uuid()
      const value = () => console.log('nooooo')

      await expect(broker.call('store.write', { key, value })).rejects.toBeInstanceOf(Errors.ValidationError)
      await expect(storeClient.getAsync(storeKey(key))).resolves.toBeNull()
    })
  })

  describe('#publish', () => {
    it('sends message to publish for subscribers', async done => {
      const { key, value } = randomData()

      let gettedValue = null
      storeClient.on('message', (channel, message) => {
        gettedValue = message
        storeClient.unsubscribe()
      })
      storeClient.subscribe(storeKey(key))

      await broker.call('store.publish', { channel: key, value })

      setTimeout(() => {
        try {
          expect(gettedValue).toBe(value)
          done()
        } catch (error) {
          done(error)
        }
      }, 2000)
    })
  })
})
