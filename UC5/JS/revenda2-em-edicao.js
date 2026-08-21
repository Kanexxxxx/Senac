const frm = document.querySelector("form");
const resp = document.querySelector("#pre");

const carros =[]; // declarei array global

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({modelo, preco}); // adicionando objeto no array
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    frm.inModelo.focus();
    frm.btListar.dispatchEvent(new Event("click")); // dispara o evento click do botão listar
    

}