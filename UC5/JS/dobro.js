const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const dobro = numero * 2;

    resp.innerText = `Dobro: ${dobro}`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
