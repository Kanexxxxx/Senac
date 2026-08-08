const prompt = require("prompt-sync")();

const pesoKg = Number(prompt("Peso da racao em kg: "));
const consumoDia = Number(prompt("Consumo diario do gato em gramas: "));
const racaoGramas = pesoKg * 1000;
const dias = Math.floor(racaoGramas / consumoDia);
const sobra = racaoGramas % consumoDia;

console.log(`Duracao: ${dias} dia(s)`);
console.log(`Sobra: ${sobra} grama(s)`);
