const frm = document.querySelector("form");
const outNotas100 = document.querySelector("#outNotas100");
const outNotas50 = document.querySelector("#outNotas50");
const outNotas10 = document.querySelector("#outNotas10");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const saque = Number(frm.inSaque.value);

    if (saque < 10 || saque % 10 !== 0) {
        outNotas100.innerText = "Valor invalido para as notas disponiveis.";
        outNotas50.innerText = "";
        outNotas10.innerText = "";
        return;
    }

    const notas100 = Math.floor(saque / 100);
    let restante = saque % 100;
    const notas50 = Math.floor(restante / 50);
    restante %= 50;
    const notas10 = Math.floor(restante / 10);

    outNotas100.innerText = notas100 > 0 ? `Notas de R$ 100: ${notas100}` : "";
    outNotas50.innerText = notas50 > 0 ? `Notas de R$ 50: ${notas50}` : "";
    outNotas10.innerText = notas10 > 0 ? `Notas de R$ 10: ${notas10}` : "";
});

frm.addEventListener("reset", () => {
    outNotas100.innerText = "";
    outNotas50.innerText = "";
    outNotas10.innerText = "";
});
