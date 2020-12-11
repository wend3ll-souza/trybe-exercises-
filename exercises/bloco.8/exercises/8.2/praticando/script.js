// FILTER

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0; //callback

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

// OUTRO EXEMPLO

const objPeople = [
  { name: "José", age: 21 },
  { name: "Lucas", age: 19 },
  { name: "Maria", age: 16 },
  { name: "Gilberto", age: 18 },
  { name: "Vitor", age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) =>
  arrayOfPeople.filter((people) => people.age < 18);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// O filter pode retornar um array sem o elemento desejado:

const arrayMyStudents = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson"];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName("Ricardo", arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// MAP:

// Diferença de uma função usando FOR e depois usando MAP:

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for (let i = 0; i < persons.length; i += 1) {
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);

// Agora com a função MAP:

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = persons.map(
  (person) => `${person.firstName} ${person.lastName}`
);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// MAP com numeros

const array = [1, 2, 3, 4, 5, 6, 7];

const mult = array.map((number) => number * 2);

console.log(mult);

// Todos para negativo com MAP

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) =>
  number > 0 ? number * -1 : number
);

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// agora apenas usando o FOR

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers.push(numbers[i] * -1);
  } else {
    negativeNumbers.push(numbers[i]);
  }
}

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Usando o map para unir dois arrays:

const products = ["Arroz", "Feijão", "Alface", "Tomate"];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => ({
    [product]: listPrices[index],
  }));
};

const productList = updateProducts(products, prices);

console.log(productList);

// usando as outras HOFs junto com o map:

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "91" },
      { name: "Português", nota: "85" },
      { name: "Química", nota: "92" },
      { name: "Biologia", nota: "90" },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "70" },
      { name: "Português", nota: "70" },
      { name: "Química", nota: "60" },
      { name: "Biologia", nota: "50" },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "80" },
      { name: "Português", nota: "82" },
      { name: "Química", nota: "79" },
      { name: "Biologia", nota: "75" },
    ],
  },
];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã. USANDO FOR

const allNameStudents = [];

for (key = 0; key < estudantes.length; key++) {
  estudantes[key].turno === "Manhã"
    ? allNameStudents.push(
        `${estudantes[key].nome} ${estudantes[key].sobrenome}`
      )
    : undefined;
}

console.log(allNameStudents);

// Agora usando MAP E FILTER

console.log(
  estudantes
    .filter((estudante) => estudante.turno === "Manhã")
    .map((estudante) => `${estudante.nome} ${estudante.sobrenome}`)
);

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

//Apenas com for :

const reportStatus = (name, students) => {
    let getStudent;
    for (let i = 0; i < students.length; i += 1 ) {
      if (students[i].nome === name) {
        getStudent = students[i];
        break;
      }
    }
  
    let report = [];
    for (let i = 0; i < getStudent.materias.length; i += 1) {
      if (getStudent.materias[i].nota >= 60) {
        report.push(`${getStudent.materias[i].name} Aprovado`)
      } else {
        report.push(`${getStudent.materias[i].name} Reprovado`)
      }
    }
    return report;
  }
  
  console.log(reportStatus('Natalia', estudantes)) 

// AGORA COM FIND E MAP:


const reportStatus = (name, students) => {
    const student = students.find((student) => student.nome === name);
    return student.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}` // pode se colocar uma estrutura de condicional dentro de um template literals
    ));
  };
  
  console.log(reportStatus('Natalia', estudantes));