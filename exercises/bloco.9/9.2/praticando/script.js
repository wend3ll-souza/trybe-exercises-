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
  number <= 5 ? reject(number) : resolve(number);
})
.then(number => `${number} foi sorteado` )
.then(msg => console.log(msg))
.catch(number => console.log(`${number} não foi sorteado`));

// No dia a dia se usa as Promises para fazer requisições a uma API usando uma das funções mais  usadas por developers, o Fetch!
//FETCH:

/*Iniciando packaege,json para instalar o node-fetch: npm init -y && npm i node-fetch*/

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

/*async e await
O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. Agora é só transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async :*/

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

// agora com await

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

