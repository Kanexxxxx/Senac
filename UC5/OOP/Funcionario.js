/* =====================================================================
   AULA 3 - HERANCA (extends e super)

   HERANCA = uma classe reutilizar atributos e metodos de outra.

   QUANDO USAR? So quando existe a relacao "E UM":
        um Gerente E UM Funcionario   -> pode herdar
        um Gerente TEM UM Cracha      -> NAO e heranca, e composicao

   extends -> cria o vinculo. A classe filha ja nasce com tudo que a
              classe pai tem, sem precisar reescrever nada.
   super() -> executa o constructor da classe PAI, garantindo que os
              atributos herdados sejam inicializados corretamente.
              Regra: super() tem que vir ANTES do primeiro "this" da filha.
   ===================================================================== */

/* ---------------------------------------------------------------------
   CLASSE PAI (superclasse / classe base)
   Guarda tudo que TODO funcionario tem, sem excecao.
   --------------------------------------------------------------------- */
class Funcionario {

    #salario;   // privado: o salario nao pode ser mexido direto de fora

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;
    }

    get salario() {
        return this.#salario;
    }

    // Getter formatado, so para exibicao.
    get salarioFormatado() {
        return `R$ ${this.#salario.toFixed(2)}`;
    }

    // Metodo que TODOS os funcionarios (e os filhos) vao ter.
    calcularBonus() {
        // Regra padrao da empresa: 10% do salario.
        return this.#salario * 0.10;
    }

    apresentar() {
        console.log(`${this.nome} - ${this.cargo} - ${this.salarioFormatado} - Bonus: R$ ${this.calcularBonus().toFixed(2)}`);
    }
}

/* ---------------------------------------------------------------------
   CLASSE FILHA 1 - Gerente
   "extends Funcionario" = Gerente E UM Funcionario.
   Ele ja ganha nome, cargo, salario, os getters e apresentar()
   de graca, sem copiar uma linha sequer.
   --------------------------------------------------------------------- */
class Gerente extends Funcionario {

    constructor(nome, salario, numeroDeLiderados) {

        // super() chama o constructor do PAI para inicializar
        // nome, cargo e o #salario privado (que a filha nao alcanca sozinha).
        // Aqui ja fixamos o cargo como "Gerente".
        super(nome, "Gerente", salario);

        // So DEPOIS do super() podemos usar "this" para os atributos novos.
        this.numeroDeLiderados = numeroDeLiderados;
    }

    // Atributo e metodo EXCLUSIVOS da filha.
    // O pai (Funcionario) nao tem esse metodo.
    aprovarFerias(nomeDoLiderado) {
        console.log(`${this.nome} aprovou as ferias de ${nomeDoLiderado}.`);
    }
}

/* ---------------------------------------------------------------------
   CLASSE FILHA 2 - Desenvolvedor
   Mostra que varias filhas podem sair do mesmo pai.
   --------------------------------------------------------------------- */
class Desenvolvedor extends Funcionario {

    constructor(nome, salario, linguagem) {
        super(nome, "Desenvolvedor", salario);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} esta programando em ${this.linguagem}.`);
    }
}

/* =====================================================================
   TESTANDO
   ===================================================================== */

console.log("--- Objeto da classe PAI ---");
const funcionario = new Funcionario("Carlos", "Auxiliar", 2000);
funcionario.apresentar();

console.log("\n--- Objetos das classes FILHAS ---");
const gerente = new Gerente("Ana", 8000, 5);
const dev = new Desenvolvedor("Miguel", 5000, "JavaScript");

// apresentar() NAO foi escrito dentro de Gerente nem de Desenvolvedor.
// Eles herdaram o metodo do pai: e isso que evita duplicar codigo.
gerente.apresentar();
dev.apresentar();

console.log("\n--- Metodos exclusivos de cada filha ---");
gerente.aprovarFerias("Miguel");
dev.programar();

console.log("\n--- Provando a relacao 'E UM' ---");
// instanceof responde: este objeto veio (direta ou indiretamente) desta classe?
console.log(`gerente instanceof Gerente      -> ${gerente instanceof Gerente}`);       // true
console.log(`gerente instanceof Funcionario  -> ${gerente instanceof Funcionario}`);   // true (E UM funcionario)
console.log(`funcionario instanceof Gerente  -> ${funcionario instanceof Gerente}`);   // false (nem todo funcionario e gerente)
