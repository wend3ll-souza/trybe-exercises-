## Mock

Em requisições à `APIs` constantemente o tempo de retorno muda._Simular uma função, módulo ou requisição_ permite que a pessoal desenvolvedora tenha melhor controle sobre todo o funcionamento de seus testes.

Dentre as principais formas de consolidar simulações no Jest, destacam-se três:

- [jest.fn();](_tests_/jestFn.test.js)
- [jest.mock();](_tests_/jestMock.test.js)
- [jest.spyOn();](_tests_/jestSpyOn.test.js)

## Simulando funcões

O método [jest.fn()](_tests_/jestFn.test.js)é a forma mais simples de simular uma função. Ao ser invocado se pode devinir o comportamento da função no _mock_.

- [ex. randomColor.test.js ](_tests_/randomColor.test.js)


### Para fixar

1. Defina uma função que retorna um número aleatório entre `1` e `100` .  Depois, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Feito isso, escreva um teste que verifica que a função `randomNumber()` é chamada quando invocamos a `isDivisible()` .
2. Teste que, quando a `randomNumber()` retorna um número par e `isDivisible()` recebe um dois, o retorno é `true` .
3. Simule (*mock*) dois valores para a função `randomNumber()` retornar e um terceiro valor default. Chame a função `isDivisible()` quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.

- [solução](_tests_/paraFixar.test.js)

## Simulando Módulos

O método [jest.mock()](_tests_/jestMock.test.js) tem como principal diferencial simular um pacote todo de dependências ou módulos de uma vez.

- [ex. math.test.js](_tests_/math.test.js)

`mockImplementation(func)`:  aceita uma função que deve ser usada como implementação.

`mockImplementationOnce`: implementa funcionalidade em uma chama.


## Mock e funções originais

O método [jest.spyOn()](_test_/jestSpyOn.test.js) "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.

Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.

Há também como limpar, resetar ou restaurar `mocks`:

* `mock.mockClear()`
  * Útil quando você deseja limpar os dados de uso de uma simulação entre dois `expect`;
* `mock.mockReset()`
  * Faz o que o `mockClear()` faz;
  * Remove qualquer retorno estipulado ou implementação;
  * Útil quando você deseja resetar uma simulação para seu estado inicial;
* `mock.mockRestore()`
  * Faz tudo que `mockReset()` faz;
  * Restaura a implementação original;
  * Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;


## Mock e funções assíncronas

Os testes que dependem de requisições são os mais beneficiados com o uso do `mock` . Excluem problemáticas como falha na API, instabilidade de internet e tamanho de retorno.

Nas funções assíncronas, utiliza o `mockResolvedValue(value)` ou o `mockRejectedValue(value)` . Assim como nas demais implementações, podemos definir o retorno para apenas uma chamada com `mockResolvedValueOnce(value)` ou `mockRejectedValueOnce(value)` .

Temos,num arquivo `api.js` , uma requisição para a API Estúdios Ghibli:

```javascript
function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}
module.exports = { fetchURL };
```

O retorno dessa requisição será um array seguinte formato:

```javascript
[
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  },
 // ...
];
```

No próximo exemplo vamos simular a requisição e fazer dois testes implementando um valor para quando a promise for resolvida e para quando ela for rejeitada.

```javascript
const api = require("./api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
```

Caso queira simular os efeitos colaterais da API,  se pode definir o retorno como um objeto `JSON`.

```javascript
const api = require("./api");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

test("#fetchURL", async () => {
  api.fetchURL = jest.fn().mockResolvedValue(requestReturn);

  // ...
});
```

A grande vantagem desse exemplo é que, neste teste, sequer fazemos uma requisição à API real! Assim evitamos todos os problemas que mencionamos anteriormente.


## Para fixar

Utilize as funções do arquivo [math.js](./math.js) para realizar os exercícios:

1. Faça o *mock* da funcão  **subtrair** e teste sua chamada.
2. Faça o *mock* da função **multiplica** e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
3. Faça o *mock* da função **somar** e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
4. Faça o *mock* da função **dividir** e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
5. Faça o *mock* da função **subtrair** de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
