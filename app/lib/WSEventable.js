import { autobind, readonly } from 'core-decorators'
import Promise from 'bluebird'
import EventEmitter from 'events'
import { createWebSocket } from 'utils'

Promise.config({ cancellation: true })

const KEY_DEFAULT = 'default.'
const KEY_MESSAGE = 'message.'
const KEY_TMP = 'tmp.'

@autobind
export class WSEventable {
  @readonly
  emitter

  @readonly
  identifiers

  @readonly
  options

  @readonly
  path

  @readonly
  ws

  /**
   * Init WSPromised instance
   *
   * @param {String} path
   * @param {Object} options
   * @param {Object} options.defaultIdentifiers with handlers for response
   * @param {?Function} options.encodeMessage
   * @param {?Function} options.decodeMessage
   * @param {?Number} options.connectTimeout
   * @param {?Number} options.requestTimeout
   * @param {?Number} options.sendTimeout
   */
  constructor(path, options = {}) {
    this.path = path

    this.options = {
      createWebSocket,
      defaultIdentifiers: {},
      encodeMessage: null,
      decodeMessage: null,
      connectTimeout: 5000,
      requestTimeout: 5000,
      sendTimeout: 5000,
      ...options
    }

    this.emitter = new EventEmitter()
    this.identifiers = new Map()

    this.emitter.setMaxListeners(Infinity)
    if (this.options.defaultIdentifiers)
      Object.keys(this.options.defaultIdentifiers).forEach(key => {
        this.identifiers.set(this._defaultKey(key), this.options.defaultIdentifiers[key])
      })
  }

  /**
   * Close connection
   *
   * @return {Promise<void>}
   */
  close = () =>
    new Promise(resolve => {
      if (this.isClosed()) {
        return resolve()
      } else {
        this.ws.close()
      }

      this.ws = null

      return resolve()
    })

  isClosed() {
    return this.ws == null || (this.ws && this.ws.readyState === 3)
  }
  isOpened() {
    return this.ws && this.ws.readyState === 1
  }

  /**
   * Open connection
   *
   * @returns {Promise<void>}
   */
  open = () =>
    new Promise(resolve => {
      this.ws = this.options.createWebSocket(this.path)

      this.ws.on('open', () => {
        this._onOpen()
        resolve()
      })
      this.ws.on('message', this._onMessage)
      this.ws.on('close', this._onClose)
      this.ws.on('error', this._onError)
      this.ws.on('unexpected-response', this._onUnexpectedResponse)
    }).timeout(this.options.connectTimeout)

  /**
   * Add listener to emitter
   *
   * @param {String} event
   * @param {Function} handler
   * @returns {void}
   */
  on = (event, handler) => this.emitter.on(event, handler)

  /**
   * Add listener for identified message
   *
   * @param {String} message name
   * @param {Function} callback
   * @returns {void}
   */
  onIdentifiedMessage = (message, callback) => this.emitter.on(this._messageKey(message), callback)

  /**
   * Send data without waiting of result
   *
   * @param {any} data
   * @return {Promise<void>}
   */
  send(data) {
    const message = this.options.encodeMessage ? this.options.encodeMessage(data) : data

    return new Promise((resolve, reject) => {
      if (this.isOpened()) {
        this.ws.send(message)
        this.emitter.emit('send', message, data)
        resolve()
      } else {
        reject(new Error("Can't send data because ws isn't opened."))
      }
    }).timeout(this.options.sendTimeout)
  }

  /**
   * Send data with waiting of request result
   *
   * @param {any} data
   * @param {Object} options
   * @param {String|Number} options.id
   * @param {?Function} options.identifier
   * @param {?Number} options.requestTimeout
   *
   * @returns {Promise<Object>}
   */
  sendRequest(data, options = {}) {
    if (options.id == null) throw 'Need to define id of your request'
    if (typeof options.identifier == 'function') this.identifiers.set(this._tmpKey(options.id), options.identifier)

    return new Promise(resolve => {
      this.emitter.on(this._messageKey(options.id), resolve)
      this.send(data)
    }).timeout(options.timeout || this.options.requestTimeout)
  }

  readyStateName() {
    if (this.ws == null) return 'UNEXISTED'

    switch (this.ws.readyState) {
      case 0:
        return 'CONNECTING'
      case 1:
        return 'OPEN'
      case 2:
        return 'CLOSING'
      case 3:
        return 'CLOSED'
      default:
        return 'UNKNOWN'
    }
  }

  _onClose(status) {
    console.error(`Closed with ${status}`)

    this.emitter.emit('closed', status)
  }

  _onError(error) {
    console.error(error)

    this.emitter.emit('error', error)
  }

  _onMessage(message) {
    const data = this.options.decodeMessage ? this.options.decodeMessage(message) : message

    this.emitter.emit('message', data)

    this.identifiers.forEach((handler, key) => {
      this._handleIdentifier(key, handler, data)
    })
  }

  _onOpen = () => this.emitter.emit('opened')

  _onUnexpectedResponse(request, response) {
    console.error(request, response)

    this.emitter.emit('unexpected-response', request, response)
  }

  _handleIdentifier(key, handler, data) {
    const result = handler(data, key)
    if (typeof result == 'object' && result.id) {
      const { id, payload = null, extra = null } = result

      this.emitter.emit(this._messageKey(id), { id, data, extra, identifier: key.replace(KEY_DEFAULT, ''), payload })

      if (key.includes(KEY_TMP)) this.identifiers.delete(key)
    }
  }

  _defaultKey = key => KEY_DEFAULT + key
  _messageKey = id => KEY_MESSAGE + id
  _tmpKey = key => KEY_TMP + key
}
