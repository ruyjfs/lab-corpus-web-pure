let form = window.document.querySelector('.app-container form');

function getFormValue(form) {
  const inputs = form.querySelectorAll('input');
  let data = {};
  for (let i = 0; i < inputs.length; i++) {
    data[inputs[i].name] = inputs[i].value;
  }
  return data;
}

function calculate(weight) {
  let protein = Number(weight) * 2;
  let beef = protein*5;

  alert(`Você deve consumir ${protein}g de proteina que no caso é ${beef}g de carne por dia.`);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = getFormValue(form);
  calculate(formData.weight)
}, false );
