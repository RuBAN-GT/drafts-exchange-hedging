import rp from 'request-promise'
import { getCourse } from 'utils'

describe('getCourse', () => {
  describe('when server returns correct result', () => {
    it('returns correct price', async () => {
      expect.assertions(1)

      const price = faker.random.number()

      rp.mockResolvedValue({ ticker: { price } })

      const result = await getCourse()
      expect(result).toBe(price)
    })

    it('sends correct arguments in request', async () => {
      expect.assertions(2)

      rp.mockImplementation(async options => {
        expect(options.url).not.toBeUndefined()
        expect(options.url).toMatch(/b-a/)
      })

      await getCourse('a', 'b')
    })
  })

  describe('when server returns some shit', () => {
    it('returns zero', async () => {
      expect.assertions(1)

      const price = faker.random.number()

      rp.mockResolvedValue({ shit: { price } })

      const result = await getCourse()
      expect(result).toBe(0)
    })
  })
})
