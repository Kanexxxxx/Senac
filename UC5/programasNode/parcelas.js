/* =====================================================================
   Le o valor de uma conta e o numero de parcelas.
   Regra da loja: as parcelas iniciais ficam SEM centavos (numero
   redondo, para facilitar o troco) e os centavos sobram todos
   para a ULTIMA parcela.
   ===================================================================== */

const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da conta R$: "));
const vezes = Number(prompt("Numero de parcelas: "));

// Math.floor arredonda para BAIXO, entao corta os centavos.
const parcelaInicial = Math.floor(valor / vezes);

// A ultima parcela recebe o que sobrou: total - as parcelas ja fixadas.
const ultimaParcela = valor - parcelaInicial * (vezes - 1);

console.log("--------------------------------");

for (let i = 1; i <= vezes; i++) {

    // Se ainda nao chegou na ultima, usa a parcela redonda.
    if (i < vezes) {
        console.log(`Parcela ${i}: R$ ${parcelaInicial.toFixed(2)}`);
    } else {
        console.log(`Parcela ${i}: R$ ${ultimaParcela.toFixed(2)}`);
    }
}

console.log("--------------------------------");
console.log(`Total: R$ ${valor.toFixed(2)}`);
