const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);

    if (Number.isInteger(raiz)) {
        resp.innerText = `Raiz quadrada: ${raiz}`;
    } else {
        resp.innerText = `Nao ha raiz exata para ${numero}.`;
    }
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
