document.getElementById('calcularBtn').addEventListener('click', function() {
    var valorDesejado = parseInt(document.getElementById('valor').value);

    var notas = [50, 10, 5, 1];
    var quantidadeNotas = [];

    for (var i = 0; i < notas.length; i++) {
        quantidadeNotas[i] = Math.floor(valorDesejado / notas[i]);
        valorDesejado %= notas[i];
    }

    var resultadoHtml = '';
    for (var j = 0; j < notas.length; j++) {
        if (quantidadeNotas[j] > 0) {
            resultadoHtml += 'GC$ ' + notas[j] + ',00 -> ' + quantidadeNotas[j] + '<br>';
        }
    }

    document.getElementById('resultado').innerHTML = resultadoHtml;
});