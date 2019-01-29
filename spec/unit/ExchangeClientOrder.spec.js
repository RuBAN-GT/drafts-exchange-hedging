import { ExchangeClientOrder } from 'lib'
import { getConfig, findContractByName, protoAPI, scale } from 'utils'

const contracts = ['GLDRUB_TOM', 'SLVRUB_TOM']
const client = new ExchangeClientOrder()
const validMarketOptions = () => ({
  contractName: faker.random.arrayElement(contracts),
  orderType: 'market',
  side: faker.random.arrayElement(Object.values(protoAPI.Order.Side)),
  quantity: faker.random.number() * 10
})
const validLimitOptions = () => ({
  ...validMarketOptions(),
  duration: faker.random.number({ min: 120 }),
  limitPrice: faker.random.number(),
  orderType: 'limit'
})

describe('ExchangeClientOrder', () => {
  describe('#validateOptions', () => {
    describe('with full options', () => {
      it('returns true for valid market order options', () => {
        const options = validMarketOptions()
        const result = client.validateOptions(options)

        expect(Array.isArray(result)).toBeFalsy()
        expect(result).toBeTruthy()
      })

      it('returns true for valid limit order options', () => {
        const options = validLimitOptions()
        const result = client.validateOptions(options)

        expect(Array.isArray(result)).toBeFalsy()
        expect(result).toBeTruthy()
      })
    })

    describe('with invalid options', () => {
      it('returns array with errors for empty options', () => {
        const result = client.validateOptions({})

        expect(Array.isArray(result)).toBeTruthy()
      })

      it('returns array with errors for unfull limit request', () => {
        const result = client.validateOptions({ ...validMarketOptions(), orderType: 'limit' })

        expect(Array.isArray(result)).toBeTruthy()
      })
    })
  })

  describe('#makeOrder', () => {
    beforeAll(() => {
      ExchangeClientOrder.prototype.sendRequest = jest.fn()
    })

    it('sends valid market request to external service', async () => {
      expect.assertions(8)

      const marketOptions = validMarketOptions()
      const contract = findContractByName(marketOptions.contractName)

      ExchangeClientOrder.prototype.sendRequest.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.orderRequest).toBeInstanceOf(Array)
        expect(message.orderRequest).toHaveLength(1)
        expect(message.orderRequest[0]).toMatchObject({ newOrder: { suspend: false } })
        expect(message.orderRequest[0].newOrder.order).toBeInstanceOf(protoAPI.Order)
        expect(message.orderRequest[0].newOrder.order).toMatchObject({
          accountId: getConfig('api.accountId'),
          contractId: contract.id,
          duration: 2,
          isManual: true,
          orderType: 1,
          qty: marketOptions.quantity,
          side: marketOptions.side
        })
        expect(+message.orderRequest[0].newOrder.order.clOrderId).toBeGreaterThanOrEqual(100000)
        expect(+message.orderRequest[0].newOrder.order.clOrderId).toBeLessThanOrEqual(999999)

        return { payload: protoAPI.OrderStatus.create({ status: 1, order: protoAPI.Order.create({}) }) }
      })

      return client.makeOrder(marketOptions)
    })

    it('sends valid limit request to external service', async () => {
      expect.assertions(6)

      const limitOptions = validLimitOptions()
      const contract = findContractByName(limitOptions.contractName)

      ExchangeClientOrder.prototype.sendRequest.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.orderRequest).toBeInstanceOf(Array)
        expect(message.orderRequest).toHaveLength(1)
        expect(message.orderRequest[0]).toMatchObject({ newOrder: { suspend: false } })
        expect(message.orderRequest[0].newOrder.order).toBeInstanceOf(protoAPI.Order)
        expect(message.orderRequest[0].newOrder.order).toMatchObject({
          accountId: getConfig('api.accountId'),
          contractId: contract.id,
          duration: 4,
          good_thru_utc_time: limitOptions.duration,
          isManual: true,
          limitPrice: scale(limitOptions.limitPrice),
          orderType: 2,
          qty: limitOptions.quantity,
          side: limitOptions.side
        })

        return { payload: protoAPI.OrderStatus.create({ status: 1, order: protoAPI.Order.create({}) }) }
      })

      return client.makeOrder(limitOptions)
    })

    it('returns exception for invalid options', async () => {
      try {
        await client.makeOrder({})
      } catch (error) {
        expect(typeof error).toBe('string')
      }
    })
  })

  describe('#buy/#sell', () => {
    beforeAll(() => {
      ExchangeClientOrder.prototype.makeOrder = jest.fn()
    })

    it('calls .makeOrder with added buy side option', async () => {
      expect.assertions(2)

      const options = validMarketOptions()

      ExchangeClientOrder.prototype.makeOrder.mockImplementation(request => {
        expect(request).toMatchObject(options)
        expect(request.side).toBe(1)
      })

      return client.buy(options)
    })

    it('calls .makeOrder with added sell side option', async () => {
      expect.assertions(2)

      const options = validMarketOptions()

      ExchangeClientOrder.prototype.makeOrder.mockImplementation(request => {
        expect(request).toMatchObject(options)
        expect(request.side).toBe(2)
      })

      return client.sell(options)
    })
  })

  describe('#remove', () => {
    beforeAll(() => {
      ExchangeClientOrder.prototype.sendRequest = jest.fn()
    })

    it('removes order with correct parameters', async () => {
      expect.assertions(6)

      const orderId = faker.random.number().toString()
      const clientId = faker.random.number().toString()

      ExchangeClientOrder.prototype.sendRequest.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.orderRequest).toBeInstanceOf(Array)
        expect(message.orderRequest).toHaveLength(1)
        expect(message.orderRequest[0]).toBeInstanceOf(protoAPI.OrderRequest)
        expect(message.orderRequest[0].cancelOrder).toBeInstanceOf(protoAPI.CancelOrder)
        expect(message.orderRequest[0].cancelOrder).toMatchObject({
          accountId: getConfig('api.accountId'),
          clOrderId: clientId,
          orderId: orderId,
          origClOrderId: clientId
        })

        return { payload: protoAPI.OrderStatus.create({ status: 2, order: protoAPI.Order.create({}) }) }
      })

      return client.remove(orderId, clientId)
    })

    it('returns throw error on unexisted order', async () => {
      expect.assertions(1)

      ExchangeClientOrder.prototype.sendRequest.mockResolvedValue({ payload: {} })

      try {
        await client.remove('wrong data', 'wrong data')
      } catch (error) {
        expect(typeof error).toBe('string')
      }
    })
  })

  describe('#select', () => {
    beforeAll(() => {
      ExchangeClientOrder.prototype.sendRequest = jest.fn()
    })

    it('sends common request on data selection', async () => {
      expect.assertions(3)

      const page = faker.random.number({ min: 1 })
      const size = faker.random.number()

      ExchangeClientOrder.prototype.sendRequest.mockImplementation(message => {
        expect(message).toBeInstanceOf(protoAPI.ClientMsg)
        expect(message.pagedOrderRequest).toBeInstanceOf(protoAPI.PagedOrderRequest)
        expect(message.pagedOrderRequest).toMatchObject({
          offset: page > 1 ? page * size : 0,
          pageSize: size
        })

        return { payload: protoAPI.PagedOrderReport.create({}) }
      })

      return client.select(page, size)
    })
  })
})
