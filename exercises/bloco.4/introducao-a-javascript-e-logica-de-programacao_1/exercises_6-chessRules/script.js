function chess() {

    let piece = document.comparisonForm.piece.value;

    if (piece.toLowerCase() === 'torre') {
        document.getElementById('result').innerHTML='A Torre se movimenta na horizontal e diagonal, quantas casas forem desejadas. Só é possivel capturar peças que estajam em sua rota.';
    } else if (piece.toLowerCase()=== 'bispo') {
        document.getElementById('result').innerHTML= piece +' '+ 'tá pegando';
    } else if (piece.toLowerCase() === 'cavalo') {
        document.getElementById('result').innerHTML= piece +' '+ 'tá pegando';
    } else if (piece.toLowerCase() === 'rainha') {
        document.getElementById('result').innerHTML= piece +' '+ 'tá pegando';
    } else if (piece.toLowerCase() === 'rei') {
        document.getElementById('result').innerHTML= piece +' '+ 'tá pegando';
    } else if (piece.toLowerCase()=== 'peão') {
        document.getElementById('result').innerHTML= piece +' '+ 'tá pegando';
    }else{
        document.getElementById('result').innerHTML= piece +' '+ 'não é uma peça de xadrez';
    }
}