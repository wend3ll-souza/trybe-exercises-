const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.equal(50, 50,'os numeros tem ser iguais'); 

const division = (num1, num2) => num1/num2;

const expected =  division(9, 3);

assert.equal(expected, 3, '9 / 3 é igual a 3');


const add = (a, b) => a + b;

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==) 