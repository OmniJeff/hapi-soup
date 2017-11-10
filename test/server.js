'use strict'

const Request = require('request')
const Proxyquire = require('proxyquire').noPreserveCache()
const Stubs = require('./stubs/server')

let HapiStub = {}
let Server = Proxyquire('../lib/server', { 'hapi': HapiStub })

const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('chai').assert

describe('my hapi server', () => {
  it('can be required', (done) => {
    assert.exists(Server)
    done()
  })

  it('responds to a /ping GET', (done) => {
    Request('http://localhost:8000/ping', (err, res, body) => {
      assert.notExists(err)
      assert.exists(res)
      assert.exists(body)
      assert.equal(res.statusCode, 200)
      assert.deepEqual(JSON.parse(body), { success: true })
      done()
    })
  })

  it('errors out', (done) => {
    Server.stop({}, (err) => {
      assert.notExists(err)
      HapiStub = Stubs.hapiStub

      try {
        assert.throws(Proxyquire('../lib/server', { 'hapi': HapiStub }))
        done()
      } catch (err) {
        assert.exists(err)
        done()
      }
    })
  })
})
