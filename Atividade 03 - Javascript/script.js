// Q001
document.getElementById('botao_01').addEventListener('click', function() {
    let formHtml = '<form id="formAlturas">';
    for (let i = 0; i < 15; i++) {
        formHtml += '<label for="altura_' + (i + 1) + '">Altura da pessoa ' + (i + 1) + ':</label>';
        formHtml += '<input type="number" id="altura_' + (i + 1) + '" name="altura_' + (i + 1) + '" step="0.01" required><br>';
    }
    formHtml += '<button type="submit">Calcular</button></form>';
    
    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formAlturas').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let alturas = [];
        for (let i = 0; i < 15; i++) {
            let altura = parseFloat(document.getElementById('altura_' + (i + 1)).value);
            alturas.push(altura);
        }

        let menorAltura = Math.min(...alturas);
        let maiorAltura = Math.max(...alturas);

        let resultadosHtml = '<h2>Resultados:</h2>';
        resultadosHtml += '<p>Menor altura do grupo: ' + menorAltura + '</p>';
        resultadosHtml += '<p>Maior altura do grupo: ' + maiorAltura + '</p>';
        
        document.getElementById('resultado').innerHTML += resultadosHtml;
    });
});



// Q002
document.getElementById('botao_02').addEventListener('click', function() {
    let formHtml = '<form id="formNomes">';
    formHtml += '<label for="nome_1">Nome do Primeiro Usuario(O mais alto):</label>';
    formHtml += '<input type="text" id="nome_1" name="nome_1" required><br>';
    formHtml += '<label for="nome_2">Nome do Segundo Usuario(O mais baixo):</label>';
    formHtml += '<input type="text" id="nome_2" name="nome_2" required><br>';
    formHtml += '<button type="submit">Próximo</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formNomes').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let nome1 = document.getElementById('nome_1').value;
        let nome2 = document.getElementById('nome_2').value;

        exibirFormularioAltura(nome1, nome2);
    });
});

function exibirFormularioAltura(nome1, nome2) {
    let formHtml = '<form id="formAlturas">';
    formHtml += '<label for="altura_1">Altura inicial de ' + nome1 + ' (em cm):</label>';
    formHtml += '<input type="number" id="altura_1" name="altura_1" step="0.01" required><br>';
    formHtml += '<label for="altura_2">Altura inicial de ' + nome2 + ' (em cm):</label>';
    formHtml += '<input type="number" id="altura_2" name="altura_2" step="0.01" required><br>';
    formHtml += '<label for="crescimento_1">Crescimento anual de ' + nome1 + ' (em cm):</label>';
    formHtml += '<input type="number" id="crescimento_1" name="crescimento_1" step="0.01" required><br>';
    formHtml += '<label for="crescimento_2">Crescimento anual de ' + nome2 + ' (em cm):</label>';
    formHtml += '<input type="number" id="crescimento_2" name="crescimento_2" step="0.01" required><br>';
    formHtml += '<button type="submit">Calcular</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formAlturas').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let altura1 = parseFloat(document.getElementById('altura_1').value);
        let altura2 = parseFloat(document.getElementById('altura_2').value);
        let crescimento1 = parseFloat(document.getElementById('crescimento_1').value);
        let crescimento2 = parseFloat(document.getElementById('crescimento_2').value);

        calcularAnos(nome1, nome2, altura1, altura2, crescimento1, crescimento2);
    });
}

function calcularAnos(nome1, nome2, altura1Inicial, altura2Inicial, crescimento1, crescimento2) {
    let anos = 0;

    let altura1 = altura1Inicial;
    let altura2 = altura2Inicial;
    while (altura1 > altura2) {
        altura1 += crescimento1;
        altura2 += crescimento2;
        anos++;
    }
    let anosParaMesmoTamanho = anos;

    altura1 = altura1Inicial;
    altura2 = altura2Inicial;
    anos = 0;
    while (altura2 <= altura1) {
        altura1 += crescimento1;
        altura2 += crescimento2;
        anos++;
    }
    let anosPara2Maior = anos;

    let resultadosHtml = '<h2>Resultados:</h2>';
    resultadosHtml += '<p>Serão necessários ' + anosParaMesmoTamanho + ' anos para que ' + nome1 + ' e ' + nome2 + ' tenham o mesmo tamanho.</p>';
    resultadosHtml += '<p>Serão necessários ' + anosPara2Maior + ' anos para que ' + nome2 + ' seja maior que ' + nome1 + '.</p>';

    document.getElementById('resultado').innerHTML = resultadosHtml;
}

// Q003
document.getElementById('botao_03').addEventListener('click', function() {
    let formHtml = '<form id="formTabuada">';
    formHtml += '<label for="numero_tabuada">Número para a tabuada:</label>';
    formHtml += '<input type="number" id="numero_tabuada" name="numero_tabuada" required><br>';
    formHtml += '<label for="quantidade_iteracoes">Quantidade de iterações:</label>';
    formHtml += '<input type="number" id="quantidade_iteracoes" name="quantidade_iteracoes" required><br>';
    formHtml += '<button type="submit">Calcular</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formTabuada').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numeroTabuada = parseInt(document.getElementById('numero_tabuada').value);
        let quantidadeIteracoes = parseInt(document.getElementById('quantidade_iteracoes').value);

        calcularTabuada(numeroTabuada, quantidadeIteracoes);
    });
});

