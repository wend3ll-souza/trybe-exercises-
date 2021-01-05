// Incluindo assert: Testar separadamente

 const assert = require('assert');

 //TEST_1

// assert.strictEqual(50, 50);
//  // assert.strictEqual(50, 70);

//TEST_2
//  Testando divisão utilizando assert

division = (a, b) => {
    return a/b;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por 3 é igual a 3');z