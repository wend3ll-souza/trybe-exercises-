const data = require('../encodeDecode');


describe('1 - testando se são funções', () => {
    it('tentando se encode e decode são funções', () => {
        expect(typeof data.encode).toBe('function');
        expect(typeof data.decode).toBe('function');
    })
})