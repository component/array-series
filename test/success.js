var assert = require('assert')
var series = require('../')

var a, b, c

series([
  function (done) {
    a = 1
    process.nextTick(done)
    check('a')
  },
  function (done) {
    b = 2
    process.nextTick(done)
    check('b')
  },
  function (done) {
    c = 3
    process.nextTick(done)
    check('c')
  }
], function (err) {
  assert.ifError(err)
  assert.equal(a, 1)
  assert.equal(b, 2)
  assert.equal(c, 3)
  console.log('First one checked')
})

function check(x) {
  switch (x) {
    case 'a':
      assert.equal(a, 1)
      assert.equal(b, undefined)
      assert.equal(c, undefined)
      break
    case 'b':
      assert.equal(a, 1)
      assert.equal(b, 2)
      assert.equal(c, undefined)
      break
    case 'c':
      assert.equal(a, 1)
      assert.equal(b, 2)
      assert.equal(c, 3)
      break
  }
}