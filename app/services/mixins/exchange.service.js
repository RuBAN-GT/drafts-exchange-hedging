import { delay } from 'bluebird'
import { Method, Service } from 'moleculer-decorators'
import { ExchangeClient } from 'lib'
import { fetchConfig, isDevelopment } from 'utils'
import { OPENED, WORKING } from 'consts/statuses'
import SafeService from './safe.service'

/**
 * Mixin for exchange services
 */
@Service({
  name: 'exchange',
  dependencies: ['api', 'store'],
  mixins: [SafeService],
  settings: {
    client: ExchangeClient
  }
})
class ExchangeService {
  created() {
    this.client = new this.settings.client()

    this.client.wse.on('closed', this._handleClose)
    this.client.wse.on('error', this._handleError)
    this.client.wse.on('unexpected-response', this._handleWrongResponse)

    if (isDevelopment() || fetchConfig('logging.messages', false)) {
      this.client.wse.on('send', (_, original) => this.logger.info(original, 'send'))
      this.client.wse.on('message', data => this.logger.info(data, 'message'))
    }

    if (typeof this._handleResponse == 'function') {
      this.client.wse.on('message', this._handleResponse.bind(this))
    }
  }

  async stopped() {
    await this.client.logoff()
    return this.client.stop()
  }

  @Method
  async _handleStart() {
    if (this.client.wsOpened()) {
      await this.client.logoff()
    }
    await this.client.stop()
    await this.client.start()
    await this.client.logon()

    if (fetchConfig('logging.ping')) this._infinityPing()
    return typeof this._handleLogonSuccess == 'function' ? this._handleLogonSuccess() : null
  }

  @Method
  _handleFail() {
    if (this.serviceStatus !== OPENED) return

    this.serviceStatus = WORKING
    return this.safeStart()
  }

  @Method
  _handleClose(status = 1000) {
    this.logger.warn(`Closed with status ${status}`, 'socket.close')
    return this._handleFail()
  }

  @Method
  _handleError(error) {
    this.logger.error(error, 'socket.error')
    return this._handleFail()
  }

  @Method
  _handleWrongResponse(request, response) {
    this.logger.error({ request, response }, 'socket.wrong-response')

    return this._handleFail()
  }

  @Method
  async _infinityPing() {
    if (this.client.logined == false) {
      this.logger.warn('Stop pings external service with logouted client', 'infinity-ping')
    }

    try {
      await this.client.ping('session-checker')
    } catch (error) {
      this.logger.error(error, 'pong')
      return this._handleFail()
    }

    await delay(fetchConfig('timeouts.ping', 10000) + this._randomDelayTimeout())
    return this._infinityPing()
  }
}

module.exports = ExchangeService
