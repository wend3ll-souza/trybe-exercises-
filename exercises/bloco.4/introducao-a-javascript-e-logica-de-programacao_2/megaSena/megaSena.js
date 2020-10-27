//array vazio com os números sorteados 


let randomNumber = Math.random() * 60;

//console.log(randomNumber);
//console.log(Math.ceil(randomNumber));


let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixtNumber = Math.ceil(Math.random() * 60);



let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixtNumber];

let turma8Play = [4, 8, 15, 16, 23, 42];
let turma8Play2 = [5,675, 76, 16, 76, 42];
let turma8Play3 = [675, 76, 55, 6, 77, 42];

let numbersOfHits = 0;

for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < turma8Play.length; indexPlay += 1) {

        /*let numberPlay = turma8Play[indexPlay];

        console.log(numberPlay);*/

        if (megaSenaNumbers[indexMega] === turma8Play[indexPlay]){
            numbersOfHits += 1;
        }
    }

}

console.log(`Mega-sena: ${megaSenaNumbers}`);
console.log("Jogo"+" "+turma8Play);
console.log(`Numero de acertos: ${numbersOfHits}`);


let megaSenaGames = [turma8Play, turma8Play2, turma8Play3];

console.log(megaSenaGames);

for (let games = 0; games < megaSenaGames.length; games += 1){
    for (let indexPlay = 0; indexPlay < megaSenaNumbers.length; indexMega += 1) {

        /*let numberPlay = turma8Play[indexPlay];

        console.log(numberPlay);*/

        if (megaSenaNumbers[indexMega] === turma8Play[indexPlay]){
            numbersOfHits += 1;
        }
    }
}