const frm = document.querySelector("form");
const outLista = document.querySelector("#outLista");
const outTotal = document.querySelector("#outTotal");

let numContas = 0;
let valTotal = 0;
let lista = "";

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    // Contador: soma 1 conta a cada envio do formulario.
    numContas++;

    // Acumulador: soma o valor das contas.
    valTotal = valTotal + valor;

    lista = lista + descricao + " - R$ " + valor.toFixed(2) + "\n";

    outLista.innerText = lista;
    outTotal.innerText = numContas + " conta(s) - Total R$ " + valTotal.toFixed(2);

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();
});

frm.addEventListener("reset", () => {
    numContas = 0;
    valTotal = 0;
    lista = "";

    outLista.innerText = "";
    outTotal.innerText = "";
});
