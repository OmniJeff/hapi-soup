'use strict'

const Handler = require('../handlers/ping')

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/ping',
    handler: Handler
  })
}
