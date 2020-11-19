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

    'Distrito Federal'
];
let dataDeinicio = document.querySelector('#date');
for (key in estados) {
    let status = document.createElement('option');
    status.innerText = estados[key];
    document.querySelector('#status').appendChild(status);
};

addEventListener('click', (event) => {
    if (event.target.id === 'submit') {
        event.preventDefault();
        let form = document.body.querySelector('.form');
        const required = document.querySelectorAll("[required]");
        const date = dataDeinicio.value.split('/');
        const day = parseInt(date[0]);
        const month = parseInt(date[1]);
        const year = parseInt(date[2]);
        let errors = '';
        for (key in required) {
            let input = required[key];
            if (input.required) {
                if (input.value === "") {
                    errors += `O campo ${input.name} é obrigatório! \n`;
                };
            };
        };
        if (!(day > 0 || day <= 31 || month > 0 || month <= 12 || year > 0)) {
            errors += 'Insira uma data com o formato dd/mm/aaaa.';
        };
        alert(errors);
    };
});