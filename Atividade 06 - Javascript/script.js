// Q001
document.getElementById('botao_01').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '<form id="formIdade">' +
                            '<label for="idade">Digite sua idade:</label>' +
                            '<input type="number" id="idade" name="idade" min="0" required>' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let idade = parseInt(document.getElementById('idade').value);
        
        if (idade >= 18) {
            resultado.textContent = "Pode dirigir";
        } else {
            resultado.textContent = "Não pode dirigir";
        }
    });
});



// Q002
document.getElementById('botao_02').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '<form id="formIdadeHabilitacao">' +
                            '<label for="idade">Digite sua idade:</label>' +
                            '<input type="number" id="idade" name="idade" min="0" required>' +
                            '<label for="habilitado">Possui habilitação? </label>' +
                            '<input type="checkbox" id="habilitado" name="habilitado">' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let idade = parseInt(document.getElementById('idade').value);
        let habilitado = document.getElementById('habilitado').checked;
        
        if (idade >= 18 && habilitado) {
            resultado.textContent = "Pode dirigir";
        } else {
            resultado.textContent = "Não pode dirigir";
        }
    });
});



// Q003
document.getElementById('botao_03').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formDiaSemana">' +
                            '<label for="diaSemana">Digite um número de 1 a 7 para representar o dia da semana:</label>' +
                            '<input type="number" id="diaSemana" name="diaSemana" min="1" max="7" required>' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let diaSemana = parseInt(document.getElementById('diaSemana').value);
        let resultadoFinal = '';

        if (diaSemana === 1) {
            resultadoFinal = "Domingo";
        } else if (diaSemana === 2) {
            resultadoFinal = "Segunda-feira";
        } else if (diaSemana === 3) {
            resultadoFinal = "Terça-feira";
        } else if (diaSemana === 4) {
            resultadoFinal = "Quarta-feira";
        } else if (diaSemana === 5) {
            resultadoFinal = "Quinta-feira";
        } else if (diaSemana === 6) {
            resultadoFinal = "Sexta-feira";
        } else if (diaSemana === 7) {
            resultadoFinal = "Sábado";
        } else {
            resultadoFinal = "Dia não reconhecido";
        }

        resultado.innerHTML = resultadoFinal;
    });
});



// Q004
document.getElementById('botao_04').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formDiaSemana">' +
                            '<label for="diaSemana">Digite um número de 1 a 7 para representar o dia da semana:</label>' +
                            '<input type="number" id="diaSemana" name="diaSemana" min="1" max="7" required>' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let diaSemana = parseInt(document.getElementById('diaSemana').value);
        let resultadoFinal = '';

        switch (diaSemana) {
            case 1:
                resultadoFinal = "Domingo";
                break;
            case 2:
                resultadoFinal = "Segunda-feira";
                break;
            case 3:
                resultadoFinal = "Terça-feira";
                break;
            case 4:
                resultadoFinal = "Quarta-feira";
                break;
            case 5:
                resultadoFinal = "Quinta-feira";
                break;
            case 6:
                resultadoFinal = "Sexta-feira";
                break;
            case 7:
                resultadoFinal = "Sábado";
                break;
            default:
                resultadoFinal = "Dia não reconhecido";
        }

        resultado.innerHTML = resultadoFinal;
    });
});



// Q005
document.getElementById('botao_05').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formNumerosPares">' +
                            '<label for="ultimoNumero">Digite o último número da sequência:</label>' +
                            '<input type="number" id="ultimoNumero" name="ultimoNumero" min="1" required>' +
                            '<button type="button" id="gerarNumerosBtn">Gerar Números Pares</button>' +
                          '</form>';

    document.getElementById('gerarNumerosBtn').addEventListener('click', function() {
        let ultimoNumero = parseInt(document.getElementById('ultimoNumero').value);
        let numerosPares = '';

        for (let i = 1; i <= ultimoNumero; i++) {
            if (i % 2 === 0) {
                numerosPares += i + ' ';
            }
        }

        resultado.textContent = 'Números pares de 1 a ' + ultimoNumero + ': ' + numerosPares;
    });
});



