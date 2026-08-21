/* =====================================================================
   DESAFIO: Sistema de Controle de Dispositivos - Smart Home
   Classe LampadaInteligente

   O que o enunciado pediu:
   1) campo privado #brilho, que so aceita valores de 0 a 100
   2) getter e setter para validar esse brilho
   3) metodos ligar(), desligar() e ajustarCor()

   Tudo aqui usa so o que ja foi visto em aula: class, constructor, this,
   campo privado (#), get, set, if, array, includes() e template literal.
   ===================================================================== */

class LampadaInteligente {

    // ---------------------------------------------------------------
    // CAMPO PRIVADO
    // O "#" na frente do nome faz o campo ser PRIVADO: ele so pode ser
    // lido ou alterado por codigo que esta DENTRO da classe.
    // E o mesmo "#saldo" que voce ja usou na ContaBancaria2.
    // Isso impede que alguem de fora escreva: lampada.#brilho = 5000;
    // ---------------------------------------------------------------
    #brilho;

    // ---------------------------------------------------------------
    // CONSTRUCTOR: roda automaticamente quando escrevemos "new".
    // Ele recebe os dados iniciais e guarda dentro do objeto.
    // O comodo = "Sala" e um valor padrao: se ninguem passar nada,
    // vale "Sala" (igual ao paginasLidas = 0 do exercicio do Livro).
    // ---------------------------------------------------------------
    constructor(comodo = "Sala", brilhoInicial = 0, cor = "branco") {

        this.comodo = comodo;   // atributo publico: qualquer um pode ler/mudar
        this.cor = cor;         // atributo publico
        this.ligada = false;    // toda lampada comeca desligada

        // Primeiro damos um valor qualquer ao campo privado,
        // porque um campo privado precisa existir antes de ser usado.
        this.#brilho = 0;

        // ATENCAO NESTA LINHA (e a parte mais importante do exercicio):
        // aqui escrevemos "this.brilho" SEM o "#".
        // Como existe um "set brilho()" logo abaixo, o JavaScript nao
        // guarda o valor direto: ele CHAMA O SETTER, que valida antes.
        // Ou seja, mesmo no constructor o valor ja passa pela validacao.
        this.brilho = brilhoInicial;
    }

    // ---------------------------------------------------------------
    // GETTER - serve para LER o valor privado de fora da classe.
    // Repare que ele NAO leva parenteses na hora de usar:
    //     console.log(lampada.brilho);   <-- parece um atributo comum
    // Sem este getter, "lampada.brilho" devolveria undefined,
    // porque #brilho e invisivel do lado de fora.
    // ---------------------------------------------------------------
    get brilho() {
        return this.#brilho;
    }

    // ---------------------------------------------------------------
    // SETTER - serve para ESCREVER o valor privado com validacao.
    // Ele e chamado sozinho quando alguem escreve:
    //     lampada.brilho = 150;
    // O 150 chega aqui dentro no parametro "valor" e nos decidimos
    // o que fazer com ele. E aqui que garantimos a regra 0 ate 100.
    // O setter sempre recebe UM parametro e nao devolve valor.
    // ---------------------------------------------------------------
    set brilho(valor) {

        // Se veio algo que nao e numero (ex: um texto), recusa a troca.
        // isNaN quer dizer "is Not a Number" (nao e um numero).
        if (isNaN(valor)) {
            console.log(`ERRO: ${valor} nao e um numero. Brilho continua em ${this.#brilho}%.`);
            return;   // "return" sozinho encerra o metodo aqui mesmo
        }

        // Regra 1: nao pode ser menor que 0.
        if (valor < 0) {
            console.log(`AVISO: ${valor} e menor que 0. Ajustando para 0%.`);
            valor = 0;
        }

        // Regra 2: nao pode ser maior que 100.
        if (valor > 100) {
            console.log(`AVISO: ${valor} e maior que 100. Ajustando para 100%.`);
            valor = 100;
        }

        // So depois de validado o valor entra no campo privado.
        this.#brilho = valor;
    }

