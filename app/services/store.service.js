import { promisifyAll } from 'bluebird'
import { Action, Method, Service } from 'moleculer-decorators'
import redis from 'redis'

import { getConfig, storeKey } from 'utils'

promisifyAll(redis)

/**
 * Service with redis wrapper
 */
@Service({ name: 'store' })
class StoreService {
  @Action({ params: { key: 'string' } })
  delete({ params: { key } }) {
    const customKey = storeKey(key)

    this.client.del(customKey)
  }

  @Action({ params: { key: 'string' } })
  async read({ params: { key } }) {
    if (this.client === null) return null

    const customKey = storeKey(key)

    try {
      const response = await this.client.getAsync(customKey)

      return this._tryJSON(response)
    } catch (error) {
      this.logger.error(error, 'read')

      return null
    }
  }

  @Action({
    params: {
      key: 'string',
      value: [{ type: 'number' }, { type: 'string' }, { type: 'object' }, { type: 'array' }],
      ttl: { type: 'number', integer: true, positive: true, optional: true }
    }
  })
  write({ params: { key, value, ttl = null } }) {
    if (this.client === null) return

    const args = [storeKey(key), this._serialize(value)]
    if (ttl) {
      args.push('EX')
      args.push(ttl)
    }

    return this.client.setAsync(...args)
  }

  @Action({
    params: {
      channel: 'string',
      value: [{ type: 'number' }, { type: 'string' }, { type: 'object' }, { type: 'array' }]
    }
  })
  publish({ params: { channel, value } }) {
    if (this.client === null) return

    return this.client.publishAsync(storeKey(channel), this._serialize(value))
  }

  created() {
    this.client = null
  }
  started() {
    this.client = redis.createClient(getConfig('redis.url'))
  }
  stopped() {
    return this.client.quit()
  }

  @Method
  _tryJSON(data) {
    if (typeof data == 'string') {
      try {
        return JSON.parse(data)
      } catch (error) {
        this.logger.debug(error)
      }
    }

    return data
  }

  @Method
  _serialize(data) {
    return typeof data == 'object' ? JSON.stringify(data) : data
  }
}

module.exports = StoreService
