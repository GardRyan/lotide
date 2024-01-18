const tail = require('./tail');
const assertEqual = require('./assertEqual');

describe("#tail", () => {
  it("returns [3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3;
  });
  it("returns [4] for ([1, 2, 3, 4])", () => {
    assert.strictEqual(tail([1, 2, 3, 4]), '[4]');
  });
});

module.export = tail;