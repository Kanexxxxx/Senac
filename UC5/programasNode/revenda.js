const prompt = require("prompt-sync")();

const modelo = prompt("Modelo do veiculo: ");
const preco = Number(prompt("Preco R$: "));
const entrada = preco * 0.5;
const parcela = entrada / 12;

console.log(`Promocao: ${modelo}`);
console.log(`Entrada de R$ ${entrada.toFixed(2)}`);
console.log(`+ 12x de R$ ${parcela.toFixed(2)}`);
