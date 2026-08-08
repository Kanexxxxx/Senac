const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    resp.innerText = `Ola, ${nome}!`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
