## Exercicios 10.2

1. Escreva um teste que verifique a chamada do **callback** de uma função `uppercase`
2. Utilizando a sintaxe de ***Promise***, faça um teste que verifique o resultado da função `getUserName` para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

- *Dica*: Veja os dados falsos utilizados no banco de dados, disponíveis na variável `users` , para saber quais IDs existem.

3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de ***async/await***.

- *Dica:* Utilize o [try/catch ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)para o caso de erro.

4. O código busca no **GitHub** de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL `'https://api.github.com/users/tryber/repos'` , faça um teste que verifique que os repositórios `'sd-01-week4-5-project-todo-list'` e `'sd-01-week4-5-project-meme-generator'` se encontram nessa lista.
5. Para este exercício, tente adivinhar a saída dos `console.log` dos testes sem executá-los, e veja se compreendeu bem o funcionamento do `beforeEach` e do `afterEach`.
6. Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

- 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste.
- Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.
- 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
