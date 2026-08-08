const frm = document.querySelector("form");
const outSimNao = document.querySelector("#outSimNao");
const outTipo = document.querySelector("#outTipo");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    const formaTriangulo =
        ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB;

    if (!formaTriangulo) {
        outSimNao.innerText = "Os lados nao podem formar um triangulo.";
        outTipo.innerText = "";
        return;
    }

    outSimNao.innerText = "Os lados podem formar um triangulo.";

    if (ladoA === ladoB && ladoB === ladoC) {
        outTipo.innerText = "Tipo: Equilatero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        outTipo.innerText = "Tipo: Isosceles";
    } else {
        outTipo.innerText = "Tipo: Escaleno";
    }
});

frm.addEventListener("reset", () => {
    outSimNao.innerText = "";
    outTipo.innerText = "";
});
