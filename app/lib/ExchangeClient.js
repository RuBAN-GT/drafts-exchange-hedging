import { TimeoutError } from 'bluebird/js/release/errors'
import { autobind, readonly } from 'core-decorators'

import {
  decodeMessage,
  encodeMessage,
  getConfig,
  fetchConfig,
  logonIdentifier,
  pongIdentifier,
  protoAPI,
  randomId,
  systemEnv
} from 'utils'
import { WSEventable } from './WSEventable'

import { REQUEST_LOGON, REQUEST_PING } from 'consts/requests'

@autobind
export class ExchangeClient {
  @readonly
  logined

  @readonly
  servicePath

  @readonly
  wse

  constructor(servicePath = '') {
    this.logined = false

    this.servicePath = servicePath || getConfig('api.path')
    this.wse = new WSEventable(this.servicePath, {
      defaultIdentifiers: this.identifiers(),
      encodeMessage: encodeMessage,
      decodeMessage: decodeMessage,
      connectTimeout: fetchConfig('timeouts.connection', 4000),
      requestTimeout: fetchConfig('timeouts.request', 4000)
    })
  }

  /**
   * Get identifiers for websocket emitter
   *
   * @returns {Object}
   */
  identifiers() {
    return {}
  }

  /**
   * Logon with env user and passwords
   *
   * @returns {Promise<boolean>}
   */
  async logon() {
    const message = protoAPI.ClientMsg.create({
      logon: protoAPI.Logon.create({
        clientId: `${this.constructor.name}.${systemEnv()}.${randomId(4)}`,
        clientVersion: '1',
        userName: getConfig('api.user'),
        password: getConfig('api.password')
      })
    })

    const { payload } = await this.sendRequest(message, REQUEST_LOGON, logonIdentifier)
    this._handleLogonResult(payload)

    return this.logined
  }

  /**
   * Logoff from system
   *
   * @returns {Promise<void>}
   */
  logoff() {
    this.logined = false

    return this.send(
      protoAPI.ClientMsg.create({
        logoff: protoAPI.Logoff.create()
      })
    )
  }

  /**
   * Send test request to server
   *
   * @param {String} extraMessage
   * @return {Promise<Pong>}
   */
  ping(extraMessage = 'common') {
    const token = extraMessage + '.' + randomId()

    return this.sendRequest(
      protoAPI.ClientMsg.create({
        ping: protoAPI.Ping.create({
          token,
          pingUtcTime: Date.now()
        })
      }),
      token,
      pongIdentifier
    )
  }

  readyCode = () => this.wse.readyStateName()

  start() {
    return this.wse.open()
  }
  stop() {
    this.logined = false
    if (this._handleStop) this._handleStop()

    return this.wse.close()
  }

  /**
   * Send any message to server
   * @param {Object} message
   * @return {Promise<Object>}
   */
  send(message) {
    return this.wse.send(message)
  }

  /**
   * Send and wait response from server
   *
   * @param {Object} message
   * @param {String|Number} id
   * @param {?Function} identifier
   * @return {Promise<Object>}
   */
  sendRequest(message, id = '', identifier = null) {
    if (this.readyCode() !== 'OPEN') return null

    try {
      return this.wse.sendRequest(message, { id, identifier })
    } catch (error) {
      if (message[REQUEST_PING] == null && error instanceof TimeoutError) {
        this.ping('when-got-timeout')
      }
      throw error
    }
  }

  wsOpened = () => this.wse.isOpened()
  wsClosed = () => this.wse.isClosed()

  _handleLogonResult(logonResponse) {
    if (logonResponse instanceof protoAPI.LogonResult) {
      if (logonResponse.resultCode === protoAPI.LogonResult.ResultCode.SUCCESS) {
        this.logined = true
      } else {
        throw logonResponse.textMessage || 'Unsuccessfull logon'
      }
    } else {
      throw 'Unknown response'
    }
  }
}
