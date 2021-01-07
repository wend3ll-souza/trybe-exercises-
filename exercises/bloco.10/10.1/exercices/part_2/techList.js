function techList(nameTech, name) {
  if (nameTech.length === 0) {
    return 'Vazio!'
  }
  const list = [];
  nameTech.sort().forEach(tech => {
    list.push({
      tech: tech,
      name: name
    })
  });
  return list;S
}

module.exports = techList;