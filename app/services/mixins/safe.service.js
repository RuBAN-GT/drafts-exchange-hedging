import { delay } from 'bluebird'
import { Method, Service } from 'moleculer-decorators'
import { random } from 'lodash'
import { fetchConfig } from 'utils'

import { DEFAULT, HALF, OPENED, WORKING } from 'consts/statuses'

@Service({ name: 'safe' })
class SafeService {
  created() {
    this.attempts = 0
    this.lastStarted = null
    this.serviceStatus = DEFAULT

    if (this._handleStart == null) throw "Need to define '_handleStart' method in the service"
  }

  started() {
    return this.safeStart()
  }

  @Method
  async safeStart() {
    await delay(this._randomDelayTimeout() + this._serviceIndex() * 100)

    try {
      const response = await this._handleStart()

      this.attempts = 0
      this.lastStarted = Date.now()
      this.serviceStatus = OPENED

      return response
    } catch (error) {
      this.logger.error(error, 'safe-start')

      return this._rescueTactic()
    }
  }

  @Method
  _rescueTactic() {
    if (this.attempts < fetchConfig('faultTolerance.maxAttempts', 10)) {
      return this._retryTactic()
    } else {
      return this._halfTactic()
    }
  }

  @Method
  async _retryTactic() {
    this.attempts++
    this.serviceStatus = WORKING

    await delay(fetchConfig('timeouts.retry', 1000))

    return this.safeStart()
  }

  @Method
  async _halfTactic() {
    this.serviceStatus = HALF

    await delay(fetchConfig('timeouts.half', 10000))

    return this.safeStart()
  }

  @Method
  _randomDelayTimeout() {
    return random(1000, fetchConfig('timeouts.randomDelay', 5000))
  }

  @Method
  _serviceIndex() {
    return this.broker.services.findIndex(({ name }) => name === this.name) || 0
  }
}

module.exports = SafeService
