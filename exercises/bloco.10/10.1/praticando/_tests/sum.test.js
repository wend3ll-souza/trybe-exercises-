const sum = require('../script');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});