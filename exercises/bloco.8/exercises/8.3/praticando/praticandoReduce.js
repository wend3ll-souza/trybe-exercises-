/*A função soma todos os valores de um array:
Apenas com o for :*/

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for (let i = 0; i < numbers.length; i += 1) {
    sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113

// Com .reduce :

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113




//////////////

const collection = [1, 2, 3, 4, 5];
const sumNumbers = collection.reduce((accumulator, number) => {
    console.log(accumulator); // 1 3 6 10
    return accumulator + number;
});
console.log(sumNumbers); // 15



/*O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . Veja a seguir, será usado o último exemplo dado da soma dos números:
 */
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 32 47 50 52 47 103
    return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


// Com alteração: 

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
    console.log(result); // 0 32 47 50 52 47 103
    return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113