import { Action, Method, Service } from 'moleculer-decorators'
import { fetchConfig, getCourse } from 'utils'

@Service({
  name: 'courses',
  dependencies: ['store'],
  settings: {
    base: 'btc',
    target: 'rub'
  }
})
class CourseService {
  @Action()
  async basic({ broker }) {
    const base = this.settings.base
    const target = this.settings.target
    const key = this.storeKey(base, target)

    const value = await this.cached(broker, key, () => getCourse(target, base))

    return { base, price: value, target }
  }

  @Method
  async cached(broker, key, callback) {
    let value = await broker.call('store.read', { key })

    if (value == null) {
      try {
        value = await callback()

        if (value) {
          this.broker.call('store.write', {
            key,
            value,
            ttl: this.ttl()
          })
        }
      } catch (error) {
        this.logger.error(error, 'cached')
      }
    }

    return value
  }

  @Method
  storeKey(base, target) {
    return `courses.${base}-${target}`
  }

  @Method
  ttl() {
    return fetchConfig('courses.ttl', 3600)
  }
}

module.exports = CourseService
