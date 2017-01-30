'use strict'

const Request = require('request')
const Proxyquire = require('proxyquire').noPreserveCache()
const Stubs = require('./stubs/server')

let HapiStub = {}
let Server = Proxyquire('../lib/server', { 'hapi': HapiStub })

const describe = require('mocha').describe
// const before = require('mocha').before;
// const beforeEach = require('mocha').beforeEach;
// const afterEach = require('mocha').afterEach;
const it = require('mocha').it
const chai = require('chai')
const expect = chai.expect

describe('kproxy server', () => {
  it('can be required', (done) => {
    expect(Server).to.exist
    done()
  })

  it('responds to a /ping GET', (done) => {
    Request('http://localhost:8000/ping', (err, res, body) => {
      expect(err).to.not.exist
      expect(res).to.exist
      expect(body).to.exist
      expect(res.statusCode).to.equal(200)
      expect(JSON.parse(body)).to.eql({ success: true })
      done()
    })
  })

  it('errors out', (done) => {
    Server.stop({}, (err) => {
      expect(err).to.not.exist
      HapiStub = Stubs.hapiStub

      try {
        expect(Proxyquire('../lib/server', { 'hapi': HapiStub })).to.throw
        done()
      } catch (err) {
        expect(err).to.exist
        done()
      }
    })
  })
})
