const { subtrair } = require('../math');
const math = require('../math');
jest.mock("../math"); // injetando jest.mock no arquivo math.js de forma que se possa definir o compotarmento de todas as funçoes com mockImplementation

describe('calculators', () => {
    it("#somar", () => {
    // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
    });

    it("#subtração", () => {
        // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    
        math.subtrair = jest.fn();
        math.subtrair(2, 1);
    
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair).toHaveBeenCalledWith(2, 1);
        expect(math.subtrair(2, 1)).toBe(1);
        });
});