// Q006
document.getElementById('botao_06').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');
    let numerosImpares = '';

    for (let i = 1; i <= 59; i += 2) {
        numerosImpares += i + ' ';
    }

    resultado.textContent = '30 números ímpares: ' + numerosImpares;
});



// Q007
document.getElementById('botao_07').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formSomaNumeros">' +
                            '<label for="inicio">Digite o número inicial:</label>' +
                            '<input type="number" id="inicio" name="inicio" required>' +
                            '<label for="fim">Digite o número final:</label>' +
                            '<input type="number" id="fim" name="fim" required>' +
                            '<button type="button" id="calcularSomaBtn">Calcular Soma</button>' +
                          '</form>';

    document.getElementById('calcularSomaBtn').addEventListener('click', function() {
        let inicio = parseInt(document.getElementById('inicio').value);
        let fim = parseInt(document.getElementById('fim').value);
        let soma = 0;
        let numeroAtual = inicio;

        do {
            soma += numeroAtual;
            numeroAtual++;
        } while (numeroAtual <= fim);

        resultado.textContent = 'A soma dos números entre ' + inicio + ' e ' + fim + ' é: ' + soma;
    });
});



// Q008
document.getElementById('botao_08').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '<form id="formSalario">' +
                            '<label for="salario">Digite o salário do usuário:</label>' +
                            '<input type="number" id="salario" name="salario" required>' +
                            '<button type="button" id="verificarSalarioBtn">Verificar IR</button>' +
                          '</form>';

    document.getElementById('verificarSalarioBtn').addEventListener('click', function() {
        let salario = parseFloat(document.getElementById('salario').value);

        if (salario < 1903.98) {
            resultado.textContent = 'ISENTO DE IR';
        } else {
            resultado.textContent = 'TRIBUTADO NO IR';
        }
    });
});



// Q009
document.getElementById('botao_09').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formNumero">' +
                            '<label for="numero">Digite um número:</label>' +
                            '<input type="number" id="numero" name="numero" required>' +
                            '<button type="button" id="verificarPrimoBtn">Verificar Primo</button>' +
                          '</form>';

    document.getElementById('verificarPrimoBtn').addEventListener('click', function() {
        let numero = parseInt(document.getElementById('numero').value);
        let primo = true;

        if (numero <= 1) {
            primo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    primo = false;
                    break;
                }
            }
        }

        if (primo) {
            resultado.textContent = numero + ' é primo.';
        } else {
            resultado.textContent = numero + ' não é primo.';
        }
    });
});



// Q010
document.getElementById('botao_10').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formPesoIdeal">' +
                            '<label for="altura">Digite a altura (em metros):</label>' +
                            '<input type="number" id="altura" name="altura" step="0.01" required>' +
                            '<label for="sexo">Selecione o sexo:</label>' +
                            '<select id="sexo" name="sexo" required>' +
                                '<option value="1">Feminino</option>' +
                                '<option value="2">Masculino</option>' +
                            '</select>' +
                            '<button type="button" id="calcularPesoIdealBtn">Calcular Peso Ideal</button>' +
                          '</form>';

    document.getElementById('calcularPesoIdealBtn').addEventListener('click', function() {
        let altura = parseFloat(document.getElementById('altura').value);
        let sexo = parseInt(document.getElementById('sexo').value);
        let pesoIdeal;

        if (sexo === 1) {
            pesoIdeal = (62.1 * altura) - 44.7;
            resultado.textContent = 'O peso ideal para uma mulher com altura de ' + altura + ' metros é ' + pesoIdeal.toFixed(2) + ' kg.';
        } else if (sexo === 2) {
            pesoIdeal = (72.7 * altura) - 58;
            resultado.textContent = 'O peso ideal para um homem com altura de ' + altura + ' metros é ' + pesoIdeal.toFixed(2) + ' kg.';
        }
    });
});



