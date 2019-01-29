import { protoAPI } from 'utils'

export const balanceSubscriptionResponse = (message, successful = true) => {
  if (message.tradeSubscription && message.tradeSubscription.length > 0) {
    return {
      tradeSubscriptionStatus: message.tradeSubscription.map(request =>
        protoAPI.TradeSubscriptionStatus.create({
          id: request.id,
          statusCode: protoAPI.TradeSubscriptionStatus.StatusCode[successful ? 'SUCCESS' : 'FAILURE']
        })
      )
    }
  } else if (message.informationRequest && message.informationRequest.length) {
    return {
      informationReport: message.informationRequest.map(request =>
        protoAPI.InformationReport.create({
          id: request.id,
          lastStatementBalancesReport: protoAPI.LastStatementBalancesReport.create({
            balance: [protoAPI.Balance.create({})]
          }),
          statusCode: protoAPI.InformationReport.StatusCode[successful ? 'SUCCESS' : 'FAILURE']
        })
      )
    }
  }

  return {}
}

export const orderSubscriptionResponse = (message, successful = true) => ({
  tradeSubscriptionStatus: message.tradeSubscription.map(request =>
    protoAPI.TradeSubscriptionStatus.create({
      id: request.id,
      statusCode: protoAPI.TradeSubscriptionStatus.StatusCode[successful ? 'SUCCESS' : 'FAILURE']
    })
  )
})

export const marketSubscriptionResponse = (message, successful = true) => ({
  marketDataSubscriptionStatus: message.marketDataSubscription.map(request =>
    protoAPI.MarketDataSubscriptionStatus.create({
      contractId: request.contractId,
      statusCode: protoAPI.MarketDataSubscriptionStatus.StatusCode[successful ? 'SUCCESS' : 'FAILURE']
    })
  )
})
