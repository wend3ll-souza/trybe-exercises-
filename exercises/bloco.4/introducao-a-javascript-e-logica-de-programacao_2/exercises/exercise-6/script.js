
function cadeOImpar(num) {

    let numImpar = 0;

    for(i = 1; i <= num; i++){
        if(i%2 === 0){
            console.log(i)
        }else{
            console.log(`${i} Número impar`)
            numImpar++;
        }

    }

    console.log(`Tem ${numImpar} números impares nessa lista`)
}