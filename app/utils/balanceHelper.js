import { getConfig } from './configHelper'
import { contracts } from './contractsHelper'

export const balanceHandler = data => data.find(i => i.accountId == getConfig('api.accountId'))
export const collateralHandler = data => data.find(i => i.accountId == getConfig('api.accountId'))

export const positionsHandler = data => {
  const ids = contracts().reduce((all, contract) => {
    return [...all, contract.id, contract.safe.id]
  }, [])

  return data.filter(
    i => i.accountId == getConfig('api.accountId') && ids.includes(i.contractId) && _positionQty(i) > 0
  )
}

export const balanceMapper = ({ accountId, collateral, balance, initialMargin, statementDate, totalValue }) => ({
  accountId: accountId || getConfig('api.accountId'),
  balance,
  balanceUpdatedAt: Date.now(),
  collateral,
  initialMargin,
  statementDate: statementDate.toNumber(),
  totalValue
})

export const collateralMapper = ({ purchasingPower, totalMargin }) => ({
  collateralUpdatedAt: Date.now(),
  purchasingPower: purchasingPower,
  totalMargin: totalMargin
})

export const positionActives = positions =>
  Object.values(
    positions.reduce((total, p) => {
      if (p.side == 'sell') p.qty *= -1

      if (total[p.contractName]) {
        total[p.contractName].qty += p.qty
      } else {
        total[p.contractName] = {
          contractId: p.contractId,
          contractName: p.contractName,
          contractType: p.contractType,
          qty: p.qty
        }
      }

      return total
    }, {})
  )

export const positionMapper = ({ contractId, isShortOpenPosition, openPosition }) => {
  const contract = contracts().find(c => c.id == contractId || c.safe.id == contractId)

  return openPosition.map(o => ({
    contractId: contract.id,
    contractName: contract.name,
    contractType: contract.type,
    ...o,
    qty: o.qty / contract.lotSize,
    statementDate: o.statementDate.toNumber(),
    side: isShortOpenPosition ? 'sell' : 'buy',
    tradeDate: o.tradeDate.toNumber()
  }))
}

export const mergeBalanceData = (balance = {}, collateral = {}) => ({
  ...balance,
  ...collateral
})

const _positionQty = position => position.openPosition.reduce((sum, o) => sum + o.qty, 0)
