function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function questao1() {
    limparResultado();
    let formulario = document.createElement('form');
    formulario.innerHTML = `
        <label for="numeros">Insira os números separados por vírgula:</label><br>
        <input type="text" id="numeros" name="numeros"><br><br>
        <button type="submit">Verificar</button>
    `;
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let numeros = document.getElementById('numeros').value.split(',').map(num => parseInt(num));
        let pares = numeros.filter(num => num % 2 === 0);
        document.getElementById('resultado').innerText = `Valores pares: ${pares.join(', ')}`;
    });
    document.getElementById('resultado').appendChild(formulario);
}

function questao2() {
    limparResultado();
    let formulario = document.createElement('form');
    formulario.innerHTML = `
        <label for="numeros">Insira os números separados por vírgula:</label><br>
        <input type="text" id="numeros" name="numeros"><br><br>
        <button type="submit">Calcular Soma</button>
    `;
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let numeros = document.getElementById('numeros').value.split(',').map(num => parseInt(num));
        let soma = numeros.reduce((acc, curr) => acc + curr, 0);
        document.getElementById('resultado').innerText = `Soma dos elementos: ${soma}`;
    });
    document.getElementById('resultado').appendChild(formulario);
}

function questao3() {
    limparResultado();
    let vetor = [6, 28, 496, 8128];
    document.getElementById('resultado').innerText = `Números perfeitos: ${vetor.join(', ')}`;
}

function questao4() {
    limparResultado();
    let lista = [4, 6, 90, 43, 77];
    let formulario = document.createElement('form');
    formulario.innerHTML = `
        <label for="numero">Digite um número:</label><br>
        <input type="text" id="numero" name="numero"><br><br>
        <button type="submit">Verificar</button>
    `;
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let numero = parseInt(document.getElementById('numero').value);
        if (lista.includes(numero)) {
            document.getElementById('resultado').innerText = `O número ${numero} está na lista.`;
        } else {
            document.getElementById('resultado').innerText = `O número ${numero} não está na lista.`;
        }
    });
    document.getElementById('resultado').appendChild(formulario);
}

function questao5() {
    limparResultado();
    let formulario = document.createElement('form');
    formulario.innerHTML = `
        <label for="nomes">Digite os nomes separados por vírgula:</label><br>
        <input type="text" id="nomes" name="nomes"><br><br>
        <button type="submit">Exibir Nomes</button>
    `;
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        let nomes = document.getElementById('nomes').value.split(',');
        let nomesInvertidos = nomes.slice().reverse();
        document.getElementById('resultado').innerText = `Nomes: ${nomes.join(', ')}\nNomes Invertidos: ${nomesInvertidos.join(', ')}`;
    });
    document.getElementById('resultado').appendChild(formulario);
}

document.getElementById('botao_01').addEventListener('click', questao1);
document.getElementById('botao_02').addEventListener('click', questao2);
document.getElementById('botao_03').addEventListener('click', questao3);
document.getElementById('botao_04').addEventListener('click', questao4);
document.getElementById('botao_05').addEventListener('click', questao5);