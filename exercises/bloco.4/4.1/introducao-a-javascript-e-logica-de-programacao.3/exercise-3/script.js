/* Logica de programação: For*/

let num = 5;

// Repetição para cada numero menor que  'num'
for (let contatorEspacos = 1; contatorEspacos <= num; contatorEspacos += 1) {

//Variável a ser adicionada para cada valor menor que 'num'
let triangulo ="";
  
/* A cada repetição do contadorEspaços o contadorT ganha o número de posições igual a num -1 e triangula ganha esse nunero enn espaços vazios*/
  for (let contatorT = num; contatorT > contatorEspacos; contatorT -= 1) {
  triangulo += " ";
  }

// enquanto astRep gor menor que  o número de espaços, será adicionado uma repetição a astRep e Triangulo receberá *
  for (let astRep = 1; astRep <= contatorEspacos; astRep += 1){
  triangulo += "*";
  }
 // por fim, imprimindo o triangulo inverso  
  console.log(triangulo)
}