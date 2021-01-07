const data = require('../encodeDecode');


describe('1 - testando se são funções', () => {
    it('tentando se encode e decode são funções', () => {
        expect(typeof data.encode).toBe('function');
        expect(typeof data.decode).toBe('function');
    })
})

describe('2 - testando se enconde vogais retorna seus respectivos números', () => {
    it('testando encode', () => {
        expect(data.encode(`a, e, i, o, u`)).toBe(`1, 2, 3, 4, 5`);
    })
})

describe('3 - testando se deconde númeoros retorna seus respectivos vogais', () => {
    it('testando decode', () => {
        expect(data.decode(`1, 2, 3, 4, 5`)).toBe(`a, e, i, o, u`);
    })
})

describe('4 - testando se só vogais são convertidas', () => { 
    it('testando encode', () => { 
    expect(data.encode('asdfgj')).toBe('1sdfgj')
    })
})

describe('5 - testando lenght', () => { 
    it('testando encode', () => { 
    expect(data.encode('asdfgj').length).toBe(6)
    })
})
