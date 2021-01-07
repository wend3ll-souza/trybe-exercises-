// Desafio 9
function encode(string) {
    // seu código aqui
    let codeString = '';
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            codeString += 1;
        } else if (string[i] === 'e') {
            codeString += 2;
        } else if (string[i] === 'i') {
            codeString += 3;
        } else if (string[i] === 'o') {
            codeString += 4;
        } else if (string[i] === 'u') {
            codeString += 5;
        } else {
            codeString += string[i];
        }
    };
    return codeString;
};

function decode(string) {
    // seu código aqui
    let codeString = '';
    for (i = 0; i < string.length; i++) {
        if (string[i] === '1') {
            codeString += 'a';
        } else if (string[i] === '2') {
            codeString += 'e';
        } else if (string[i] === '3') {
            codeString += 'i';
        } else if (string[i] === '4') {
            codeString += 'o';
        } else if (string[i] === '5') {
            codeString += 'u';
        } else {
            codeString += string[i];
        }
    };
    return codeString;
}

module.exports = {
    encode,
    decode,
}