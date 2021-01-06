const myRemove = require('../exercises2');

describe('test myRemove', () => {
    it('its a function', () => {
        expect(typeof myRemove).toBe('function');
    });
    it('test remove item', () => {
        expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
    });
    it('test remove not item', () => {
        expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
    });
    it('test item', () => {
        expect(myRemove([1,2,3,4], 0)).toEqual([1,2,3,4]);
    });
    it('test remove item that not exist', () => {
        expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
    });
})
