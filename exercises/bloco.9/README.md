## Bloco 9: JavaScript Assíncrono e Promises 

**9.1:**
- Operações assíncronas;
- Callbacks;

```javascript
//setTimeout:
setTimeout(() => {}, delay);

//callback:
// Exemplo número da sorte:
const dice = () => {
  const maxNumber = 10;
  return Math.floor(Math.random() * maxNumber);
};

const numberDice = (param) => {
  if(param > 2 && param < 8){
      console.log(`temos um vencedor o número ${param}`);
  }else{
      console.log(`desculpe o número ${param} não foi sorteado`);
  };
};

const sorteio = (callback) => {
  callback(dice());
};


sorteio(numberDice);
```