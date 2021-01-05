const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (param) => {
   const total = param.reduce((acc, cv) =>  acc + cv, 0);
   return total;

}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);