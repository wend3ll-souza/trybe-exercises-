**exercicio-1**

- A função `sum(a, b)` retorna a soma do parâmetro a com o b

- Teste se o retorno de `sum(4, 5)` é 9

- Teste se o retorno de `sum(0, 0)` é 0

- Teste se a função sum lança um erro quando os parametros são `4 e "5" (string 5)`

- Teste se a mensagem de erro é _"parameters must be numbers"_ quando realizar a chamada `sum(4, "5")`

<hr>

**exercicio-2**

- A função `myRemove(arr, item)` recebe um _array arr_ e retorna uma cópia desse _array_ sem o elemento `item` caso ele exista no _array_

- Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado

- Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` não retorna o array `[1, 2, 3, 4]`

- Verifique se o array passado por parâmetro não sofreu alterações

- Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado

<hr>

**exercicio-3**

- A função `myRemoveWithoutCopy(arr, item)` recebe um _array arr_ e retorna o próprio _array_ sem o elemento item caso ele exista no _array_

- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o _array_ esperado

- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` não retorna o `array [1, 2, 3, 4]`

- Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o _array_ passado por parâmetro sofreu alterações

- Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o _array_ esperado

<hr>

**exercicio-4**

- A função `myFizzBuzz(num)` recebe um número num e retorna _"fizzbuzz"_ se o número for divisível por 3 e 5 , retorna _"fizz"_ se for divisível apenas por 3 , retorna _"buzz"_ se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

- Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

- Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

<hr>

**exercicio-5**

- Compare dois objetos (JSON) para verificar se são idênticos ou não