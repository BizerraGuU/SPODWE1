const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', () => {
  let value = telefoneInput.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  telefoneInput.value = value;
});

const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', () => {
  let value = cpfInput.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
  cpfInput.value = value;
});

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^([0-9])\1*$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

cpfInput.addEventListener('blur', () => {
  if (!validarCPF(cpfInput.value)) {
    cpfInput.setCustomValidity('CPF inválido');
  } else {
    cpfInput.setCustomValidity('');
  }
});

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
  if (!formulario.checkValidity()) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos corretamente.');
  }
});
