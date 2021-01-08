const { obj1, obj2, obj3 } = require('../exercises5');

describe('test Obj', () => {
    it('obj Equal', () => {
        expect(obj1).toEqual(obj2);
    });
    it('test Obj not Equal', () => {
        expect(obj1).not.toEqual(obj3);
    });
    it('test Obj not Equal', () => {
        expect(obj2).not.toEqual(obj3);
    });
})
