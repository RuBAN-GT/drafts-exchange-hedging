import { Action, Service } from 'moleculer-decorators'

@Service({
  name: 'extra',
  settings: {
    safePlease: 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=='
  }
})
class SwaggerService {
  @Action()
  up({ meta }) {
    meta.$statusCode = 302
    meta.$location = Buffer.from(this.settings.safePlease, 'base64')
  }
}

module.exports = SwaggerService
