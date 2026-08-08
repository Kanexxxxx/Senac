const frm = document.querySelector("form");
const outTempo = document.querySelector("#outTempo");
const outTroco = document.querySelector("#outTroco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);
    let tempo;
    let troco;

    if (valor < 1) {
        outTempo.innerText = "Valor insuficiente";
        outTroco.innerText = "";
        return;
    }

    if (valor < 1.75) {
        tempo = 30;
        troco = valor - 1;
    } else if (valor < 3) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 120;
        troco = valor - 3;
    }

    outTempo.innerText = `Tempo de permanencia: ${tempo} min`;
    outTroco.innerText = troco > 0 ? `Troco: R$ ${troco.toFixed(2)}` : "Sem troco";
});

frm.addEventListener("reset", () => {
    outTempo.innerText = "";
    outTroco.innerText = "";
});
