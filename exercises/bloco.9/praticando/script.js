// console.log('1 - Receber roda');
// console.log('2 - Encaixar parafusos');
// console.log('3 - Fixar roda no carro');

// console.log('1 - Comprar parafusos');
// console.log('2 - Adicionar ao estoque');
// console.log('3 - Receber roda');
// console.log('4 - Encaixar parafusos');
// console.log('5 - Fixar roda no carro');

setTimeout(() => {
  console.log("Comprar parafusos"); // Comprar parafusos
  console.log("Adicionar ao estoque"); // Adicionar ao estoque
}, 2000);

console.log("1 - Receber roda"); // 1 - Receber roda
console.log("2 - Encaixar parafusos"); // 2 - Encaixar parafusos
console.log("3 - Fixar roda no carro"); // 3 - Fixar roda no carro

const assert = require("assert");

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
};
const handleExpenses = (myExpenses) => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr, 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// CALLBACK

const resultadoFinal = (resultado) => {
  console.log(resultado);
};

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
};

funcSoma(10, 8, resultadoFinal);

//Execicios de Fixação


// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = () => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
// };

// assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); 
// assert.strictEqual(getUser(), "Ivan is Russian"); 

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
