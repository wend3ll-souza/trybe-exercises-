const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  arr.forEach(element => {
    if (element === item) {
      arr.splice(element -1, 1);
    }
  });

  return arr;
}
// implemente seus testes aqui
// assert.strictEqual(typeof myRemoveWithoutCopy, 'function');

// assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// assert.notDeepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 0), [1, 2, 3,4]);

// assert.deepStrictEqual(  myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

module.exports = myRemoveWithoutCopy;