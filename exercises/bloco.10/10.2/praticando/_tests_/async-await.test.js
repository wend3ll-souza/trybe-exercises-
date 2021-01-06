const getListAnimals = require('../animalsByType');

describe('Testes de funções Assincronas', () => {
    it('Testando com async/await', async () => {
        const listDogs = await getListAnimals('Dog');
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
      it('Testando com async/await, testando o reject', async () => {
        try {
          await getListAnimals('Lion');
        } catch (error) {
          expect(error).toEqual({ error: "Não possui esse tipo de animal." })
        }
      });
})

// .resolve .reject

describe('Testando Async/Await - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      it('Retorne a lista de animais', async () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      it('Retorna um erro', async () => {
        expect.assertions(1);
        await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });
  