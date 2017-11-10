'use strict'

const Logger = require('../lib/plugins/logger')
const Mocha = require('mocha')
const Chai = require('chai')

const describe = Mocha.describe
// const before = Mocha.before
// const beforeEach = Mocha.beforeEach
// const afterEach = Mocha.afterEach
const it = Mocha.it
const assert = Chai.assert

describe('my hapi logger', () => {
  it('can be required', (done) => {
    assert.exists(Logger)
    done()
  })

  it('errors out', (done) => {
    const serverStub = {
      register: (plugin, next) => {
        next('uh-oh')
      }
    }

    try {
      assert.throws(Logger.register(serverStub))
      done()
    } catch (err) {
      assert.exists(err)
      done()
    }
  })
})
