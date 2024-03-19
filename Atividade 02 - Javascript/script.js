function removerElemento(id) {
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.parentNode.removeChild(elemento);
    }
}

// Q001
document.getElementById('botao-01').addEventListener('click', function() {
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-01';
    form.innerHTML = `
        <label for="temperatura">Digite a temperatura em graus Celsius:</label>
        <input type="number" id="temperatura" name="temperatura" required>
        <button type="submit">Calcular</button>
        <div id="resultado-01"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let celsius = parseFloat(document.getElementById('temperatura').value);
        let fahrenheit = (celsius * 9/5) + 32;
        
        let resultado = document.getElementById('resultado-01');
        resultado.innerHTML = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2);
    });

    removerElemento('formulario-01');
    document.body.appendChild(form);
});

// Q002
document.getElementById('botao-02').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-02';
    form.innerHTML = `
        <label for="numero">Digite um número de 1 a 7:</label>
        <input type="number" id="numero" name="numero" min="1" max="7" required>
        <button type="submit">Verificar</button>
        <div id="resultado-02"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numero = parseInt(document.getElementById('numero').value);
        let diaSemana;

        switch(numero) {
            case 1:
                diaSemana = "Domingo";
                break;
            case 2:
                diaSemana = "Segunda-feira";
                break;
            case 3:
                diaSemana = "Terça-feira";
                break;
            case 4:
                diaSemana = "Quarta-feira";
                break;
            case 5:
                diaSemana = "Quinta-feira";
                break;
            case 6:
                diaSemana = "Sexta-feira";
                break;
            case 7:
                diaSemana = "Sábado";
                break;
            default:
                diaSemana = "Número inválido";
        }

        let resultado = document.getElementById('resultado-02');
        resultado.textContent = "O dia da semana correspondente é: " + diaSemana;
    });

    removerElemento('formulario-02');
    document.body.appendChild(form);
});

// Q003
document.getElementById('botao-03').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-03';
    form.innerHTML = `
        <label for="numero">Digite um número:</label>
        <input type="number" id="numero" name="numero" required>
        <button type="submit">Verificar</button>
        <div id="resultado-03"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numero = parseFloat(document.getElementById('numero').value);
        let mensagem;

        if(numero > 0) {
            mensagem = "O número é positivo.";
        } else if(numero < 0) {
            mensagem = "O número é negativo.";
        } else {
            mensagem = "O número é zero.";
        }

        let resultado = document.getElementById('resultado-03');
        resultado.textContent = mensagem;
    });

    removerElemento('formulario-03');
    document.body.appendChild(form);
});

// Q004
document.getElementById('botao-04').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-04';
    form.innerHTML = `
        <label for="custo-fabrica">Digite o custo de fábrica do carro:</label>
        <input type="number" id="custo-fabrica" name="custo-fabrica" required>
        <button type="submit">Calcular</button>
        <div id="resultado-04"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let custoFabrica = parseFloat(document.getElementById('custo-fabrica').value);
        let percentualDistribuidor = 0.28;
        let impostos = 0.45;

        let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * impostos);

        let resultado = document.getElementById('resultado-04');
        resultado.textContent = "O custo final do carro ao consumidor é: R$ " + custoFinal.toFixed(2);
    });

    removerElemento('formulario-04');
    document.body.appendChild(form);
});

// Q005
document.getElementById('botao-05').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-05';
    form.innerHTML = `
        <label for="altura">Digite sua altura (em metros):</label>
        <input type="number" id="altura" name="altura" step="0.01" required>
        <label for="peso">Digite seu peso (em kg):</label>
        <input type="number" id="peso" name="peso" required>
        <button type="submit">Calcular</button>
        <div id="resultado-05"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let altura = parseFloat(document.getElementById('altura').value);
        let peso = parseFloat(document.getElementById('peso').value);

        let imc = peso / (altura ** 2);
        let mensagem;

        if(imc < 18.5) {
            mensagem = "Você está abaixo da faixa de peso ideal.";
        } else if(imc > 24.99) {
            mensagem = "Você está acima da faixa de peso ideal.";
        } else {
            mensagem = "Você está dentro da faixa de peso ideal.";
        }

        let resultado = document.getElementById('resultado-05');
        resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + ". " + mensagem;
    });

    removerElemento('formulario-05');
    document.body.appendChild(form);
});

// Q006
document.getElementById('botao-06').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-06';
    form.innerHTML = `
        <label for="numero1">Digite o primeiro número:</label>
        <input type="number" id="numero1" name="numero1" required>
        <label for="numero2">Digite o segundo número:</label>
        <input type="number" id="numero2" name="numero2" required>
        <label for="operacao">Escolha a operação:</label>
        <select id="operacao" name="operacao" required>
            <option value="+">Adição (+)</option>
            <option value="-">Subtração (-)</option>
            <option value="*">Multiplicação (*)</option>
            <option value="/">Divisão (/)</option>
        </select>
        <button type="submit">Calcular</button>
        <div id="resultado-06"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numero1 = parseFloat(document.getElementById('numero1').value);
        let numero2 = parseFloat(document.getElementById('numero2').value);
        let operacao = document.getElementById('operacao').value;
        let resultado;

        switch(operacao) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                resultado = numero1 / numero2;
                break;
            default:
                resultado = "Operação inválida";
        }

        let resultadoDiv = document.getElementById('resultado-06');
        resultadoDiv.textContent = "O resultado da operação é: " + resultado.toFixed(2);
    });

    removerElemento('formulario-06');
    document.body.appendChild(form);
});

