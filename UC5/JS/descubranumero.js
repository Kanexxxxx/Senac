const frm = document.querySelector("form");
const outErros = document.querySelector("#outErros");
const outChances = document.querySelector("#outChances");
const outDica = document.querySelector("#outDica");

const CHANCES = 6;

let erros = [];
let sorteado = Math.floor(Math.random() * 100) + 1;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    // Acertou: fim de jogo.
    if (numero == sorteado) {
        outDica.innerText = `Parabens! O numero sorteado era ${sorteado}.`;
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        return;
    }

    // includes() devolve true se o numero ja esta no array de erros.
    if (erros.includes(numero)) {
        alert(`Voce ja apostou o numero ${numero}. Tente outro.`);
        return;
    }

    erros.push(numero);

    const numErros = erros.length;
    const numChances = CHANCES - numErros;

    outErros.innerText = `${numErros} (${erros.join(", ")})`;
    outChances.innerText = numChances;

    // Acabaram as chances.
    if (numChances == 0) {
        outDica.innerText = `Suas chances acabaram. O numero era ${sorteado}.`;
        frm.btSubmit.disabled = true;
        frm.btNovo.className = "exibe";
        return;
    }

    // Ainda tem chance: mostra a dica.
    if (numero < sorteado) {
        outDica.innerText = "Dica: o numero sorteado e MAIOR.";
    } else {
        outDica.innerText = "Dica: o numero sorteado e MENOR.";
    }

    frm.inNumero.value = "";
    frm.inNumero.focus();
});

// Botao "jogar novamente": zera tudo e sorteia outro numero.
frm.btNovo.addEventListener("click", () => {
    erros = [];
    sorteado = Math.floor(Math.random() * 100) + 1;

    outErros.innerText = "0";
    outChances.innerText = CHANCES;
    outDica.innerText = "Dica: e um numero entre 1 e 100";

    frm.btSubmit.disabled = false;
    frm.btNovo.className = "oculta";
    frm.inNumero.value = "";
    frm.inNumero.focus();
});
