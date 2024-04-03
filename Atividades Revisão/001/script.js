const PIZZA_PEQUENA = 20.00;
const PIZZA_MEDIA = 30.00;
const PIZZA_GRANDE = 40.00;



const inputState = document.getElementById('inputState');
const inlineRadio1 = document.getElementById('inlineRadio1');
const inlineRadio2 = document.getElementById('inlineRadio2');
const enviarBtn = document.getElementById('enviarBtn');
const resultado = document.getElementById('resultado');

function calcularPreco() {
  let tamanho = inputState.value;
  let comRefrigerante = inlineRadio1.checked;

  let precoPizza;

  if (tamanho === 'Pequena') {
    precoPizza = PIZZA_PEQUENA;
  } else if (tamanho === 'Média') {
    precoPizza = PIZZA_MEDIA;
  } else if (tamanho === 'Grande') {
    precoPizza = PIZZA_GRANDE;
  }

  if (comRefrigerante) {
    precoPizza += 5.00;
  }

  resultado.textContent = "O preço total é: R$" + precoPizza.toFixed(2);
}

enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    calcularPreco();
  });