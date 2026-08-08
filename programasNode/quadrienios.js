const prompt = require("prompt-sync")();

const salario = Number(prompt("Salario R$: "));
const tempo = Number(prompt("Tempo de empresa em anos: "));
const quadrienios = Math.floor(tempo / 4);
const salarioFinal = salario + (salario * quadrienios * 0.01);

console.log(`Quadrienios: ${quadrienios}`);
console.log(`Salario final: R$ ${salarioFinal.toFixed(2)}`);
