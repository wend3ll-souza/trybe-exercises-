//Estudar mais Math. e seus metodos https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max



let arr = [1, 2, 3];
let max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});