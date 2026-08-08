const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let contagem = "";

    // Comeca no numero digitado e diminui ate chegar em 1.
    for (let i = numero; i >= 1; i--) {
        contagem = contagem + i + " ";
    }

    resp.innerText = contagem;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
