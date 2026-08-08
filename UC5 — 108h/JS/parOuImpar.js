const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const resposta = numero % 2 === 0 ? "Par" : "Impar";

    resp.innerText = `${numero} e ${resposta}.`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
