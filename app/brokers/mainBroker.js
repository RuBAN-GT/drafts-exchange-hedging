import { ServiceBroker } from 'moleculer'
import { config, fetchConfig, isDevelopment, logger, loggerOfObject } from 'utils'

const broker = new ServiceBroker({
  created: broker => {
    broker.config = config
  },
  bulkhead: {
    enabled: true,
    concurrency: fetchConfig('bulkhead.concurrency', 4),
    maxQueueSize: fetchConfig('bulkhead.maxQueueSize', 20)
  },
  hotReload: false,
  logger: fetchConfig('logging.internal', true) ? logger : console,
  logLevel: fetchConfig('logging.level', 'info'),
  logObjectPrinter: loggerOfObject,
  metrics: isDevelopment(),
  nodeID: 'node-main',
  tracking: {
    enabled: true,
    shutdownTimeout: 10000
  },
  validation: true
})

broker.loadServices('app/services', '*.service.js')

module.exports = broker
