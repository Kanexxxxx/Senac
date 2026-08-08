const frm = document.querySelector("form");
const outMedicamento = document.querySelector("#outMedicamento");
const outPromocao = document.querySelector("#outPromocao");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);
    const total = preco * 2;
    const promocao = Math.floor(total);

    outMedicamento.innerText = `Promocao de ${medicamento}`;
    outPromocao.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    outMedicamento.innerText = "";
    outPromocao.innerText = "";
});
