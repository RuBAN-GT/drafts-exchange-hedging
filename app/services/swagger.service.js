import { createReadStream } from 'fs'
import { Action, Service } from 'moleculer-decorators'
import { join } from 'path'

@Service({ name: 'swagger' })
class SwaggerService {
  @Action()
  schema({ meta }) {
    const path = join(__dirname, '../..', 'config', 'swagger.yml')

    meta.$responseType = 'application/x-yaml'
    return createReadStream(path)
  }
}

module.exports = SwaggerService
