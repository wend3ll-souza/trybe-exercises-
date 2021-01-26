const uppercase = require('../exercises1');

describe('testing uppercase', () => {
    describe('type test', () => {
        it('is this a function', () => {
            expect(typeof uppercase).toBe('function');
        })
        it('was defined', () => {
            expect(uppercase).toBeDefined();
        })
    })
    describe('functioning tests', () => {
        describe('convertion for uppercase', () => {
            it('letter test', () => {
                uppercase('a', (str) =>{
                    expect(str).toBe('A')
                    console.log(str)
                })
            })
        })
    })
})