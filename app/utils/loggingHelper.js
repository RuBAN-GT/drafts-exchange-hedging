import { SPLAT } from 'triple-beam'
import winston from 'winston'
import { currentEnv, fetchConfig, isDevelopment, joinRoot } from './configHelper'
import { protoAPI } from './protoAPIHelper'

const LOG_LEVELS = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5
}

const COLORS = {
  fatal: 'red',
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'blue',
  trace: 'gray'
}

/**
 * Generate logger for moleculer system
 *
 * @see https://moleculer.services/docs/0.13/logging.html#Winston
 *
 * @param {*} bindings from moleculer logger initializer
 * @return {DerivedLogger}
 */
export const logger = (bindings = {}) =>
  winston.createLogger({
    exceptionHandlers: _fileTransporter(bindings, 'exceptions'),
    exitOnError: false,
    level: fetchConfig('logging.level', 'info'),
    levels: LOG_LEVELS,
    transports: _transports(bindings)
  })

/**
 * Helper for serializing exchange messages
 *
 * @param {Object} message
 * @return {String|Object}
 */
export function loggerOfObject(message) {
  if (_fromProto(message)) {
    return { source: message.constructor.name, ...message.toJSON() }
  } else {
    return message
  }
}

function _transports(bindings) {
  const list = [_fileTransporter(bindings, 'common')]

  if (isDevelopment()) {
    list.push(
      new winston.transports.Console({
        handleExceptions: true,
        format: winston.format.combine(
          winston.format.label({ label: bindings }),
          winston.format.timestamp(),
          winston.format(_customFormatter)(),
          winston.format(info => {
            if (info.message instanceof Object) info.message = JSON.stringify(info.message)
            return info
          })(),
          winston.format.colorize({ colors: COLORS }),
          winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
        )
      })
    )
  }

  return list
}

const _fromProto = message => message instanceof protoAPI.ClientMsg || message instanceof protoAPI.ServerMsg

/**
 * Generate transporter for winston
 *
 * @param {Object} bindings
 * @param {String} suffix
 * @return {File}
 */
export const _fileTransporter = (bindings, suffix = 'common') =>
  new winston.transports.File({
    filename: joinRoot('logs', `${currentEnv()}.${suffix}.log`),
    maxsize: fetchConfig('logging.maxSize', 1024000),
    maxFiles: fetchConfig('logging.maxFiles', 3),
    format: winston.format.combine(
      winston.format.label({ label: bindings }),
      winston.format.timestamp(),
      winston.format(_customFormatter)(),
      winston.format.json()
    )
  })

/**
 * Message formatter for winston
 *
 * @param {Object} info
 * @return {Object}
 */
function _customFormatter(info) {
  const [extra = null] = info[SPLAT] || []

  if (_fromProto(info.message)) {
    info.label.source = info.message.constructor.name
    info.message = info.message.toJSON()
    info.label.scope = Object.keys(info.message)[0] || 'proto'
  } else {
    info.label.source = 'Moleculer'
    info.label.scope = 'common'
  }
  info.label.extra = extra

  return info
}

export const _formatErrorMessage = (body, type = null) => ({ type: type || 'common', body })
