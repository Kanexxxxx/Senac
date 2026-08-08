const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLisa = document.querySelector("pre");

const paciente = []; //declara array globlal

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    paciente.push(nome); // adiciona o nome no final do array
    let lista = ""; // string para contatenar pacientes

    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }
    respLisa.innerText = lista; // exibe a lista de paciente na pagina
    frm.inPaciente.value = "";//limpar conteudo do campos de formulario
    frm.inPaciente.focus();// posiciona o cursor no campo

})
//adiciona ouvinte para  o evento click no btUrgente que esta no form
frm.addEventListener("click", () => {
    //verifica se as validacoes do form esta ok (no caso. paciente is required)
    if (!frm.checkValidity()) {
        alert("informe o nome do paciente a ser atendido em carater de urgencia")
        frm.inPaciente.focus(); //posicionar o cursos no campo
        return;
    }
    const nome = frm.inPaciente.value;
    paciente.unshift(nome); //adiciona paciente no inicio do campo
    let lista = ""; // string para concatenar pacientes
    //ForEach () aplicado sobre o array pacientes
    paciente.forEach((paciente, i) => (lista += `${i + 1}.${paciente}`));
    respLisa.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();

})

frm.btAtender.addEventListener("Click", () => {
    //se o tamanho do vetor = 0
    if (paciente.length == 0) {
        alert("Não ha pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    }
    const atender = paciente.shift();//remove do inicio da fila (e obtem o nome)
    respNome.innerText = atender; //exibe o nome do paciente em atendimentos
    let lista = "";
    paciente.forEach((paciente, i) => (lista += `${i + 1}.${paciente}\n`));

})






/*abordagem                                                      

 as duas funcionam ,mas tem propositos diferentes:        dua filas (urgencia[] e pacientes [])
 uma Fila (pacientes)                                    codico e mais organizado      
 mais economica em memoria                               nao precisa controlar indices
 exige controlar a posicao dos urgentes                  mais facil de entender e expandir
 mas dificil de mantes                                   mais proxima de sistemas   reais
 boa para exercicios sobre arrays


 vantagens de segunda solucao

 codico mas organizado
 nao precisa usar splice() nem controlar uma variavel como pacugencia
 a logica fica mais intuitiva duas filas independentes
 facilita futuras melhorias como adicionar novas prioridades 

 esse solucao e mais organizada e segue um conceio muio utilizado em sistemas
 reias e programacao
 separar por prioridades e mantes duas filas independent
 */