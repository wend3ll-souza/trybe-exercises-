// Estrutura HOF

const arrayOfValues = ['josé', 50, 0.25, {
    comida: 'Chocolate'
}];
arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
});

let dia = 12;
let paraFazer = ['muitas', 'coisas']
let emAndamento = ['uma', 'coisa por', 'vez']
let prontas = ['nenhuma']
const tarefas = [{
        dia: dia,
        paraFazer: paraFazer,
        emAndamento: emAndamento,
        prontas: prontas
    },
    {
        dia2: dia,
        paraFazer: paraFazer,
        emAndamento: emAndamento,
        prontas: prontas
    },
    {
        dia3: dia,
        paraFazer: paraFazer,
        emAndamento: emAndamento,
        prontas: prontas
    }
];

tarefas[0].paraFazer.push('agora vai');

tarefas.forEach(element =>
    console.log(element)
)

// Mais forEach 

const emailListInData = [
    "roberta@email.com",
    "paulo@email.com",
    "anaroberta@email.com",
    "fabiano@email.com"
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
}

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// toUpperCase, transformando strings em Maiusculas 

const names = ["Bianca", "Camila", "Fernando", "Ana Roberta"];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
}

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]



 // Array.find Para achar o primeiro elemento que satisfaça a condição passada

 const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

/* Array.some e Array.every, A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição*/

// Exemplo some: 
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// Exemplo every: 
const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Aprovado');
  };
  
  console.log(verifyNotes(notes));

  // Array.sort: Permite ordenar um array de acordo com algum critério estabelecido

  const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// Com numeros o sort() não funciona do mesmo jeito 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]