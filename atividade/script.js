'use strict';

const cep = document.querySelector('#cep');
const buscarCepBtn = document.querySelector('#buscarCep');

buscarCepBtn.addEventListener('click', buscaCEP);

function apresentarDados(data) {
    for (const campo in data) {
        if (document.querySelector('#' + campo)) {
            document.querySelector('#' + campo).value = data[campo];
        }
    }
}

function buscaCEP() {
    let busca = cep.value.replace('-', '');

    if (busca.length !== 8 || isNaN(busca)) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`)
        .then(response => response.json())
        .then(data => apresentarDados(data))
        .catch(e => console.log('Erro: ', e.message));
}