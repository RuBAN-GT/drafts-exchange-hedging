import { fetchConfig } from './configHelper'

export const contracts = () => fetchConfig('api.contracts', [])
export const contractIds = () => contracts().map(c => c.id)
export const contractKeys = () => contracts().map(c => c.name)

export const findContractById = id => contracts().find(c => c.id == id)
export const findContractByName = name => contracts().find(c => c.name == name)