    // ---------------------------------------------------------------
    // METODO ligar()
    // Metodo e uma funcao que fica dentro da classe.
    // Note que nao leva a palavra "function" na frente.
    // ---------------------------------------------------------------
    ligar() {

        // Se ja estiver ligada, nao faz nada e avisa.
        if (this.ligada === true) {
            console.log(`A lampada da ${this.comodo} ja esta ligada.`);
            return;
        }

        this.ligada = true;

        // Se o brilho estava em 0, ligar com 0% seria o mesmo que
        // continuar apagada. Entao subimos para 100%.
        // Usamos "this.brilho = 100" (sem #) para passar pelo setter.
        if (this.#brilho === 0) {
            this.brilho = 100;
        }

        console.log(`LIGADA: lampada da ${this.comodo} | cor ${this.cor} | brilho ${this.#brilho}%.`);
    }

    // ---------------------------------------------------------------
    // METODO desligar()
    // ---------------------------------------------------------------
    desligar() {

        if (this.ligada === false) {
            console.log(`A lampada da ${this.comodo} ja esta desligada.`);
            return;
        }

        this.ligada = false;
        console.log(`DESLIGADA: lampada da ${this.comodo}.`);
    }

    // ---------------------------------------------------------------
    // METODO ajustarCor()
    // Recebe a cor nova e so aceita se ela estiver na lista permitida.
    // includes() devolve true ou false, igual voce usou para procurar
    // aluno no exercicio 2 (Cadastro de Alunos).
    // ---------------------------------------------------------------
    ajustarCor(novaCor) {

        const coresPermitidas = ["branco", "amarelo", "azul", "verde", "vermelho"];

        if (coresPermitidas.includes(novaCor) === false) {
            console.log(`ERRO: a cor ${novaCor} nao existe. Use: ${coresPermitidas.join(" | ")}`);
            return;
        }

        this.cor = novaCor;
        console.log(`COR ALTERADA: lampada da ${this.comodo} agora esta ${this.cor}.`);
    }

    // ---------------------------------------------------------------
    // METODO status() - extra, so para exibir tudo de uma vez.
    // ---------------------------------------------------------------
    status() {

        // Variavel auxiliar so para escrever "ligada" ou "desligada".
        let situacao = "desligada";

        if (this.ligada === true) {
            situacao = "ligada";
        }

        // Repare no this.brilho (sem #): aqui estamos usando o GETTER.
        console.log(`[${this.comodo}] ${situacao} | cor: ${this.cor} | brilho: ${this.brilho}%`);
    }
}

/* =====================================================================
   TESTANDO
   "new" cria um objeto (uma instancia) a partir do molde da classe.
   ===================================================================== */

console.log("--- Criando as lampadas ---");
const lampadaSala = new LampadaInteligente("Sala");
const lampadaQuarto = new LampadaInteligente("Quarto", 40, "azul");

lampadaSala.status();
lampadaQuarto.status();

console.log("\n--- Ligando e desligando ---");
lampadaSala.ligar();       // estava em 0%, entao sobe para 100%
lampadaSala.ligar();       // segunda vez: avisa que ja esta ligada
lampadaQuarto.ligar();     // ja tinha 40%, entao mantem 40%
lampadaQuarto.desligar();
lampadaQuarto.desligar();  // segunda vez: avisa que ja esta desligada

console.log("\n--- Testando a validacao do brilho (setter) ---");
lampadaSala.brilho = 70;    // valor valido, entra normal
lampadaSala.status();

lampadaSala.brilho = 150;   // maior que 100 -> vira 100
lampadaSala.status();

lampadaSala.brilho = -20;   // menor que 0 -> vira 0
lampadaSala.status();

lampadaSala.brilho = "abc"; // nao e numero -> recusado
lampadaSala.status();

console.log("\n--- Lendo o brilho (getter) ---");
// Repare: SEM parenteses, parece um atributo, mas e o "get brilho()".
console.log(`Brilho atual da sala: ${lampadaSala.brilho}%`);

console.log("\n--- Trocando a cor ---");
lampadaSala.ajustarCor("verde");   // cor da lista -> aceita
lampadaSala.ajustarCor("roxo");    // fora da lista -> recusa
lampadaSala.status();
