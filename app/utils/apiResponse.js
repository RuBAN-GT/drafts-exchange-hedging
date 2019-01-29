import { pick } from 'lodash'

export const apiResponse = (options = {}) =>
  pick(
    {
      code: 200,
      errors: [],
      data: null,
      meta: {},
      ...options
    },
    ['code', 'errors', 'data', 'meta']
  )
