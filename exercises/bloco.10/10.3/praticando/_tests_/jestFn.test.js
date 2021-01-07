const data = require('../randomColor');

// test("#randomRgbColor", () => {
//     data.randomRgbColor = jest.fn() // usando jest.fn(), pra invocar o mock e indicar controle sobre o comportamento da função.
//         .mockReturnValue("rgb(255, 255, 255)"); // determinando o valor a ser retornado com mock
//   data.randomRgbColor();
//   expect(data.randomRgbColor).toHaveBeenCalled();   // testando se a função foi chamada
//   expect(data.randomRgbColor()).toBe("rgb(255, 255, 255)"); // testando retorno que fora definido.
// });


test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  data.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(data.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(data.randomRgbColor()).toBe("first call");
  expect(data.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(data.randomRgbColor()).toBe("second call");
  expect(data.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(data.randomRgbColor()).toBe("default value");
  expect(data.randomRgbColor).toHaveBeenCalledTimes(3);
});