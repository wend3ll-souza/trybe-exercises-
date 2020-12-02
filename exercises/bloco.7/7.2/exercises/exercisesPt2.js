const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


console.log('2.1');

addTurn = (obj, key, value) => obj[key] = value;

addTurn(lesson2, 'turno', 'manhã')

console.log(Object.entries(lesson2))

console.log('2.2');

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson3));

console.log('2.3');

const objectLength = (obj) => Object.keys(obj).length;

console.log(objectLength(lesson1));

console.log('2.4');
const listValues = (obj) => Object.values(obj);

console.log(listValues(lesson1));

console.log('2.5');

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(Object.entries(allLessons))

console.log('2.6');
const studentsNumber = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for(key in keys){
        total += obj[keys[key]].numeroEstudantes;
    }
    return total;
}

console.log(studentsNumber(allLessons))
console.log('2.7');
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

console.log('2.8');

const verify = (obj, key, value) => {
    const object = Object.entries(obj);
    let equal = false;
    for(index in object){
    if(object[index][0] === key && object[index][1] === value) equal = true;
  }
  return equal;
}

console.log(verify(lesson1, 'professor', 'Maria Clara'))