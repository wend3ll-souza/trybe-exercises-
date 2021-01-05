const sum = require('../sum');
const multiplyByTwo = require('../mult');

describe( 'tests exemplo, comuns matchers, systax, describe, export/require', () => {
  //SUM
  describe( 'describe test sum', () => {
    test('sums two values', () => {
      expect(sum(2, 3)).toBe(5);
    });
  });
  //MULT
  describe( 'describe test multiply', () => {
    test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
      expect(multiplyByTwo(4)).toBe(8);
    });
    test('testa se é lançado um erro quando number é indefinido', () => {
      expect(() => { multiplyByTwo() }).toThrow();
    });
    test('testa se a mensagem de erro é "number é indefinido"', () => {
      expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
    });
  });
});