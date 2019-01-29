import { currentEnv, fetchConfig } from './configHelper'

export const storeKey = key => fetchConfig('redis.prefix', 'exchange') + '.' + currentEnv() + '.' + key
