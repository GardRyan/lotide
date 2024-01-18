const middle = require('.../middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


describe("#middle", () => {
  it("returns [1] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 1);
  });
  it("returns [2, 3] for ([1, 2, 3, 4])", () => {
    assert.strictEqual(middle([1, 2, 3, 4]), '[2, 3]'); 
  });
});

module.exports = middle;