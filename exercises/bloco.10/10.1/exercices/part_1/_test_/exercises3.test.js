const myRemoveWithoutCopy = require('../exercises3');

describe('test myRemoveWithoutCopy', () => {
    it('its a function', () => {
        expect(typeof myRemoveWithoutCopy).toBe('function');
    });
    it('test remove item', () => {
        expect(myRemoveWithoutCopy([1,2,3,4], 3)).toEqual([1,2,4]);
    });
    it('test remove not item', () => {
        expect(myRemoveWithoutCopy([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
    });
    it('test item', () => {
        expect(myRemoveWithoutCopy([1,2,3,4], 0)).toEqual([1,2,3,4]);
    });
    it('test remove item that not exist', () => {
        expect(myRemoveWithoutCopy([1,2,3,4], 5)).toEqual([1,2,3,4]);
    });
})

// implemente seus testes aqui
// assert.strictEqual(typeof myRemoveWithoutCopy, 'function');

// assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// assert.notDeepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 0), [1, 2, 3,4]);

// assert.deepStrictEqual(  myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);