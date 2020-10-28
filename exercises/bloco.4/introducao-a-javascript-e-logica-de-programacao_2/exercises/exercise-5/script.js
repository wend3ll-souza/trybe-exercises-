
//array que terá os elementos analisados
let array = [0,9,8,7,6,787,5,87];

//variavel que armazenara o numero da posição do array
let number= 0

//variavel que armazenará o maior numero
let higherNumber= 0;

//repetição que irá percorrer cada elemento do array
for (let i = 0; i < array.length; i++){
    
    //number recendo o numero do array na posição i
    number = array[i];
    
    //se o number for maior que higherNumber, os dois terão o mesmo valor até que higherNumber seja o maior numero.
    if(number > higherNumber){
        higherNumber = number;
    }
}

//imprimindo maior numero
console.log(higherNumber);
