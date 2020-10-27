
let numberList = [1,3,4,5];

let total = numberList.reduce((total, currentElement) => total + currentElement);

let tamanho = numberList.length;

let media = total / tamanho;

console.log(`Soma: ${total}`)
console.log(`Tamanho: ${tamanho}`)
console.log(`Media: ${media}`)
