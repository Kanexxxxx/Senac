const frm = document.querySelector("form");
const outModelo = document.querySelector("#outModelo");
const outEntrada = document.querySelector("#outEntrada");
const outParcelas = document.querySelector("#outParcelas");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    const entrada = preco * 0.5;
    const parcela = entrada / 12;

    outModelo.innerText = `Promocao: ${modelo}`;
    outEntrada.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
    outParcelas.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    outModelo.innerText = "";
    outEntrada.innerText = "";
    outParcelas.innerText = "";
});
