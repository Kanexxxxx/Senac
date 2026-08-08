const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let simbolos = "";

    // O resto da divisao mostra se a posicao e impar ou par.
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            simbolos = simbolos + "*";
        } else {
            simbolos = simbolos + "_";
        }
    }

    resp.innerText = simbolos;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
