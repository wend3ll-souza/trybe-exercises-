const getListAnimals = require('../animalsByType');
  
describe('Quando o tipo do animal existe', () => {
    it('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
    it('Retorne a lista de animais', () => {
      return getListAnimals('Lion').catch(error =>
        expect(error).toEqual({ error: "Não possui esse tipo de animal." })
      );
    });
  });

  /* Como a função retorna uma Promise , é necessário adicionarmos o .then para pegar o seu resultado. */
  /* inserir um return antes da função e, em seguida, adicionar a quantidade de expect esperadas por meio do comando expect.assertions(2) */
  /* Não esqueça de sempre verificar se deu algum falso-positivo. */


  // .resolve .reject

  describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      it('Retorne a lista de animais', () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });