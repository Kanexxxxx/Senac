const frm = document.querySelector("form");
const resp = document.querySelector("#pre");

const carros = [];

function exibirCarros(lista, titulo) {
    if (lista.length === 0) {
        resp.innerText = "Nenhum carro encontrado.";
        return;
    }

    const itens = lista
        .map((carro) => `${carro.modelo} - R$ ${carro.preco.toFixed(2)}`)
        .join("\n");

    resp.innerText = `${titulo}\n${"-".repeat(40)}\n${itens}`;
}

frm.addEventListener("submit", (event) => {
    event.preventDefault();

    const modelo = frm.inModelo.value.trim();
    const preco = Number(frm.inPreco.value);

    carros.push({ modelo, preco });
    frm.reset();
    frm.inModelo.focus();

    exibirCarros(carros, "Carros cadastrados:");
});

frm.btnListar.addEventListener("click", () => {
    exibirCarros(carros, "Carros cadastrados:");
});

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    if (!Number.isFinite(maximo) || maximo <= 0) {
        return;
    }

    const carrosFiltrados = carros.filter((carro) => carro.preco <= maximo);
    exibirCarros(carrosFiltrados, `Carros até R$ ${maximo.toFixed(2)}:`);
});

frm.btnSimular.addEventListener("click", () => {
    if (carros.length === 0) {
        resp.innerText = "Cadastre ao menos um carro antes de simular a promoção.";
        return;
    }

    const percentual = Number(prompt("Qual percentual de desconto deseja aplicar?"));

    if (!Number.isFinite(percentual) || percentual <= 0 || percentual > 100) {
        return;
    }

    const carrosPromocionais = carros.map((carro) => ({
        ...carro,
        preco: carro.preco * (1 - percentual / 100)
    }));

    exibirCarros(carrosPromocionais, `Promoção de ${percentual}% de desconto:`);
});
