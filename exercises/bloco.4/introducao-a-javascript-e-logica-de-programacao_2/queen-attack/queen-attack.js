//Posição da Rainha
let posicaoRainhaLinha = 1;
let posicaoRainhaColuna = 3;

//Posição da outra peça
let posicaoPecaLinha = 4;
let posicaoPecaColuna = 2;

//identifica se o ataque pode ocorrer ou não 
let ataqueBemSucedido = false;

// linhas e colunhas
if ((posicaoRainhaLinha === posicaoPecaLinha) || (posicaoRainhaColuna === posicaoPecaColuna)){
    ataqueBemSucedido = true;
}


//diagonal superior direita 
for(let supDir =1; supDir < 8; supDir += 1){
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoPecaColuna + supDir;

    if (linhaRainha > 8 || colunaRainha > 8){
        break;
    }
    
    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)){
        ataqueBemSucedido = true;
    }

}

console.log(ataqueBemSucedido)