// Q007
document.getElementById('botao-07').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-08');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-07';
    form.innerHTML = `
        <label for="valor-saque">Digite o valor que deseja sacar (múltiplo de 5):</label>
        <input type="number" id="valor-saque" name="valor-saque" min="5" step="5" required>
        <button type="submit">Sacar</button>
        <div id="resultado-07"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valorSaque = parseFloat(document.getElementById('valor-saque').value);
        let saldoConta = 1000;
        let taxaSaque = 4.50;
        let mensagem;

        if (valorSaque <= saldoConta) {
            if (valorSaque % 5 === 0) {
                let novoSaldo = saldoConta - (valorSaque + taxaSaque);
                if (novoSaldo >= 0) {
                    saldoConta = novoSaldo;
                    mensagem = "Saque efetuado com sucesso. Novo saldo: R$ " + saldoConta.toFixed(2);
                } else {
                    mensagem = "Saldo insuficiente para efetuar o saque.";
                }
            } else {
                mensagem = "O valor de saque deve ser um múltiplo de 5.";
            }
        } else {
            mensagem = "Saldo insuficiente para efetuar o saque.";
        }

        let resultadoDiv = document.getElementById('resultado-07');
        resultadoDiv.textContent = mensagem;
    });

    removerElemento('formulario-07');
    document.body.appendChild(form);
});

// Q008
document.getElementById('botao-08').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-09');
    
    let form = document.createElement('form');
    form.id = 'formulario-08';
    form.innerHTML = `
        <label for="idade">Digite a idade do atleta:</label>
        <input type="number" id="idade" name="idade" required>
        <label for="peso">Digite o peso do atleta (em kg):</label>
        <input type="number" id="peso" name="peso" required>
        <button type="submit">Verificar</button>
        <div id="resultado-08"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let idade = parseInt(document.getElementById('idade').value);
        let peso = parseFloat(document.getElementById('peso').value);
        let categoria;

        if (idade <= 12) {
            categoria = "Infantil";
        } else if (idade >= 13 && idade <= 16) {
            categoria = (peso <= 40) ? "Juvenil leve" : "Juvenil pesado";
        } else if (idade >= 17 && idade <= 24) {
            categoria = (peso <= 45) ? "Sênior leve" : (peso <= 60) ? "Sênior médio" : "Sênior pesado";
        } else {
            categoria = "Veterano";
        }

        let resultadoDiv = document.getElementById('resultado-08');
        resultadoDiv.textContent = "Categoria do atleta: " + categoria;
    });

    removerElemento('formulario-08');
    document.body.appendChild(form);
});

// Q009
document.getElementById('botao-09').addEventListener('click', function() {
    removerElemento('formulario-01');
    removerElemento('formulario-02');
    removerElemento('formulario-03');
    removerElemento('formulario-04');
    removerElemento('formulario-05');
    removerElemento('formulario-06');
    removerElemento('formulario-07');
    removerElemento('formulario-08');
    
    let form = document.createElement('form');
    form.id = 'formulario-09';
    form.innerHTML = `
        <label for="limite">Digite o limite de velocidade (em km/h):</label>
        <input type="number" id="limite" name="limite" required>
        <label for="velocidade">Digite a velocidade do carro (em km/h):</label>
        <input type="number" id="velocidade" name="velocidade" required>
        <button type="submit">Verificar</button>
        <div id="resultado-09"></div>
    `;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let velocidade = parseInt(document.getElementById('velocidade').value);
        let limite = parseInt(document.getElementById('limite').value);
        let mensagem;

        if (velocidade > limite) {
            let multa = (velocidade - limite) * 5;
            mensagem = "Você foi multado! Valor da multa: R$ " + multa.toFixed(2);
        } else {
            mensagem = "Velocidade dentro do limite permitido.";
        }

        let resultadoDiv = document.getElementById('resultado-09');
        resultadoDiv.textContent = mensagem;
    });

    removerElemento('formulario-09');
    document.body.appendChild(form);
});