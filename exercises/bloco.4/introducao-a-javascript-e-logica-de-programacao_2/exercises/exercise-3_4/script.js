//array que tera os elementos somados 
let numberList = [1, 2, 3, 4];

//Variavel que irá armazenar os valores a serem somados 
let total = 0;

// repetição, para cada posição do array, 
for (i = 0; i < numberList.length; i++) {
    //estrutura a ser repetida a cada valor
    total += numberList[i];
}

/*estudar reduce

let total = numberList.reduce((total, currentElement) => total + currentElement);
*/

//variavel que armazena o tamanho do arry
let tamanho = numberList.length;

//variavel que tará a media 
let media = total / tamanho;

//impremindo valores
console.log(`Soma: ${total}`)
console.log(`Tamanho: ${tamanho}`)
console.log(`Media: ${media}`)


//Se maior que 20
if (media >= 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}