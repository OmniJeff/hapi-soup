'use strict'

const Hapi = require('hapi')
const Routes = require('./routes')
const Logger = require('./plugins/logger')

const internals = {}

module.exports = internals.server = new Hapi.Server()

internals.server.connection({
  host: 'localhost',
  port: 8000
})

// Set up the logger
Logger.register(internals.server)

// Add the routes
Routes.addRoutes(internals.server)

// Start the Hapi server
internals.server.start((err) => {
  if (err) {
    throw err
  }

  internals.server.log(['info'], 'Logger running at: ' + internals.server.info.uri)
})
