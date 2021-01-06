// CALLBACKS:

/* Cuidado com Falso-Positivo: O Jest passa pelas funcões assincronas levando em conta só as sincronas de forma a causar um resultado positivo antes das assincronas serem executadas. */

/* Como o setTimeout é uma função assíncrona, o teste retonará um falso-positivo */
// describe("Testando Callback, e resolvendo falso-positivo", () => { 
//   it("Não deveria passar!", () => {
//       setTimeout(() => {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!')
//       }, 500);
//    });// Aqui o Jest não espera o teste passar

    /* Para o Jest esperar a função assincrona ser finalida, é preciso utilizar uma callback própria da lib, done(), que será chamada após os testes assíncronos. */
//   it("Não deveria passar!", done => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//       done();
//     }, 500);
//   });
// })
  /* Quando estiver realizando testes, sempre procure verificar se o seu teste não está exibindo resultados falso-positivos. */


  const SumNumbers = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  
  test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })