const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const precoKg = Number(frm.inPrecoKg.value);
    const consumo = Number(frm.inConsumo.value);
    const valor = (precoKg / 1000) * consumo;

    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
