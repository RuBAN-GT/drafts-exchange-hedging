import { Service } from 'moleculer'
import ApiServiceMixin from 'moleculer-web'
import { join } from 'path'
import { apiResponse, fetchConfig } from 'utils'

class ApiService extends Service {
  constructor(broker) {
    super(broker)

    this.parseServiceSchema(this.schema())
  }

  schema = () => ({
    name: 'api',
    mixins: [ApiServiceMixin],
    settings: {
      assets: {
        folder: join(__dirname, '../..', 'vendor', 'swagger-ui-dist')
      },
      ip: fetchConfig('service.host', '0.0.0.0'),
      onError: this.onError,
      port: fetchConfig('service.port', 1919),
      routes: [
        {
          aliases: fetchConfig('routes', {}),
          mappingPolicy: 'restrict',
          onAfterCall: this.onAfterCall
        }
      ]
    }
  })

  onAfterCall(ctx, _route, req, _res, data) {
    if (ctx.meta.$responseType) {
      return data
    } else {
      return apiResponse({
        data,
        meta: {
          action: req.$alias ? req.$alias.action : '',
          path: req.parsedUrl
        }
      })
    }
  }

  onError(req, res, err) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.writeHead((err && err.code) || 500)

    const response = apiResponse({
      code: err.code,
      errors: [err.message],
      meta: {
        action: req.$alias ? req.$alias.action : '',
        path: req.parsedUrl,
        params: req.$params
      }
    })

    res.end(JSON.stringify(response))
  }
}

module.exports = ApiService
