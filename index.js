function calcularSaldo(vitorias, derrotas) {
    let resultadoDoSaldo = vitorias - derrotas;
    let nivelDoJogador = "";

    if(resultadoDoSaldo < 10) {
        nivelDoJogador = "Ferro";
    } else if (resultadoDoSaldo >= 10 || resultadoDoSaldo <= 20) {
        nivelDoJogador = "Bronze";
    } else if (resultadoDoSaldo >= 21 || resultadoDoSaldo <= 50) {
        nivelDoJogador = "Prata";
    } else if (resultadoDoSaldo >= 51 || resultadoDoSaldo <= 80) {
        nivelDoJogador = "Ouro";
    } else if (resultadoDoSaldo >= 81 || resultadoDoSaldo <= 90) {
        nivelDoJogador = "Diamante";
    } else if (resultadoDoSaldo >= 91 || resultadoDoSaldo <= 100) {
        nivelDoJogador = "Lendário";
    } else {
        nivelDoJogador = "Imortal";
    }

    alert(`O herói tem um saldo de ${resultadoDoSaldo} e está no nível de ${nivelDoJogador}.`)
}

calcularSaldo(56, 32)