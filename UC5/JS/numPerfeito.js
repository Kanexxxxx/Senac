const frm = document.querySelector("form");
const resp2 = document.querySelector("#outSoma");
const resp1 = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value); //como um e divisor univesal ,ja iniciamos  com ele

    let divisores = `divisores do ${ numero } :1 `;
    let soma =1 ;
    for(let i = 2; i <= numero / 2; i++) {
        if(numero % i == 0 ) {

            divisores = divisores + "," +i; //virgula + i (evita a ultima virgula)
            soma = soma +i;
        }


    }
    divisores = divisores + "(soma:" +soma +  ")";
    resp1.innerText = divisores;

    if (numero == soma ) {
        resp2.innerText = `${numero} e um numero perfeito`;
        
    
    } else 
        resp2.innerText = `${numero} nao e  um numero perfeito`;
})