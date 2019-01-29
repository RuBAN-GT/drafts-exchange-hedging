const path = require('path')

// Globals
global.utils = require(path.join(__dirname, '../', 'app/utils'))

global.config = global.utils.prepareConfig()
global.faker = require('faker')

// Mocks
jest.mock('request-promise')
