/* {
  tech: 'nomeTecnologia',
  name: name,
}*/

function techList(nameTech, name) {
  
  let ordem = nameTech.sort();
  let learn = [];
  
  if (nameTech.length === 0) {
    return "Vazio!"
  }
  
  for (let techName of ordem) {
    learn.push({
      tech: techName,
      name: name,
    });
  }
  return learn;
}