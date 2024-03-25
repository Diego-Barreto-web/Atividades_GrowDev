// Q001
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao-01").addEventListener("click", function() {
        let resolucoes = [];

        let formularioHTML = "<div id='formulario'>";
        for (let i = 1; i <= 5; i++) {
            formularioHTML += "<label for='resolucao" + i + "'>Resolução " + i + ":</label>";
            formularioHTML += "<input type='text' id='resolucao" + i + "' name='resolucao" + i + "'><br><br>";
        }
        formularioHTML += "<button type='button' id='botao-processar'>Processar</button>";
        formularioHTML += "</div>";

        document.getElementById("resultado").innerHTML = formularioHTML;

        document.getElementById("botao-processar").addEventListener("click", function() {
            for (let i = 1; i <= 5; i++) {
                let resolucao = document.getElementById("resolucao" + i).value;
                resolucoes.push(resolucao);
            }
            let primeiraResolucao = resolucoes[0];
            document.getElementById("resultado").innerHTML = "a) " + primeiraResolucao + "<br>";
            let ultimaResolucao = resolucoes[resolucoes.length - 1];
            document.getElementById("resultado").innerHTML += "b) " + ultimaResolucao + "<br>";
            let ultimoElemento = resolucoes[resolucoes.length - 1];
            document.getElementById("resultado").innerHTML += "c) " + ultimoElemento + "<br>";
        });
    });
});

// Q002