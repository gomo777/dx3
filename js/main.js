function verificaBola() {

    // Solicita os Dados X e Y aos usuários:
    const X = document.getElementById("X").value;
    const Y = document.getElementById("Y").value;

    const respostaEx1 = document.querySelector(".respostaEx1");

    // Verifica se a bola bateu na linha divisória:
    if (X <= 432 && X >= 0 && Y <= 468 && Y >= 0) {
        respostaEx1.innerHTML = "dentro";
    }
    else {
        respostaEx1.innerHTML = "fora";
    }

}

function Tumbolia() {

    const respostaEx2 = document.querySelector(".respostaEx2");

    // Recebimento dos Dados:
    const jg1 = parseInt(document.querySelector('#jg1').value);
    const jg2 = parseInt(document.querySelector('#jg2').value);
    const jg3 = parseInt(document.querySelector('#jg3').value);

    // Análise e Exibição dos Resultados:
    if (jg1 <= jg2 && jg1 >= jg3 || jg1 <= jg3 && jg1 >= jg2) {
        respostaEx2.innerHTML = "O jogador com a pontuação " + jg1 + " foi o Vice-Campeão!";
    }

    else if (jg2 <= jg1 && jg2 >= jg3 || jg2 <= jg3 && jg2 >= jg1) {
        respostaEx2.innerHTML = "O jogador com a pontuação " + jg2 + " foi o Vice-Campeão!";

    }
    else if (jg3 <= jg2 && jg3 >= jg1 || jg3 <= jg1 && jg3 >= jg2) {
        respostaEx2.innerHTML = "O jogador com a pontuação " + jg3 + " foi o Vice-Campeão!";
    }
}


function Zerinho() {

    //Receber os números dos Jogadores:
    const Alice = document.getElementById("Alice").value;
    const Beto = document.getElementById("Beto").value;
    const Clara = document.getElementById("Clara").value;

    const respostaEx3 = document.querySelector(".respostaEx3");

    // Comparações:
    if (Alice != Beto && Alice != Clara) {
        respostaEx3.innerHTML = "A -Alice é a vencedora!";
    }
    else if (Beto != Alice && Beto != Clara) {
        respostaEx3.innerHTML = "B - Beto é o vencedor!";
    }
    else if (Clara != Alice && Clara != Beto) {
        respostaEx3.innerHTML = "C - Clara é a vencedora!";
    } else {
        respostaEx3.innerHTML = "********** Não teve vencedor! **********";
    }
}