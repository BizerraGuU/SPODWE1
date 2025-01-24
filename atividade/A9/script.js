const previewBox = document.getElementById('preview-box');
const output = document.getElementById('output');

const inputs = [
  document.getElementById('top-left'),
  document.getElementById('top-right'),
  document.getElementById('bottom-left'),
  document.getElementById('bottom-right')
];

function updateBorderRadius() {
  const values = inputs.map(input => `${input.value}px`);
  previewBox.style.borderRadius = values.join(' ');
  output.textContent = `border-radius: ${values.join(' ')};`;
}

inputs.forEach(input => {
  input.addEventListener('input', updateBorderRadius);
});

updateBorderRadius();
