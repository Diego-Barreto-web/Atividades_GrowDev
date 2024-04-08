    // Event listeners para cada botão
document.getElementById('botao_01').addEventListener('click', function() {
    calcularMedia([7, 8, 9], 'A');
});

document.getElementById('botao_02').addEventListener('click', function() {
    verificarImpar(5);
});

document.getElementById('botao_03').addEventListener('click', function() {
    verificarPrimo(17);
});

document.getElementById('botao_04').addEventListener('click', function() {
    converterTempo(3672);
});

document.getElementById('botao_05').addEventListener('click', function() {
    verificarPerfeito(6);
});

document.getElementById('botao_06').addEventListener('click', function() {
    acessoAoSite();
});

document.getElementById('botao_07').addEventListener('click', function() {
    mostrarMensagem();
});

document.getElementById('botao_08').addEventListener('click', function() {
    mostrarDobro(5);
});

document.getElementById('botao_09').addEventListener('click', function() {
    calcularMediaNome(60, 70, 80, 'João');
});

function calcularMedia(notas, tipo) {
    if (tipo === 'A') {
        const media = notas.reduce((acc, val) => acc + val, 0) / notas.length;
        alert(`Média Aritmética: ${media}`);
    } else if (tipo === 'P') {
        const pesos = [5, 3, 2];
        const somaPonderada = notas.reduce((acc, val, index) => acc + val * pesos[index], 0);
        const somaPesos = pesos.reduce((acc, val) => acc + val, 0);
        const media = somaPonderada / somaPesos;
        alert(`Média Ponderada: ${media}`);
    } else {
        alert('Tipo inválido');
    }
}

function verificarImpar(numero) {
    const resultado = numero % 2 !== 0;
    alert(`O número ${numero} é ímpar? ${resultado}`);
}

function verificarPrimo(numero) {
    if (numero <= 1) {
        alert(`O número ${numero} não é primo.`);
        return;
    }
    let primo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    alert(`O número ${numero} é primo? ${primo}`);
}

function converterTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    alert(`Tempo: ${horas}h ${minutos}m ${segundosRestantes}s`);
}

function verificarPerfeito(numero) {
    let somaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }
    const perfeito = somaDivisores === numero;
    alert(`O número ${numero} é perfeito? ${perfeito}`);
}

function acessoAoSite() {
    alert("Bem-vindo ao site");
}

function mostrarMensagem() {
    const nome = "Atividade JS - 10";
    console.log(`Acesso à aplicação ${nome}`);
    alert(`Bem vindo à aplicação ${nome}`);
}

function mostrarDobro(num) {
    const dobro = num * 2;
    alert(`O dobro do número ${num} é ${dobro}.`);
}

function calcularMediaNome(nota1, nota2, nota3, nome) {
    const media = (nota1 + nota2 + nota3) / 3;
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
    alert(`${nome}, sua média é ${media}.`);
}