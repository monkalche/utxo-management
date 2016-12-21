var coinSplit = require('../split')
var fixtures = require('./fixtures/split')
var tape = require('tape')
var utils = require('./_utils')

fixtures.forEach(function (f) {
  tape(f.description, function (t) {
    var finputs = utils.expand(f.inputs)
    var foutputs = f.outputs.concat()
    var actual = coinSplit(finputs, foutputs, f.feeRate)

    t.same(actual, f.expected)
    if (actual.inputs) {
      var feedback = coinSplit(finputs, actual.outputs, f.feeRate)
      t.same(feedback, f.expected)
    }

    t.end()
  })
})
