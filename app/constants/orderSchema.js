import { contractKeys, protoAPI } from 'utils'

const orderOperationSchema = {
  contractName: { type: 'enum', values: contractKeys() },
  orderType: { type: 'enum', values: ['market', 'limit'] },
  quantity: { type: 'number', min: 1, integer: true, positive: true }
}

const orderSchema = {
  ...orderOperationSchema,
  side: { type: 'enum', values: Object.values(protoAPI.Order.Side) }
}

const orderLimitSchema = {
  duration: { type: 'number', min: 60, positive: true },
  limitPrice: { type: 'number', min: 0, positive: true }
}

export { orderLimitSchema, orderOperationSchema, orderSchema }
