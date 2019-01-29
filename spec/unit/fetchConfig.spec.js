import { fetchConfig } from 'utils'

describe('fetchConfig', () => {
  it('returns existed value of env variable', () => {
    const name = faker.random.uuid().toUpperCase()
    const value = faker.random.number().toString()

    config[name] = value

    expect(fetchConfig(name)).toBe(value)
  })

  it('returns default value for unexisted field', () => {
    const name = faker.random.uuid()
    const value = faker.random.number().toString()

    expect(fetchConfig(name, value)).toBe(value)
  })

  it('returns null for unexisted field without default value', () => {
    const name = faker.random.uuid()

    expect(fetchConfig(name)).toBeNull()
  })
})
