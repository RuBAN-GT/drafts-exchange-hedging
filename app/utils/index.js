import fs from 'fs'
import { join } from 'path'

// Reeexport all files in utils directory
const utils = {}
if (Object.values(utils).length == 0) {
  fs.readdirSync(join(__dirname, './')).forEach(file => {
    const util = require(join(__dirname, file))
    Object.keys(util).forEach(key => (utils[key] = util[key]))
  })

  if (utils.prepareConfig) utils.prepareConfig()
}

module.exports = utils
