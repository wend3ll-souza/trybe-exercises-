// O que é JSON e por que o usamos?
const JSON = {
    "trybers": [
      {
        "name": "Lauro Cesar",
        "github": "lauroandrade",
        "status": "#vqv"
      }
    ]
  }


  // Promises: Construtor
const promise  = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()*11);
    if (number <= 5) {
        return reject(console.log(`${number} não foi sorteado`));
    }
    resolve(console.log(`${number} foi sorteado`))
});


// Gestores de fluxo: .then() e .catch()

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  number <= 5 ? reject(console.log(`${number} não foi sorteado`)) : resolve(number);
})
.then(number => `${number} foi sorteado` )
.then(msg => console.log(msg));