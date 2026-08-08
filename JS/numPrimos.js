const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let temDivisor = false;

    // Procura divisores entre 2 e a metade do numero.
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temDivisor = true;
            break;
        }
    }

    if (num > 1 && temDivisor == false) {
        resp.innerText = num + " e primo.";
    } else {
        resp.innerText = num + " nao e primo.";
    }
});

frm.addEventListener("reset", () => {
    resp.innerText = "";
});
