//Parte 1

//1

const arrow = (escopo) => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

//2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(`${oddsAndEvens.sort((a, b)=>a - b)}`);

  
//Parte 2

//1

  function produto(param) {
    let result = param;
      for(key = 1; key < param; key++){
        result = result * key;
      }
      return result;
  }

  console.log(produto(4));

// BONUS  

//2

  const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1);

  let longestWord = (param) => {
    let words = param.split(' ');
    let longest = '';
    for(value of words){
      longest = value.length > longest.length ? value : longest;
    }
   return longest;
  }


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
