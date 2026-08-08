const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let tabuada = "";

    // O for repete de 1 ate 10 para montar a tabuada.
    for (let i = 1; i <= 10; i++) {
        tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`;
    }

    resp.innerText = tabuada;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
