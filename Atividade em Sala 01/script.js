document.getElementById("botao-01").addEventListener("click", function() {
    const anoNovoAstrologico = new Date('2024-03-20T00:07:00');
    let dataAtual = new Date();
    let diferencaMs = anoNovoAstrologico - dataAtual;
    let diasRestantes = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
    let dia = 'dia'
    dia>1 ? dia = 'dias' : 'dia'
    let mensagem = `Faltam ${diasRestantes} ${dia} para o ano novo astrológico. Prepare suas simpatias!`;
    document.getElementById("mensagem").textContent = mensagem;
});