const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (param) => {
   const array = [];
    param.forEach(element => {
        array.push(element.length)
    });
    return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);