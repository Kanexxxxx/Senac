const prompt = require("prompt-sync")();

console.log("Programa Anos da Copa do Mundo");
console.log("Digite 0 para sair");
console.log("--------------------------------");

do {
    const ano = Number(prompt("Ano: "));

    if (ano == 0) {
        break;
    }

    // 1942 e 1946 nao tiveram Copa por causa da guerra.
    if (ano == 1942 || ano == 1946) {
        console.log("Nao houve Copa em " + ano + ".");
    } else if (ano >= 1930 && (ano - 1930) % 4 == 0) {
        console.log(ano + " e ano de Copa do Mundo.");
    } else {
        console.log(ano + " nao e ano de Copa do Mundo.");
    }
} while (true);
