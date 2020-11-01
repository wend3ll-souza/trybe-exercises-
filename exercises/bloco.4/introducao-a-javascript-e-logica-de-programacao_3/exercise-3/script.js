/* Logica de programação: For*/

let num = 5;

// Repetição para cada numero menor que  'num'
for (let i = 1; i <= num; i += 1) {

//Variável a ser adicionada para cada valor menor que 'num'
let triangulo= '';
  
/* A cada repetição do contadorEspaços o contadorT ganha o número de posições igual a num -1 e triangula ganha esse nunero enn espaços vazios*/
  for (let k = num; k > i; k -= 1) {
  triangulo += " ";
  }

// enquanto astRep gor menor que  o número de espaços, será adicionado uma repetição a astRep e Triangulo receberá *
  for (let l = 1; l <= i; l += 1){
  triangulo += "*";
  }
 // por fim, imprimindo o triangulo inverso  
  console.log(triangulo)
}