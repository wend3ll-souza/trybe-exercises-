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
const inputStyle = document.getElementsByTagName('input');
const required = document.querySelectorAll("[required]");
const textareas = document.getElementsByTagName('textarea');
for (key in inputStyle) {
    let input = inputStyle[key];
    if (input.required) {
        input.classList.add('input')
    };
};
for (key in textareas) {
    let input = textareas[key];
    if (input.required) {
        input.classList.add('textarea')
    };
};
let dataDeinicio = document.querySelector('#date');
for (key in estados) {
    let status = document.createElement('option');
    status.innerText = estados[key];
    document.querySelector('#status').appendChild(status);
};

addEventListener('click', (event) => {
    if (event.target.id === 'submit') {
        event.preventDefault();
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