// Q001
document.getElementById('botao_01').addEventListener('click', function() {
    let formHtml = '<form id="formIdades">';
    formHtml += '<label for="idade">Idade do aluno:</label>';
    formHtml += '<input type="number" id="idade" name="idade" required><br>';
    formHtml += '<button type="submit">Adicionar</button></form>';

    document.getElementById('resultado').innerHTML = formHtml;

    let idades = [];

    document.getElementById('formIdades').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let idade = parseInt(document.getElementById('idade').value);

        if (idade === 999) {
            mostrarResultados(idades);
        } else {
            idades.push(idade);
            document.getElementById('formIdades').reset();
        }
    });
});

function mostrarResultados(idades) {
    let totalAlunos = idades.length;
    let somaIdades = idades.reduce((acc, curr) => acc + curr, 0);
    let mediaIdade = totalAlunos > 0 ? somaIdades / totalAlunos : 0;

    let resultadosHtml = '<h2>Resultados:</h2>';
    resultadosHtml += '<p>Total de alunos na turma: ' + totalAlunos + '</p>';
    resultadosHtml += '<p>Média de idade da turma: ' + mediaIdade.toFixed(2) + '</p>';

    document.getElementById('resultado').innerHTML = resultadosHtml;
}



// Q002
document.getElementById('botao_02').addEventListener('click', function() {
    let totalSalariosHomens = 0;
    let totalSalariosMulheres = 0;

    let adicionarCliente = function() {
        let formHtml = '<form id="formCliente">';
        formHtml += '<label for="salario">Salário do cliente:</label>';
        formHtml += '<input type="number" id="salario" name="salario" required><br>';
        formHtml += '<label for="sexo">Sexo do cliente:</label>';
        formHtml += '<select id="sexo" name="sexo">';
        formHtml += '<option value="Masculino" selected>Masculino</option>';
        formHtml += '<option value="Feminino">Feminino</option>';
        formHtml += '</select><br>';
        formHtml += '<button type="submit">Adicionar Cliente</button>';
        formHtml += '</form>';

        document.getElementById('resultado').innerHTML = formHtml;

        document.getElementById('formCliente').addEventListener('submit', function(event) {
            event.preventDefault();
            
            let salario = parseFloat(document.getElementById('salario').value);
            let sexo = document.getElementById('sexo').value;

            if (sexo === 'Masculino') {
                totalSalariosHomens += salario;
            } else {
                totalSalariosMulheres += salario;
            }

            mostrarOpcoes();
        });
    };

    let mostrarOpcoes = function() {
        let opcoesHtml = '<button id="botao_adicionar" type="button">Adicionar outro cliente</button>';
        opcoesHtml += '<button id="botao_finalizar" type="button">Finalizar</button>';

        document.getElementById('formCliente').style.display = 'none';
        document.getElementById('resultado').insertAdjacentHTML('beforeend', opcoesHtml);

        document.getElementById('botao_adicionar').addEventListener('click', function() {
            adicionarCliente();
        });

        document.getElementById('botao_finalizar').addEventListener('click', function() {
            mostrarResultados();
        });
    };

    let mostrarResultados = function() {
        let resultadosHtml = '<h2>Resultados:</h2>';
        resultadosHtml += '<p>Total de salários pagos aos homens: ' + totalSalariosHomens.toFixed(2) + '</p>';
        resultadosHtml += '<p>Total de salários pagos às mulheres: ' + totalSalariosMulheres.toFixed(2) + '</p>';

        document.getElementById('resultado').innerHTML = resultadosHtml;
    };

    adicionarCliente();
});



