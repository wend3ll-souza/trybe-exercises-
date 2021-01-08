## Testando códigos assíncronos

O Jest nos trás soluções para testar funções assíncronas dentro de um script.

_ex. de funções assíncronas:_

- [Callbacks](https://pt.stackoverflow.com/questions/27177/o-que-%C3%A9-callback)
- [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async/Await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas)

1. **callbacks:** Para testar `callbacks` é utilizada a função `done` . Ela faz o teste aguardar o retorna da função para que a validação aconteça.
2. **promises:** Para testar `promises` devemos **retorná-la** dentro do teste. Lembre-se de utilizar `then` quando o retorno for um `resolve` e `catch` quando o retorno for um `reject` .
3. **async/await:** para testar `async`/`await`devemos utilizar o método `async`na função passada para teste, e`await` onde esperamos algum retorno assíncrono.

## Matcher .resolves/ .rejects


O `.resolves` espera a promise ser resolvida. Caso a promise seja rejeitada, o teste falhará.

O `.rejects` espera a promise ser rejeitada. Caso a promise seja resolvida, o teste falhará.

[uso com Promise](_tests_/promise.test.js)

[uso com Async/Await](_tests_/async-await.test.js)

## Setup e Teardown

### beforeEach e afterEach

- O `beforeEach` é executado antes de cada teste, evitando que você tenha que repetir trechos de código. Dessa forma, você escreve o trecho de código uma única vez e garante que o "ambiente" esteja preparado para os testes que precisarem.
- O `afterEach` executa um trecho de código após cada teste. Ele é especialmente útil para resetar configurações, dados, entre outras coisas.
