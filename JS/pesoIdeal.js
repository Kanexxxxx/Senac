const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const altura = Number(frm.inAltura.value);
    const masculino = frm.inMasculino.checked;
    const fator = masculino ? 22 : 21;
    const peso = fator * (altura ** 2);

    resp.innerText = `${nome}, seu peso ideal e ${peso.toFixed(3)} kg.`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
