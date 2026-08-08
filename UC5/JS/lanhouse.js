const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);
    const blocos = Math.ceil(tempo / 15);
    const total = valor * blocos;

    resp.innerText = `Valor a pagar: R$ ${total.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
