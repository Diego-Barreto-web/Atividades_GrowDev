// Q001
document.getElementById("botao_01").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_01"><form id="form_idade">' +
                        '<label for="idade">Digite sua idade:</label>' +
                        '<input type="number" id="idade" name="idade" required>' +
                        '<button type="submit">Enviar</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_idade").addEventListener("submit", function(event){
        event.preventDefault();

        let idade = parseInt(document.getElementById("idade").value);

        if(isNaN(idade)){
            alert("Por favor, insira uma idade válida.");
            return;
        }

        document.getElementById("resultado").innerHTML = "Minha idade é " + idade + " anos.";
    });
});



// Q002
document.getElementById("botao_02").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_02"><form id="form_valores">' +
                        '<label for="valor1">Digite o primeiro valor: </label>' +
                        '<input type="number" id="valor1" name="valor1" required>' +
                        '<br>' +
                        '<label for="valor2">Digite o segundo valor: </label>' +
                        '<input type="number" id="valor2" name="valor2" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_valores").addEventListener("submit", function(event){
        event.preventDefault();

        let valor1 = parseInt(document.getElementById("valor1").value);
        let valor2 = parseInt(document.getElementById("valor2").value);

        if(isNaN(valor1) || isNaN(valor2)){
            alert("Por favor, insira valores válidos.");
            return;
        }

        let soma = valor1 + valor2;
        document.getElementById("resultado").innerHTML = "A resultado da soma de " + valor1 + " e " + valor2 + " é " + soma + ".";
    });
});



// Q003
document.getElementById("botao_03").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_03"><form id="form_compra">' +
                        '<label for="totalCompra">Valor total da compra:</label>' +
                        '<input type="number" id="totalCompra" name="totalCompra" step="0.01" required>' +
                        '<br>' +
                        '<label for="quantidadeParcelas">Quantidade de parcelas:</label>' +
                        '<input type="number" id="quantidadeParcelas" name="quantidadeParcelas" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_compra").addEventListener("submit", function(event){
        event.preventDefault();

        let totalCompra = parseFloat(document.getElementById("totalCompra").value);
        let quantidadeParcelas = parseInt(document.getElementById("quantidadeParcelas").value);

        if(isNaN(totalCompra) || isNaN(quantidadeParcelas)){
            alert("Por favor, insira valores válidos.");
            return;
        }

        let valorParcela = totalCompra / quantidadeParcelas;
        document.getElementById("resultado").innerHTML = "O valor total da compra foi R$" + totalCompra.toFixed(2) +
                                                          "<br>Forma de pagamento: " + quantidadeParcelas + "x de R$" + valorParcela.toFixed(2) + ".";
    });
});



// Q004
document.getElementById("botao_04").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_04"><form id="form_minutos">' +
                        '<label for="minutos">Digite o total de minutos:</label>' +
                        '<input type="number" id="minutos" name="minutos" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_minutos").addEventListener("submit", function(event){
        event.preventDefault();

        let minutos = parseInt(document.getElementById("minutos").value);

        if(isNaN(minutos)){
            alert("Por favor, insira um valor válido.");
            return;
        }

        let segundos = minutos * 60;
        document.getElementById("resultado").innerHTML = minutos + " minutos equivale a " + segundos + " segundos!";
    });
});



// Q005
document.getElementById("botao_05").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_05"><form id="form_notas">' +
                        '<label for="nomeAluno">Nome do aluno:</label>' +
                        '<input type="text" id="nomeAluno" name="nomeAluno" required>' +
                        '<br>' +
                        '<label for="nota1">Nota 1:</label>' +
                        '<input type="number" id="nota1" name="nota1" min="0" max="10" required>' +
                        '<br>' +
                        '<label for="nota2">Nota 2:</label>' +
                        '<input type="number" id="nota2" name="nota2" min="0" max="10" required>' +
                        '<br>' +
                        '<label for="nota3">Nota 3:</label>' +
                        '<input type="number" id="nota3" name="nota3" min="0" max="10" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_notas").addEventListener("submit", function(event){
        event.preventDefault();

        let nomeAluno = document.getElementById("nomeAluno").value;
        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let nota3 = parseFloat(document.getElementById("nota3").value);

        if(nomeAluno.trim() === ""){
            alert("Por favor, insira o nome do aluno.");
            return;
        }

        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
            alert("Por favor, insira valores numéricos para as notas.");
            return;
        }

        let media = (nota1 + nota2 + nota3) / 3;
        document.getElementById("resultado").innerHTML = "O aluno " + nomeAluno + " ficou com média " + media.toFixed(2) + "!";
    });
});