// Q011
document.getElementById('botao_11').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formTurno">' +
                            '<label for="turno">Em qual turno você estuda?</label>' +
                            '<select id="turno" name="turno" required>' +
                                '<option value="M">Matutino</option>' +
                                '<option value="V">Vespertino</option>' +
                                '<option value="N">Noturno</option>' +
                            '</select>' +
                            '<button type="button" id="verificarTurnoBtn">Verificar Turno</button>' +
                          '</form>' +
                          '<p id="mensagemTurno"></p>';

    document.getElementById('verificarTurnoBtn').addEventListener('click', function() {
        let turno = document.getElementById('turno').value;
        let mensagem;

        switch(turno) {
            case 'M':
                mensagem = 'Bom dia!';
                break;
            case 'V':
                mensagem = 'Boa tarde!';
                break;
            case 'N':
                mensagem = 'Boa noite!';
                break;
            default:
                mensagem = 'Valor inválido';
        }

        document.getElementById('mensagemTurno').textContent = mensagem;
    });
});



// Q012
document.getElementById('botao_12').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formIdade">' +
                            '<label for="idade">Qual é a sua idade?</label>' +
                            '<input type="number" id="idade" name="idade" required>' +
                            '<button type="button" id="verificarIdadeBtn">Verificar Idade</button>' +
                          '</form>' +
                          '<p id="mensagemIdade"></p>';

    document.getElementById('verificarIdadeBtn').addEventListener('click', function() {
        let idade = parseInt(document.getElementById('idade').value);
        let mensagem;

        if (idade >= 18 && idade <= 67) {
            mensagem = 'Você pode doar sangue.';
        } else {
            mensagem = 'Você não pode doar sangue.';
        }

        document.getElementById('mensagemIdade').textContent = mensagem;
    });
});



// Q013
document.getElementById('botao_13').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formNumero">' +
                            '<label for="numero">Digite um número:</label>' +
                            '<input type="number" id="numero" name="numero" required>' +
                            '<button type="button" id="imprimirImparesBtn">Imprimir Ímpares</button>' +
                          '</form>' +
                          '<p id="numerosImpares"></p>';

    document.getElementById('imprimirImparesBtn').addEventListener('click', function() {
        let numero = parseInt(document.getElementById('numero').value);
        let numerosImpares = '';

        for (let i = 1; i <= numero; i++) {
            if (i % 2 !== 0) {
                numerosImpares += i + ' ';
            }
        }

        document.getElementById('numerosImpares').textContent = 'Números ímpares até ' + numero + ': ' + numerosImpares;
    });
});



// Q014
document.getElementById('botao_14').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formNumero">' +
                            '<label for="numero">Digite um número:</label>' +
                            '<input type="number" id="numero" name="numero" required>' +
                            '<button type="button" id="calcularBtn">Calcular</button>' +
                          '</form>' +
                          '<p id="ultimoValor"></p>';

    document.getElementById('calcularBtn').addEventListener('click', function() {
        let numero = parseInt(document.getElementById('numero').value);
        let produto = numero;
        
        while (produto * 3 < 500) {
            produto *= 3;
        }

        document.getElementById('ultimoValor').textContent = 'O último valor após a multiplicação é: ' + produto;
    });
});



// Q015
document.getElementById('botao_15').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formTriangulo">' +
                            '<label for="ladoA">Lado A:</label>' +
                            '<input type="number" id="ladoA" name="ladoA" required><br>' +
                            '<label for="ladoB">Lado B:</label>' +
                            '<input type="number" id="ladoB" name="ladoB" required><br>' +
                            '<label for="ladoC">Lado C:</label>' +
                            '<input type="number" id="ladoC" name="ladoC" required><br>' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>' +
                          '<p id="tipoTriangulo"></p>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let ladoA = parseFloat(document.getElementById('ladoA').value);
        let ladoB = parseFloat(document.getElementById('ladoB').value);
        let ladoC = parseFloat(document.getElementById('ladoC').value);

        if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
            if (ladoA === ladoB && ladoB === ladoC) {
                document.getElementById('tipoTriangulo').textContent = 'Triângulo equilátero';
            } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                document.getElementById('tipoTriangulo').textContent = 'Triângulo isósceles';
            } else {
                document.getElementById('tipoTriangulo').textContent = 'Triângulo escaleno';
            }
        } else {
            document.getElementById('tipoTriangulo').textContent = 'Os lados fornecidos não formam um triângulo';
        }
    });
});



