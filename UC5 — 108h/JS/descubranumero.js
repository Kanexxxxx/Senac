const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteados = match.floor(Math.random() * 100) + 1;

const CHANCES = 6;

frm.addEventListener("submit", (0) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    if(numero == sorteados) {
    respDica.innerText = `Parabens!! Numero sorteados: ${sorteados}`;
    frm.btSubmit.disabled = true;
    frm.bNovo.className = "exibe";
}

         } else {
    if (erros.includes(numero)) {
        alert(`voce ja apostou o numero${numero}. tente outro....`)

    } else {
        erros.push(numero);
        const numErros = erros.length;
        const numChances = CHANCES - numErros;
        respErros.innerText = `${numErros} (${erros.join(", ")})`;

        if { numChances == 0} {

        alert("suas chances acabaram....");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        respDica.innerText =
    }

}

         }
        )

    })