// Q006
document.getElementById("botao_06").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_06"><form id="form_troca">' +
                        '<label for="valorA">Valor de A:</label>' +
                        '<input type="number" id="valorA" name="valorA" required>' +
                        '<br>' +
                        '<label for="valorB">Valor de B:</label>' +
                        '<input type="number" id="valorB" name="valorB" required>' +
                        '<br>' +
                        '<button type="submit">Trocar</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_troca").addEventListener("submit", function(event){
        event.preventDefault();

        let A = parseInt(document.getElementById("valorA").value);
        let B = parseInt(document.getElementById("valorB").value);

        if(isNaN(A) || isNaN(B)){
            alert("Por favor, insira valores válidos para A e B.");
            return;
        }

        let temp = A;
        A = B;
        B = temp;

        document.getElementById("resultado").innerHTML = "A = " + A + ", B = " + B;
    });
});



// Q007
document.getElementById("botao_07").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_07"><form id="form_eleitores">' +
                        '<label for="totalEleitores">Total de eleitores:</label>' +
                        '<input type="number" id="totalEleitores" name="totalEleitores" required>' +
                        '<br>' +
                        '<label for="votosBrancos">Votos brancos:</label>' +
                        '<input type="number" id="votosBrancos" name="votosBrancos" required>' +
                        '<br>' +
                        '<label for="votosNulos">Votos nulos:</label>' +
                        '<input type="number" id="votosNulos" name="votosNulos" required>' +
                        '<br>' +
                        '<label for="votosValidos">Votos válidos:</label>' +
                        '<input type="number" id="votosValidos" name="votosValidos" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_eleitores").addEventListener("submit", function(event){
        event.preventDefault();

        let totalEleitores = parseInt(document.getElementById("totalEleitores").value);
        let votosBrancos = parseInt(document.getElementById("votosBrancos").value);
        let votosNulos = parseInt(document.getElementById("votosNulos").value);
        let votosValidos = parseInt(document.getElementById("votosValidos").value);

        if(isNaN(totalEleitores) || isNaN(votosBrancos) || isNaN(votosNulos) || isNaN(votosValidos)){
            alert("Por favor, insira valores válidos para total de eleitores, votos brancos, votos nulos e votos válidos.");
            return;
        }

        let percentualBrancos = (votosBrancos / totalEleitores) * 100;
        let percentualNulos = (votosNulos / totalEleitores) * 100;
        let percentualValidos = (votosValidos / totalEleitores) * 100;

        document.getElementById("resultado").innerHTML = "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%<br>" +
                                                            "Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%<br>" +
                                                            "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%";
    });
});



// Q008
document.getElementById("botao_08").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_08"><form id="form_numeros">' +
                        '<label for="numero1">Digite o primeiro número:</label>' +
                        '<input type="number" id="numero1" name="numero1" required>' +
                        '<br>' +
                        '<label for="numero2">Digite o segundo número:</label>' +
                        '<input type="number" id="numero2" name="numero2" required>' +
                        '<br>' +
                        '<button type="submit">Verificar</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_numeros").addEventListener("submit", function(event){
        event.preventDefault();

        let numero1 = parseFloat(document.getElementById("numero1").value);
        let numero2 = parseFloat(document.getElementById("numero2").value);

        if(isNaN(numero1) || isNaN(numero2)){
            alert("Por favor, insira valores válidos para os números.");
            return;
        }

        if(numero1 === numero2){
            document.getElementById("resultado").innerHTML = "Números iguais";
        } else if(numero1 > numero2){
            document.getElementById("resultado").innerHTML = "Primeiro é maior";
        } else {
            document.getElementById("resultado").innerHTML = "Segundo é maior";
        }
    });
});



// Q009
document.getElementById("botao_09").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_09"><form id="form_item">' +
                        '<label for="nomeItem">Nome do item:</label>' +
                        '<input type="text" id="nomeItem" name="nomeItem" required>' +
                        '<br>' +
                        '<label for="valorItem">Valor do item (por unidade):</label>' +
                        '<input type="number" id="valorItem" name="valorItem" step="0.01" required>' +
                        '<br>' +
                        '<label for="quantidade">Quantidade:</label>' +
                        '<input type="number" id="quantidade" name="quantidade" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_item").addEventListener("submit", function(event){
        event.preventDefault();

        let nomeItem = document.getElementById("nomeItem").value;
        let valorItem = parseFloat(document.getElementById("valorItem").value);
        let quantidade = parseInt(document.getElementById("quantidade").value);

        if(nomeItem.trim() === "" || isNaN(valorItem) || isNaN(quantidade)){
            alert("Por favor, insira valores válidos para o nome do item, valor do item e quantidade de maçãs.");
            return;
        }

        if (valorItem <= 0 || quantidade <= 0) {
            alert("Por favor, insira valores positivos para o valor do item e a quantidade de maçãs.");
            return;
        }

        let valorTotalCompra;
        if(quantidade < 12){
            valorTotalCompra = quantidade * valorItem;
        } else {
            valorTotalCompra = quantidade * (valorItem - (valorItem * 0.1666));
        }

        document.getElementById("resultado").innerHTML = "Foram comprados " + quantidade + " unidades de " + nomeItem + ".<br>" +
                                                          "Valor total da compra: R$ " + valorTotalCompra.toFixed(2);
    });
});



