const searchEmployee = require('../data');

describe('searchEmployee test', () => {
    test('is this defined', () => {
        expect(searchEmployee).toBeDefined();
      });
    it('is this a function', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('testing return',() => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
        expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
        expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
    });

    describe('errors', () => {
        it('testing error, ID undefined', () => {
            expect(() => searchEmployee('898d8sf8', 'firstName')).toThrow();
        });
        it('Error message ID undefined', () => {
            expect(() => searchEmployee('1wfasdf', 'firstName')).toThrowError(
              new Error('ID não identificada')
            );
        });
        it('Error message DETAIL undefined', () => {
            expect(() => searchEmployee('8579-6', 'whatever')).toThrowError(
              new Error('Informação indisponível')
            );
        });
    })
});