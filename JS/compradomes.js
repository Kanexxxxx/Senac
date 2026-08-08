const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

let numContas = 0;
let valTotal = 0;
let resposta = "";

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    numContas++;
    valTotal = valTotal +valor;
    resposta = resposta + descricao +" - R$" + valor.toFixed(2) +"\n";
    resp1.innerText = `${resposta}-----------------------------------`;
    resp2.innerText = `${numContas} Conta(s) - totalR${valTotal.toFixed(2)}`;
    frm.inDescricao.value ="";
    frm.invalor.value = "";
    frm.inDescricao.focus();
  
});
