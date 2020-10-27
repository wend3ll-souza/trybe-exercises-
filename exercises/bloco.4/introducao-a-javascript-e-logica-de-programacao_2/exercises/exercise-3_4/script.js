
let numberList = [131,321,13,32,4,13,1,2,23121,1231];

let total = numberList.reduce((total, currentElement) => total + currentElement);

let tamanho = numberList.length;

let media = total / tamanho;

console.log(`Soma: ${total}`)
console.log(`Tamanho: ${tamanho}`)
console.log(`Media: ${media}`)


if(media >= 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor que 20');
}
