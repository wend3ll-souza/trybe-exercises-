const estados = ['Acre', 'Alagoas', 'Amapá',

'Amazonas',

'Bahia',

'Ceará',

'Espírito Santo',

'Goiás',

'Maranhão',

'Mato Grosso',

'Mato Grosso do Sul',

'Minas Gerais',

'Pará',

'Paraíba',

'Paraná',

'Pernambuco',

'Piauí',

'Rio de Janeiro',

'Rio Grande do Norte',

'Rio Grande do Sul',

'Rondônia',

'Roraima',

'Santa Catarina',

'São Paulo',

'Sergipe',

'Tocantins',

'Distrito Federal'];


for (key in estados){
    let status = document.createElement('option');
    status.innerText = estados[key];
    document.querySelector('#status').appendChild(status);
    
}


document.addEventListener('click', function(event) {
    if(event.target.className == 'buttonS'){
        console.log('oi')
    }
})



