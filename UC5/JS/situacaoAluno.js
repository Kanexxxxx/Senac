const frm = document.querySelector("form");
const outMedia = document.querySelector("#outMedia");
const outSituacao = document.querySelector("#outSituacao");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;

    outMedia.innerText = `Media das notas: ${media.toFixed(1)}`;
    outSituacao.className = "";

    if (media >= 7) {
        outSituacao.innerText = `Parabens ${nome}. Voce foi aprovado(a)!`;
        outSituacao.classList.add("aprovado");
    } else if (media >= 4) {
        outSituacao.innerText = `Atencao ${nome}. Voce esta em exame.`;
        outSituacao.classList.add("exame");
    } else {
        outSituacao.innerText = `Ops ${nome}. Voce foi reprovado(a)!`;
        outSituacao.classList.add("reprovado");
    }
});

frm.addEventListener("reset", () => {
    outMedia.innerText = "";
    outSituacao.innerText = "";
    outSituacao.className = "";
});
