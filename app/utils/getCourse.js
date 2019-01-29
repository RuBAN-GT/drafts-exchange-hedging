import rp from 'request-promise'
import { get } from 'lodash'

import { getConfig } from './configHelper'

/**
 * Get course from external source
 *
 * @param {String} target
 * @param {String} base
 * @return {Promise<number>}
 */
export async function getCourse(target = 'rub', base = 'btc') {
  const basicURL = getConfig('course.url').replace(/\/$/, '')
  const targetURL = `${basicURL}/${base.toLowerCase()}-${target.toLowerCase()}`

  const response = await rp({ json: true, url: targetURL })

  return +get(response, 'ticker.price') || 0
}
