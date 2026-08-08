const frm = document.querySelector("form");
const outProduto = document.querySelector("#outProduto");
const outPromocao = document.querySelector("#outPromocao");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    const total = (preco * 2) + (preco * 0.5);

    outProduto.innerText = `${produto} - Promocao: leve 3`;
    outPromocao.innerText = `O 3o produto custa R$ ${(preco * 0.5).toFixed(2)}. Total: R$ ${total.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    outProduto.innerText = "";
    outPromocao.innerText = "";
});
