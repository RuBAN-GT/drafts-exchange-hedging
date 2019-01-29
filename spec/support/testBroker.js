import { ServiceBroker } from 'moleculer'
import { joinRoot } from 'utils'

/**
 * Broker for tests
 *
 * @param {Array<string>|string} services
 * @returns {ServiceBroker}
 */
export const testBroker = (services = []) => {
  const broker = new ServiceBroker({
    logger: console,
    logLevel: 'debug',
    metrics: true,
    nodeID: `node-${Date.now()}`
  })

  broker.loadService(joinRoot('app/services/api.service.js'))
  broker.loadService(joinRoot('app/services/store.service.js'))

  if (!Array.isArray(services)) services = [services]

  services.forEach(service => {
    broker.loadService(joinRoot('app', 'services', service))
  })

  return broker
}
