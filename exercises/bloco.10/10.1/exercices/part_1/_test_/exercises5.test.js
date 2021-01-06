const myFizzBuzz = require('../exercises4');

describe('test myFizzBuzz', () => {
    it('its a function', () => {
        expect(typeof myFizzBuzz).toBe('function');
    });
    it('test fizzBuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('test fizz', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    });
    it('test buzz', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });
    it('test number not divisible 3 or 5', () => {
        expect(myFizzBuzz(7)).toEqual(7);
    });
    it('test string', () => {
        expect(myFizzBuzz('x')).toBe(false);
    });
})
