### Parte -1:

- Refaça os exercícios 1 a 5 do conteúdo de [Testes unitários em JavaScript ](../../../bloco.7/7.3/exercices), dessa vez utilizando  **Jest**



**exercicio-1 :**

- A função `sum(a, b)` retorna a soma do parâmetro a com o b
- Teste se o retorno de `sum(4, 5)` é 9
- Teste se o retorno de `sum(0, 0)` é 0
- Teste se a função sum lança um erro quando os parametros são `4 e "5" (string 5)`
- Teste se a mensagem de erro é _"parameters must be numbers"_ quando realizar a chamada `sum(4, "5")`

<hr>

**exercicio-2 :**

- A função `myRemove(arr, item)` recebe um _array arr_ e retorna uma cópia desse _array_ sem o elemento `item` caso ele exista no _array_
- Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado
- Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` não retorna o array `[1, 2, 3, 4]`
- Verifique se o array passado por parâmetro não sofreu alterações
- Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado

<hr>

**exercicio-3 :**

- A função `myRemoveWithoutCopy(arr, item)` recebe um _array arr_ e retorna o próprio _array_ sem o elemento item caso ele exista no _array_
- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o _array_ esperado
- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` não retorna o `array [1, 2, 3, 4]`
- Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o _array_ passado por parâmetro sofreu alterações
- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o _array_ esperado

<hr>

**exercicio-4 :**

- A função `myFizzBuzz(num)` recebe um número num e retorna _"fizzbuzz"_ se o número for divisível por 3 e 5 , retorna _"fizz"_ se for divisível apenas por 3 , retorna _"buzz"_ se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

<hr>

**exercicio-5 :**

- Compare dois objetos (JSON) para verificar se são idênticos ou não

<hr>


### Parte -2:

Usando as funções do projeto **Playground functions** :

1. Para as funções `encode` e `decode` crie os seguintes testes:

- Teste se `encode` e `decode` são funções;
- Para a função `encode` teste se as vogais  a, e, i, o, u  são convertidas em 1, 2, 3, 4 e 5, respectivamente;
- Para a função `decode` teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais  a, e, i, o, u respectivamente;
- Teste se as demais letras/números não são convertidos para cada caso;
- Teste se a `string` que é retornada pelas funções têm o mesmo número de caracteres que a `string` passada como parâmetro.

2. A função `techList` recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto. Implemente a função `techList` a partir dos testes em `techList.test.js`. Experimente refatorar a função que você criou para esse projeto!  **É importante nunca alterar os testes ou as variáveis já escritas no código**.
3. Implemente a função `hydrate` a partir dos testes em `hydrate.test.js`. Experimente refatorar a função que você criou para o projeto Playground Function! **É importante nunca alterar os testes ou as variáveis já escritas no código**.

### Bônus:

Usando os dados de data.js Você deve criar uma função que receba dois parâmetros: o `id` do funcionário e a informação disponível sobre ele ( `firstName` , `lastName` , `specialities` ). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo `id` para aquele funcionário e a informação consultada. Caso o `id` não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificada"` . Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"` .

Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
