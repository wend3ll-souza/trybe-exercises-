## Bloco 9: JavaScript Assíncrono e Promises 

### 9.1: Js Assincrono e Callbacks

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

### 9.2: JavaScript Promises

- Utilizar Promises para fazer chamadas assíncronas;
- Fazer integrações com APIs de terceiros;

 _As `Promises` foram criadas para facilitar a leitrura de `códigos assíncronos` e tornar sua lógica mais prevísivel e legível. Sendo uma das formas mais populares de se escrever esse tipo de código em `JavaScript`; também a a principal forma de se ***comunicar com APIs***_







