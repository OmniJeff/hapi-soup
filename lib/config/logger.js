'use strict'

const config = {
  local: {
    pino: {
      prettyPrint: false
    }
  },
  ci: {
    pino: {
      prettyPrint: false
    }

  },
  staging: {
    pino: {
      prettyPrint: false
    }

  },
  prod: {
    pino: {
      prettyPrint: false
    }

  }
}

module.exports = function resolveConfig (mode) {
  return config[mode || process.env.NODE_ENV || 'local']
}
