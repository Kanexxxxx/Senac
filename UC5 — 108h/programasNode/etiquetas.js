const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const num = Number(prompt("Numero de etiquetas: "));
let linha = "";

// Mostra no maximo 2 etiquetas por linha.
for (let i = 1; i <= num; i++) {
    linha = linha + produto + "\t\t";

    if (i % 2 == 0) {
        console.log(linha);
        linha = "";
    }
}

// Se sobrar 1 etiqueta, mostra a ultima linha.
if (linha != "") {
    console.log(linha);
}
