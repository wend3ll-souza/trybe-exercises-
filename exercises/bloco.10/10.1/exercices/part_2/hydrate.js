function hydrate(string) {
    let sum = 0;
    for (key in string) {
      let numbers = parseInt(string[key]);
      
      (numbers) ? sum += numbers : undefined;
    }
    if (sum === 1) return `1 copo de água`;
    return `${sum} copos de água`;
}

module.exports = hydrate;