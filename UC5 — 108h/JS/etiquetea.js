const prompt = require(`prompt-sync`)();
const produto = prompt("Produto:");
const num = Number(prompt("Nº de "))
for(let i = 1; i <= num; i++) {

    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)} `);

}
if
    (num % 2 == 1) {
    console.log(produto);
}