// Q003
document.getElementById('botao_03').addEventListener('click', function() {
    let formHtml = '<form id="contagemForm">';
    formHtml += '<label for="primeiroValor">Digite o primeiro Valor:</label>';
    formHtml += '<input type="number" id="primeiroValor" name="primeiroValor" required><br>';

    formHtml += '<label for="ultimoValor">Digite o último Valor:</label>';
    formHtml += '<input type="number" id="ultimoValor" name="ultimoValor" required><br>';

    formHtml += '<label for="incremento">Digite o incremento:</label>';
    formHtml += '<input type="number" id="incremento" name="incremento" required><br>';

    formHtml += '<button type="submit">Iniciar Contagem</button>';
    formHtml += '</form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('contagemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let primeiroValor = parseInt(document.getElementById('primeiroValor').value);
        let ultimoValor = parseInt(document.getElementById('ultimoValor').value);
        let incremento = parseInt(document.getElementById('incremento').value);

        let contagem = '';

        for (let i = primeiroValor; i <= ultimoValor; i += incremento) {
            contagem += i + ' ';
        }

        contagem += 'Acabou!';

        document.getElementById('resultado').textContent = 'Contagem: ' + contagem;
    });
});



// Q004
document.getElementById('botao_04').addEventListener('click', function() {
    let formHtml = '<form id="descontoForm">';
    formHtml += '<label for="nome">Nome:</label>';
    formHtml += '<input type="text" id="nome" name="nome" required><br>';
    formHtml += '<label for="sexo">Sexo:</label>';
    formHtml += '<select id="sexo" name="sexo">';
    formHtml += '<option value="Masculino">Masculino</option>';
    formHtml += '<option value="Feminino">Feminino</option>';
    formHtml += '</select><br>';
    formHtml += '<label for="valorCompras">Valor das compras:</label>';
    formHtml += '<input type="number" id="valorCompras" name="valorCompras" min="0" step="0.01" required><br>';
    formHtml += '<button type="submit">Calcular Desconto</button>';
    formHtml += '</form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('descontoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let sexo = document.getElementById('sexo').value;
        let valorCompras = parseFloat(document.getElementById('valorCompras').value);

        let desconto = 0;
        if (sexo === 'Masculino') {
            desconto = 0.05;
        } else {
            desconto = 0.13;
        }

        let valorDesconto = valorCompras * desconto;
        let valorFinal = valorCompras - valorDesconto;

        document.getElementById('resultado').textContent = 'Cliente: ' + nome + '\nValor com desconto: R$ ' + valorFinal.toFixed(2);
    });
});



// Q005
document.getElementById('botao_05').addEventListener('click', function() {
    let formHtml = '<form id="passagemForm">';
    formHtml += '<label for="distancia">Distância em Km:</label>';
    formHtml += '<input type="number" id="distancia" name="distancia" min="0" step="0.01" required><br>';
    formHtml += '<button type="submit">Calcular Preço da Passagem</button>';
    formHtml += '</form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('passagemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let distancia = parseFloat(document.getElementById('distancia').value);
        let precoPorKm = distancia <= 200 ? 0.50 : 0.45;
        let precoPassagem = distancia * precoPorKm;

        document.getElementById('resultado').textContent = 'Preço da passagem: R$ ' + precoPassagem.toFixed(2);
    });
});



// Q006
document.getElementById('botao_06').addEventListener('click', function() {
    let formHtml = '<form id="terrenoForm">';
    formHtml += '<label for="largura">Largura do terreno (m):</label>';
    formHtml += '<input type="number" id="largura" name="largura" min="0" step="0.01" required><br>';
    formHtml += '<label for="comprimento">Comprimento do terreno (m):</label>';
    formHtml += '<input type="number" id="comprimento" name="comprimento" min="0" step="0.01" required><br>';
    formHtml += '<button type="submit">Calcular Área</button>';
    formHtml += '</form>';

    document.getElementById('resultado').innerHTML = formHtml;

    document.getElementById('terrenoForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let largura = parseFloat(document.getElementById('largura').value);
        let comprimento = parseFloat(document.getElementById('comprimento').value);

        let area = largura * comprimento;
        let classificacao = '';

        if (area < 100) {
            classificacao = 'TERRENO POPULAR';
        } else if (area >= 100 && area <= 500) {
            classificacao = 'TERRENO MASTER';
        } else {
            classificacao = 'TERRENO VIP';
        }

        document.getElementById('resultado').textContent = 'Área do terreno: ' + area.toFixed(2) + 'm²\nClassificação: ' + classificacao;
    });
});