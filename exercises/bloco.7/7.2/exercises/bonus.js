//1
const numberOfStudestsInMath = (obj) => {
    let total = 0;
    const object = Object.keys(obj);
    for (key in object) {
      if(obj[object[key]].materia === 'Matemática'){
      total += obj[object[key]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(numberOfStudestsInMath(allLessons));
//2
const relatorio = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
      if (array[i].professor === name) {
        allLessons.push(array[i].materia)
        allStudent += array[i].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));