function calcularTabuada(numeroTabuada, quantidadeIteracoes) {
    let resultadosHtml = '<h2>Resultado da tabuada:</h2>';
    for (let i = 1; i <= quantidadeIteracoes; i++) {
        resultadosHtml += '<p>' + i + ' * ' + numeroTabuada + ' = ' + (i * numeroTabuada) + '</p>';
    }

    document.getElementById('resultado').innerHTML = resultadosHtml;
}

// Q004
document.getElementById('botao_04').addEventListener('click', function() {
    let formHtml = '<form id="formIntervalo">';
    formHtml += '<label for="numero_inicial">Número inicial:</label>';
    formHtml += '<input type="number" id="numero_inicial" name="numero_inicial" required><br>';
    formHtml += '<label for="numero_final">Número final:</label>';
    formHtml += '<input type="number" id="numero_final" name="numero_final" required><br>';
    formHtml += '<button type="submit">Verificar</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formIntervalo').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numeroInicial = parseInt(document.getElementById('numero_inicial').value);
        let numeroFinal = parseInt(document.getElementById('numero_final').value);

        verificarMultiplos(numeroInicial, numeroFinal);
    });
});

function verificarMultiplos(numeroInicial, numeroFinal) {
    let multiplosDe3 = [];
    let multiplosDe5 = [];

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 3 === 0) {
            multiplosDe3.push(i);
        }
        if (i % 5 === 0) {
            multiplosDe5.push(i);
        }
    }

    let resultadosHtml = '<h2>Múltiplos de 3:</h2>';
    resultadosHtml += '<p>' + (multiplosDe3.length > 0 ? multiplosDe3.join(', ') : 'Nenhum múltiplo de 3 encontrado dentro do intervalo.') + '</p>';
    resultadosHtml += '<h2>Múltiplos de 5:</h2>';
    resultadosHtml += '<p>' + (multiplosDe5.length > 0 ? multiplosDe5.join(', ') : 'Nenhum múltiplo de 5 encontrado dentro do intervalo.') + '</p>';

    document.getElementById('resultado').innerHTML = resultadosHtml;
}

// Q005
document.getElementById('botao_05').addEventListener('click', function() {
    let formHtml = '<form id="formNumero">';
    formHtml += '<label for="numero">Digite um número inteiro positivo:</label>';
    formHtml += '<input type="number" id="numero" name="numero" min="1" required><br>';
    formHtml += '<button type="submit">Mostrar Contagem</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formNumero').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numero = parseInt(document.getElementById('numero').value);

        mostrarContagem(numero);
    });
});

function mostrarContagem(numero) {
    let contagem = '';
    for (let i = 0; i <= numero; i++) {
        contagem += i + ', ';
    }
    contagem += 'FIM!';

    document.getElementById('resultado').innerHTML = '<p>Contagem: ' + contagem + '</p>';
}

// Questão 06
document.getElementById('botao_06').addEventListener('click', function() {
    let formHtml = '<form id="formUltimoNumero">';
    formHtml += '<label for="ultimo_numero">Digite o último número da contagem regressiva:</label>';
    formHtml += '<input type="number" id="ultimo_numero" name="ultimo_numero" min="1" required><br>';
    formHtml += '<button type="submit">Mostrar Contagem Regressiva</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formUltimoNumero').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let ultimoNumero = parseInt(document.getElementById('ultimo_numero').value);

        mostrarContagemRegressiva(ultimoNumero);
    });
});

function mostrarContagemRegressiva(ultimoNumero) {
    let contagem = '';
    for (let i = 30; i >= 1; i--) {
        if (ehPrimo(i)) {
            contagem += '[' + i + '] ';
        } else {
            contagem += i + ' ';
        }
    }

    document.getElementById('resultado').innerHTML = '<p>Contagem regressiva: ' + contagem + '</p>';
}

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Q007
document.getElementById('botao_07').addEventListener('click', function() {
    let formHtml = '<form id="formNumeros">';
    for (let i = 1; i <= 10; i++) {
        formHtml += '<label for="numero_' + i + '">Número ' + i + ':</label>';
        formHtml += '<input type="number" id="numero_' + i + '" name="numero_' + i + '" required><br>';
    }
    formHtml += '<button type="submit">Calcular</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('formNumeros').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let numeros = [];
        for (let i = 1; i <= 10; i++) {
            numeros.push(parseFloat(document.getElementById('numero_' + i).value));
        }

        calcularEstatisticas(numeros);
    });
});

function calcularEstatisticas(numeros) {
    let totalNumeros = numeros.length;
    let soma = numeros.reduce((acc, curr) => acc + curr, 0);
    let media = soma / totalNumeros;
    
    let quantidadePositivos = numeros.filter(num => num > 0).length;
    let quantidadeNegativos = numeros.filter(num => num < 0).length;
    
    let percentualPositivos = (quantidadePositivos / totalNumeros) * 100;
    let percentualNegativos = (quantidadeNegativos / totalNumeros) * 100;
    
    let resultadosHtml = '<h2>Resultados:</h2>';
    resultadosHtml += '<p>Média aritmética: ' + media.toFixed(2) + '</p>';
    resultadosHtml += '<p>Quantidade de valores positivos: ' + quantidadePositivos + '</p>';
    resultadosHtml += '<p>Quantidade de valores negativos: ' + quantidadeNegativos + '</p>';
    resultadosHtml += '<p>Percentual de valores positivos: ' + percentualPositivos.toFixed(2) + '%</p>';
    resultadosHtml += '<p>Percentual de valores negativos: ' + percentualNegativos.toFixed(2) + '%</p>';

    document.getElementById('resultado').innerHTML = resultadosHtml;
}