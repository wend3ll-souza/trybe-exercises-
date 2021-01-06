## Jest

[Jest](https://jestjs.io/) é um Fremework JavaScript de testes unitarios. Trabalha principalmente  com as tecnologias : [Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/) , [Node](https://nodejs.org/en/), [React](https://reactjs.org/), [Angular](https://angular.io/) e [Vue](https://vuejs.org/).

**Importancia :**

Mesmo podendo usar features como assert do NodeJS para fazer teste unitários. O Jest nós traz testes mais detalhados, pois o mesmo procura e testa todos os testes da aplicação, fornecendo o ponto de falha de cada teste.

**[Instalação:](https://jestjs.io/docs/en/getting-started.html)**

_via [npm](https://www.npmjs.com/)_

- Instalação Global:

```bash
sudo apt install npm
```

- Instalando Jest no projeto:

```bash
npm -i --save-dev jest
```

_node_modeules é o diretório que guarda os arquivos  das depêndencias baixadas_

_package-lock.json garante que quando outros devs baixarem o projeto sejam instaladas as dependencias nas mesmas versões que foi produzido_

- Criando arquivo package.json

```json
{
  "scripts": {
    "test": "jest"
  },
 "devDependencies": {
  "jest": "^26.6.3"
 }
}
```

[Para testar](./praticando)


## Recursos adicionais

* [Conhecendo o Jest](https://medium.com/jaguaribetech/testando-seu-javascript-com-jest-de2a4674f4ad)
* [Export Module in Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)
* [Jest Crash Course - Unit Testing in JavaScript](https://www.youtube.com/watch?v=7r4xVDI2vho)
* [Objetos - Referências de valores em JavaScript](https://blog.da2k.com.br/2017/01/25/objetos-referencias-de-valores-em-javascript/)
* [Migrating from Mocha to Jest](https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50)
* [Comparações de igualdade e uniformidade](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness)
