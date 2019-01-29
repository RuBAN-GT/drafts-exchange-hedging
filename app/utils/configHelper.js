import fs from 'fs'
import yaml from 'js-yaml'
import { get, merge } from 'lodash'
import { join } from 'path'

export let config = {}

/**
 * Get current env name
 *
 * @return {String}
 */
export const currentEnv = () => process.env.NODE_ENV || 'development'

/**
 * Get current system env
 *
 * @return {String}
 */
export const systemEnv = () => process.env.PM2_ENV || currentEnv()

/**
 * Fetch config from parsed object
 *
 * @param {String} path
 * @param {*} defaultValue if can't find value in existed config
 * @return {*}
 */
export function fetchConfig(path, defaultValue = null) {
  try {
    return getConfig(path)
  } catch (e) {
    return defaultValue
  }
}

/**
 * Get config from parsed object
 *
 * @param {String} path
 * @return {*}
 * @throws {Error} if can't find needed config
 */
export function getConfig(path) {
  const value = get(config, path)

  if (value === undefined) {
    throw new Error(`Can't find config with path: ${path}`)
  } else {
    return value
  }
}

/**
 * Check system for development env
 * @returns {boolean}
 */
export const isDevelopment = () => currentEnv() === 'development'

/**
 * Prepare node env for working
 *
 * @return {Object}
 * @throws {ErrorEvent} if no required keys for services
 */
export function prepareConfig() {
  const env = currentEnv()

  const commonPath = joinRoot('config', 'application.yml')
  const envPath = joinRoot('config', 'env', `${env}.yml`)

  if (fs.existsSync(commonPath)) {
    config = yaml.safeLoad(fs.readFileSync(commonPath, 'utf8')) || {}
  }
  if (fs.existsSync(envPath)) {
    const envConfig = yaml.safeLoad(fs.readFileSync(envPath, 'utf8')) || {}

    config = merge(config, envConfig)
  }

  const routesPath = joinRoot('config', 'routes.yml')
  if (fs.existsSync(routesPath)) {
    config.routes = yaml.safeLoad(fs.readFileSync(routesPath, 'utf8')) || {}
  }

  return config
}

export const joinRoot = (...args) => join(...[__dirname, '../../', ...args])
