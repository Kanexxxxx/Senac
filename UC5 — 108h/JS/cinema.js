const frm = document.querySelector("form");
const outTitulo = document.querySelector("#outTitulo");
const outDuracao = document.querySelector("#outDuracao");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    outTitulo.innerText = titulo;
    outDuracao.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
});

frm.addEventListener("reset", () => {
    outTitulo.innerText = "";
    outDuracao.innerText = "";
});
