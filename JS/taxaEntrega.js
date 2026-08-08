const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const bairro = frm.inBairro.value;
    let taxaEntrega;

    switch (bairro) {
        case "centro":
            taxaEntrega = 5;
            break;
        case "campos eliseos":
        case "jardim paulista":
            taxaEntrega = 7;
            break;
        case "sumarezinho":
            taxaEntrega = 10;
            break;
        default:
            taxaEntrega = 15;
    }

    resp.innerText = `Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
