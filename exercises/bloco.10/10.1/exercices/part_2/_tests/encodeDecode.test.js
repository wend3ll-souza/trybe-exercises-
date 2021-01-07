const data = require('../encodeDecode');


describe('1 - testando se são funções', () => {
    it('tentando se encode e decode são funções', () => {
        expect(typeof data.encode).toBe('function');
        expect(typeof data.decode).toBe('function');
    })
})

describe('2 - testando se enconde vogais retorna seus respectivos númeors', () => {
    it('testando encode', () => {
        expect(data.encode(`a, e, i, o, u`)).toBe(`1, 2, 3, 4, 5`);
    })
})