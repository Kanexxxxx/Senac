const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inicial = Number(frm.inInicial.value);
    const anos = Number (frm.inAnos.value);

    let resposta = "";
let total = inicial;
for (let i = 1; i <= anos; i++) {
    resposta = resposta + i +"º ano:" + total + "chinchilas\n";
    total *= 3;
}
})
