const sum = require('../exercises1')

describe('test to exercise - 1', () => {
    it('test sum', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('test sum 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('test error', () => {
        expect(() => sum(5, '5')).toThrowError(new Error('parameters must be numbers'));
      });
})

