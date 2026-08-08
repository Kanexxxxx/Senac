const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da conta R$: "));
const vezes = Number(prompt("Numero de parcelas: "));

// As parcelas iniciais ficam sem centavos.
const parcelaInicial = Math.floor(valor / vezes);
const ultimaParcela = valor - parcelaInicial * (vezes - 1);

for (let i = 1; i 