// Q010
document.getElementById("botao_10").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_10"><form id="form_usuario">' +
                        '<label for="nomeUsuario">Nome do usuário:</label>' +
                        '<input type="text" id="nomeUsuario" name="nomeUsuario" required>' +
                        '<br>' +
                        '<label for="idadeUsuario">Idade do usuário:</label>' +
                        '<input type="number" id="idadeUsuario" name="idadeUsuario" required>' +
                        '<br>' +
                        '<label for="diaNascimento">Dia de nascimento:</label>' +
                        '<input type="number" id="diaNascimento" name="diaNascimento" min="1" max="31" required>' +
                        '<br>' +
                        '<label for="mesNascimento">Mês de nascimento:</label>' +
                        '<input type="number" id="mesNascimento" name="mesNascimento" min="1" max="12" required>' +
                        '<br>' +
                        '<button type="submit">Calcular</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_usuario").addEventListener("submit", function(event){
        event.preventDefault(); // Impede o envio padrão do formulário

        let nomeUsuario = document.getElementById("nomeUsuario").value;
        let idadeUsuario = parseInt(document.getElementById("idadeUsuario").value);
        let diaNascimento = parseInt(document.getElementById("diaNascimento").value);
        let mesNascimento = parseInt(document.getElementById("mesNascimento").value);

        if(nomeUsuario.trim() === "" || isNaN(idadeUsuario) || isNaN(diaNascimento) || isNaN(mesNascimento)){
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();
        let anoNascimento;

        if (mesNascimento > (dataAtual.getMonth() + 1) || (mesNascimento === (dataAtual.getMonth() + 1) && diaNascimento > dataAtual.getDate())) {
            anoNascimento = anoAtual - idadeUsuario - 1;
        } else {
            anoNascimento = anoAtual - idadeUsuario;
        }

        let mensagem = nomeUsuario + ", tem " + idadeUsuario + " anos e nasceu dia " + diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

        document.getElementById("resultado").innerHTML = mensagem;
    });
});



// Q011
document.getElementById("botao_11").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_11"><form id="form_numero">' +
                        '<label for="numero">Digite um número inteiro positivo:</label>' +
                        '<input type="number" id="numero" name="numero" min="1" required>' +
                        '<br>' +
                        '<button type="submit">Verificar</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_numero").addEventListener("submit", function(event){
        event.preventDefault();

        let numero = parseInt(document.getElementById("numero").value);

        if(isNaN(numero) || numero < 1 || !Number.isInteger(numero)){
            alert("Por favor, insira um número inteiro positivo válido.");
            return;
        }

        if(numero % 2 === 0){
            document.getElementById("resultado").innerHTML = "Número é par!";
        } else {
            document.getElementById("resultado").innerHTML = "Número é ímpar!";
        }
    });
});



// Q012
document.getElementById("botao_12").addEventListener("click", function(){
    let formularioHTML = '<div id="formulario_12"><form id="form_idade">' +
                        '<label for="anoNascimento">Ano de nascimento:</label>' +
                        '<input type="number" id="anoNascimento" name="anoNascimento" min="1900" max="2022" required>' +
                        '<br>' +
                        '<button type="submit">Verificar</button>' +
                        '</form></div>';

    document.getElementById("resultado").innerHTML = formularioHTML;

    document.getElementById("form_idade").addEventListener("submit", function(event){
        event.preventDefault();

        let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();

        if(isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > anoAtual){
            alert("Por favor, insira um ano de nascimento válido.");
            return;
        }

        let idade = anoAtual - anoNascimento;

        let mensagem;
        if(idade >= 16){
            mensagem = "Você pode votar este ano!";
        } else {
            mensagem = "Você não pode votar este ano.";
        }

        document.getElementById("resultado").innerHTML = mensagem;
    });
});