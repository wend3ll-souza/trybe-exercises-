
/*Usando reduce 'ainda com duvidas'
let numbersList = [1, 2, 3];
let total = numbersList.reduce((total, currentElement) => total + currentElement)

console.log(total)*/

//array que tera os elementos somados 
let array = [1,2,3,4];

//Variavel que irá armazenar os valores a serem somados 
let sum = 0;

// repetição, para cada posição do array, 
for ( i = 0; i < array.length; i+= 1) {
    //estrutura a ser repetida a cada valor
  sum += array[i];
}

//imprimindo o valor da soma 
console.log(sum)


