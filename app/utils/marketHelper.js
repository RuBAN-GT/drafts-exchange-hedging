import { defaults } from 'lodash'
import { findContractById } from './contractsHelper'
import { protoAPI } from './protoAPIHelper'
import { unScale } from './scaleHelper'

/**
 * Get list with contracts market data from server message
 *
 * @param {ServerMsg} data
 * @returns {Array<RealTimeMarketData>}
 */
export const extractMarketData = data => data.map(contract => _marketDataMapper(contract.toJSON()))

/**
 * Merge two existed market data
 *
 * @param {RealTimeMarketData} actual
 * @param {RealTimeMarketData} prev
 * @returns {RealTimeMarketData}
 */
export const mergeMarketData = (actual, prev) => ({
  ...actual,
  lastActiveDate: actual.lastActiveDate == null ? prev.lastActiveDate || null : actual.lastActiveDate,
  lastSleepDate: actual.lastSleepDate == null ? prev.lastSleepDate || null : actual.lastSleepDate,
  marketValues: defaults(actual.marketValues, prev.marketValues),
  quote: _mergeQuote(actual.quote, prev.quote)
})

const _marketDataMapper = ({ contractId, marketValues = {}, quote = [] }) => {
  const contract = findContractById(contractId) || {}

  const data = {
    contractId: contractId,
    contractName: contract.name || 'UNKNOWN',
    lotSize: contract.lotSize,
    marketValues: _marketValuesMapper(marketValues),
    quote: quote.map(_quoteMapper),
    type: contract.type || 'unknown',
    updatedAt: Date.now()
  }

  if (data.quote.some(q => q.price == 0)) {
    data.active = false
    data.lastActiveDate = null
    data.lastSleepDate = Date.now()
  } else {
    data.active = true
    data.lastActiveDate = Date.now()
    data.lastSleepDate = null
  }

  return data
}

// Remove scalable values
const _marketValuesMapper = marketValues =>
  Object.keys(marketValues).reduce((result, key) => {
    const value = marketValues[key]

    return {
      ...result,
      [key]: key == 'totalVolume' ? value : unScale(value)
    }
  }, {})

// Merge two quotes
const _mergeQuote = (actual, prev) =>
  prev.reduce((total, item) => {
    const existed = _quoteFindElement(actual, item)

    if (existed) {
      if (existed.price == null || existed.price == 0) existed.price = item.price || 0
      if (existed.volume == null || existed.volume == 0) existed.volume = item.volume || 0

      return total
    } else {
      return [...total, item]
    }
  }, actual)

// Add extra fields to quote, call reducer for quote
const _quoteMapper = item => ({
  ...item,
  name: protoAPI.Quote.Type.__proto__[item.type] || 'UNKNOWN',
  price: unScale(item.price),
  volume: +item.volume || 0
})

const _quoteFindElement = (quote, elem) => quote.find(item => item.type === elem.type)
