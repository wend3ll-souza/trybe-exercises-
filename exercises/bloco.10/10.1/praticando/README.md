## Organização

O jest procura por arquivos com as extesões _.js, .jsx, .ts_ e _.tsx_ sufixos com _.test_ ou _.spec_ também.

Organize os Testes em um único diretório, assim fica mais fácil adicioar os aquivos no .gitignore por exemplo.

## Exportando e importando funções

Para trabalhar com os testes em arquivos separados é necessário trabalhar com `module.exports= nome_da_função` para exportar a função do arquivo _.js_. Podendo então ser importada, `const nome_var = require('./nome_da_função')`, para outros arquivos, como o arquivo de testes

**_adicionais :_**

[Import e export no Javascript: o que é e como funciona?](https://blog.betrybe.com/tecnologia/import-e-export/#:~:text=Para%20importar%20qualquer%20vari%C3%A1vel%20ou,erro%20na%20execu%C3%A7%C3%A3o%20do%20c%C3%B3digo.)

[Como funciona o import e export do JavaScript?](https://www.alura.com.br/artigos/como-funciona-o-import-e-export-do-javascript)

[import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)

[Trabalhando com Módulos no JavaScript](https://www.devmedia.com.br/trabalhando-com-modulos-no-javascript/40091)

[Como incluir um arquivo de JavaScript em outro](https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/)

## Escrevendo Testes

Para escrever um  Teste com Jest depende de poucas coisas: Utilizar a função `test`, ou a `it` que é um _alias_ (apelido) para a `test`.

A função `test` recebe três parametros:

- _O nome do teste:_ String que indencifica o teste (será mostrada durante a execução)
- _expect:_ Função que passa o que o teste espera

### Matchers

A função `expect` trás a acesse ao conjunto de métodos chamado `matchers`. Esses expressão condições a serem esperadas.

[All Matchers](https://jestjs.io/docs/en/expect)

_alguns Métodos :_

- toBe : igualdade estrita; para tipos primitivos _Ex. number, string, boolean, etc)_

```javascript
expect(5).toBe("5")
```

- toEqual : igualdade estrita; para objetos _(Ex. Objetos, Funções, Arrays, etc)_

```javascript
const arr = [1, 2,3];
expect(arr).toEqual([1, 2, 3]);
```

#### [Comparar Números](https://jestjs.io/docs/pt-BR/using-matchers#n%C3%BAmeros)

#### [Comparar Strings com expressões regulares: toMatch](https://jestjs.io/docs/pt-BR/expect#tomatchregexporstring)

#### [Verifique se um Array contém um item em especifico: toContain](https://jestjs.io/docs/pt-BR/expect#tocontainitem)

#### [Testar se Objeto possui propriedade especifica: toHaveProperty](https://jestjs.io/docs/pt-BR/expect#tohavepropertykeypath-value)


### Exceções


#### toThown

Quando executada retorna uma mensagem de erro:

```javascript
  if (!number) {
    throw new Error('Error mensage')
  }
```

#### not

not testa o oposto de algo:

```javascript

test('Arrays note contain Element', () => {
  expect(Array).not.toContain('Element');
});
```

### [Describe](https://jestjs.io/docs/pt-BR/api#describename-fn)

A função `describe` agrupa varios testes em um mesmo bloco. Assim se pode organizar seus testes por exemplo para separar organizar funções em um mesmo arquivo. É possivel também aninhar blocos describes de maneira arbitraria de forma que as funções e variaveis fiquem no escopo do bloco.

```javascript
  describe( 'describe test sum', () => {
    test('sums two values', () => {
      expect(sum(2, 3)).toBe(5);
    });
  });
```