// Q016
document.getElementById('botao_16').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formIdade">' +
                            '<label for="anoAtual">Ano Atual:</label>' +
                            '<input type="number" id="anoAtual" name="anoAtual" required><br>' +
                            '<label for="anoNascimento">Ano de Nascimento:</label>' +
                            '<input type="number" id="anoNascimento" name="anoNascimento" required><br>' +
                            '<button type="button" id="verificarBtn">Verificar</button>' +
                          '</form>' +
                          '<p id="mensagemVoto"></p>';

    document.getElementById('verificarBtn').addEventListener('click', function() {
        let anoAtual = parseInt(document.getElementById('anoAtual').value);
        let anoNascimento = parseInt(document.getElementById('anoNascimento').value);
        let idade = anoAtual - anoNascimento;

        if (idade >= 16) {
            document.getElementById('mensagemVoto').textContent = 'Você pode votar este ano.';
        } else {
            document.getElementById('mensagemVoto').textContent = 'Você não pode votar este ano.';
        }
    });
});



// Q017
document.getElementById('botao_17').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = '<form id="formEleitores">' +
                            '<label for="totalEleitores">Número Total de Eleitores:</label>' +
                            '<input type="number" id="totalEleitores" name="totalEleitores" required><br>' +
                            '<label for="votosBrancos">Votos Brancos:</label>' +
                            '<input type="number" id="votosBrancos" name="votosBrancos" required><br>' +
                            '<label for="votosNulos">Votos Nulos:</label>' +
                            '<input type="number" id="votosNulos" name="votosNulos" required><br>' +
                            '<label for="votosValidos">Votos Válidos:</label>' +
                            '<input type="number" id="votosValidos" name="votosValidos" required><br>' +
                            '<button type="button" id="calcularBtn">Calcular</button>' +
                          '</form>' +
                          '<div id="percentuais"></div>';

    document.getElementById('calcularBtn').addEventListener('click', function() {
        let totalEleitores = parseInt(document.getElementById('totalEleitores').value);
        let votosBrancos = parseInt(document.getElementById('votosBrancos').value);
        let votosNulos = parseInt(document.getElementById('votosNulos').value);
        let votosValidos = parseInt(document.getElementById('votosValidos').value);

        if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
            let percentualBrancos = (votosBrancos / totalEleitores) * 100;
            let percentualNulos = (votosNulos / totalEleitores) * 100;
            let percentualValidos = (votosValidos / totalEleitores) * 100;

            document.getElementById('percentuais').innerHTML = '<p>Percentual de votos brancos: ' + percentualBrancos.toFixed(2) + '%</p>' +
                                                                '<p>Percentual de votos nulos: ' + percentualNulos.toFixed(2) + '%</p>' +
                                                                '<p>Percentual de votos válidos: ' + percentualValidos.toFixed(2) + '%</p>';
        } else {
            document.getElementById('percentuais').textContent = 'A soma dos votos não pode ser maior que o número total de eleitores.';
        }
    });
});



// Q018
document.getElementById("botao_18").addEventListener("click", function() {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <form id="formulario_18">
            <label for="preco">Preço de tabela:</label>
            <input type="number" id="preco" name="preco" required><br><br>
            <label for="parcelas">Número de parcelas:</label>
            <input type="number" id="parcelas" name="parcelas" min="1" max="15" required><br><br>
            <button type="button" onclick="calcularParcelas()">Calcular</button>
        </form>
    `;
});

function calcularParcelas() {
    const preco = parseFloat(document.getElementById("preco").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);

    let valorParcela;
    let precoTotal;

    if (parcelas === 1) {

        valorParcela = preco * 0.975;
        precoTotal = valorParcela;
    } else if (parcelas >= 2 && parcelas <= 5) {

        valorParcela = preco / parcelas;
        precoTotal = preco;
    } else if (parcelas >= 6 && parcelas <= 10) {

        valorParcela = (preco * 1.06) / parcelas;
        precoTotal = preco * 1.06;
    } else if (parcelas >= 11 && parcelas <= 15) {

        valorParcela = (preco * 1.13) / parcelas;
        precoTotal = preco * 1.13;
    } else {
        document.getElementById("resultado").innerHTML = "Número de parcelas inválido.";
        return;
    }

    const resultado = `Valor de cada parcela: R$ ${valorParcela.toFixed(2)}<br>Preço total da compra: R$ ${precoTotal.toFixed(2)}`;
    document.getElementById("resultado").innerHTML = resultado;
}