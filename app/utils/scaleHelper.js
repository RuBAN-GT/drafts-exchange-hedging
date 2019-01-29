import { fetchConfig } from './configHelper'

export const scaleSize = () => +fetchConfig('api.scaling', 10000)
export const scale = value => value * scaleSize()
export const unScale = value => value / scaleSize()
