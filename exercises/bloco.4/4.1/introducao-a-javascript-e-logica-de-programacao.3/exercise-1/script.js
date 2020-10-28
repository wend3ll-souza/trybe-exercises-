/* Logica de programação: For*/


//número a ser convertido em asteristicos
let num = 5;

//string que armazenará os asteristicos. Ela começará vazia
let ast = '';

// Estrutura de repetição que irá somar um 1 asteristico enquanto meu contator,que se inicia em 1, for menor ou igual a 5
for(contador = 1; contador <= num; contador += 1){

    ast += '*';
}

// Estrutura de repetição que irá repetir mostrar a variavel 'ast' enquanto meu 'astNumver', que se inicia em 1, for menor que 'num'
for(astNumber = 1; astNumber <= num; astNumber += 1){
    console.log(ast)
}