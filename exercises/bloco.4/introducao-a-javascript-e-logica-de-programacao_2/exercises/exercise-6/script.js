//função que receberá um numero e transforma um uma lista onde será indicado quandos numeros impares tem nele

    let num = [1,2,3,4,5,6,7,8,9]
    //variavel que armazenará a quantidade de números impares
    let numImpar = 0;

    //repetição que transfor num em lista
    for(i = 1; i <= num; i++){
        if(num[i]%2 === 0){
            console.log(i)
        }else{
            //indicando números impares
            console.log(`${num[i]} Número impar`)
            //incrementando numImpar
            numImpar++;
        }

    }

    //imprimindo  quantidade de numeros impares que a na lista
    console.log(`Tem ${numImpar} números impares nessa lista`)
