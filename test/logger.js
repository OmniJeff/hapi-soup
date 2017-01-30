'use strict'

const Logger = require('../lib/plugins/logger')
const Chai = require('chai')
const Mocha = require('mocha')

const describe = Mocha.describe
// const before = Mocha.before
// const beforeEach = Mocha.beforeEach
// const afterEach = Mocha.afterEach
const it = Mocha.it
const expect = Chai.expect

describe('my hapi logger', () => {
  it('can be required', (done) => {
    expect(Logger).to.exist
    done()
  })

  it('errors out', (done) => {
    const serverStub = {
      register: (plugin, next) => {
        next('uh-oh')
      }
    }

    try {
      expect(Logger.register(serverStub)).to.throw
      done()
    } catch (err) {
      expect(err).to.exist
      done()
    }
  })
})
