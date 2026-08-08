const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(frm.inVelPermitida.value);
    const velCondutor = Number(frm.inVelCondutor.value);
    const limiteLeve = velPermitida * 1.2;

    if (velCondutor <= velPermitida) {
        resp.innerText = "Sem Multa";
    } else if (velCondutor <= limiteLeve) {
        resp.innerText = "Multa Leve";
    } else {
        resp.innerText = "Multa Grave";
    }
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
