/* =====================================================================
   AULA 3 - POLIMORFISMO E MEMBROS ESTATICOS (static)

   POLIMORFISMO ("muitas formas") = objetos de classes DIFERENTES
   respondem a MESMA chamada de metodo, cada um do seu jeito.

   Aqui: todo animal sabe emitirSom(). Mas o cachorro late, o gato mia
   e a vaca muge. Quem chama escreve sempre "animal.emitirSom()" e nem
   precisa saber qual animal e - o proprio objeto decide o comportamento.

   POLIMORFISMO POR SOBRESCRITA (Method Overriding) = a classe filha
   reescreve um metodo herdado do pai para dar a sua propria versao.

   MEMBRO ESTATICO (static) = pertence a CLASSE, nao ao objeto.
   Chama-se pelo nome da classe (Animal.contarAnimais()), sem "new",
   e e compartilhado por todos os objetos.
   ===================================================================== */

/* ---------------------------------------------------------------------
   CLASSE PAI
   --------------------------------------------------------------------- */
class Animal {

    // ATRIBUTO ESTATICO: existe UMA vez so, na classe.
    // Nao e "o total de patas do Rex", e o total de animais do sistema.
    static totalDeAnimais = 0;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

        // Toda vez que QUALQUER animal nasce, o contador da classe sobe.
        // Repare: "Animal.totalDeAnimais", nao "this.totalDeAnimais".
        Animal.totalDeAnimais++;
    }

    // Metodo generico. As filhas vao SOBRESCREVER este metodo.
    emitirSom() {
        console.log(`${this.nome} faz um som generico.`);
    }

    dormir() {
        console.log(`${this.nome} foi dormir.`);
    }

    // METODO ESTATICO: chamado por Animal.contarAnimais().
    // Ele NAO enxerga "this.nome", porque nao pertence a nenhum objeto.
    static contarAnimais() {
        console.log(`Total de animais cadastrados: ${Animal.totalDeAnimais}`);
    }

    // Metodo estatico usado como "utilitario"/validador.
    // E o mesmo padrao que o projeto final vai pedir na classe Validador.
    static idadeValida(idade) {
        return typeof idade === "number" && idade >= 0 && idade < 100;
    }
}

/* ---------------------------------------------------------------------
   CLASSES FILHAS - cada uma SOBRESCREVE emitirSom()
   Mesmo nome de metodo, comportamento diferente = POLIMORFISMO.
   --------------------------------------------------------------------- */

class Cachorro extends Animal {

    // Sobrescrita total: ignora a versao do pai e faz a sua.
    emitirSom() {
        console.log(`${this.nome} faz: Au Au!`);
    }
}

class Gato extends Animal {

    emitirSom() {
        console.log(`${this.nome} faz: Miau!`);
    }

    // Metodo so do gato.
    arranhar() {
        console.log(`${this.nome} arranhou o sofa.`);
    }
}

class Vaca extends Animal {

    // Sobrescrita APROVEITANDO o pai:
    // "super.emitirSom()" roda a versao original antes da nossa.
    // Usa-se quando a filha quer ESTENDER o comportamento, nao substituir.
    emitirSom() {
        super.emitirSom();
        console.log(`...na verdade, ${this.nome} faz: Muuu!`);
    }
}

/* =====================================================================
   TESTANDO
   ===================================================================== */

console.log("--- Metodo estatico ANTES de criar qualquer objeto ---");
// Repare: chamamos direto na CLASSE, sem "new". Isso e o static.
Animal.contarAnimais();
console.log(`Idade 5 e valida?   ${Animal.idadeValida(5)}`);
console.log(`Idade -3 e valida?  ${Animal.idadeValida(-3)}`);

console.log("\n--- Criando os objetos ---");
const rex = new Cachorro("Rex", 3);
const mimi = new Gato("Mimi", 2);
const mimosa = new Vaca("Mimosa", 5);
const bicho = new Animal("Bicho", 1);

Animal.contarAnimais();   // agora o contador estatico esta em 4

console.log("\n--- POLIMORFISMO NA PRATICA ---");
// Guardamos animais de classes DIFERENTES no mesmo array.
const animais = [rex, mimi, mimosa, bicho];

// O laco chama sempre a MESMA linha: animal.emitirSom().
// Nao existe if/else escolhendo o som. Cada objeto ja sabe o que fazer.
// Se amanha criarmos a classe Pato, ela entra no array e funciona
// sem mudar UMA LINHA deste laco. Isso e a forca do polimorfismo.
for (const animal of animais) {
    animal.emitirSom();
}

console.log("\n--- Metodos herdados continuam funcionando ---");
// dormir() nao foi sobrescrito por ninguem: todos usam a versao do pai.
rex.dormir();
mimi.dormir();

console.log("\n--- Metodo exclusivo da filha ---");
mimi.arranhar();

console.log("\n--- Atributo estatico e UM SO, compartilhado ---");
// Nao existe "rex.totalDeAnimais": o static mora na classe, nao no objeto.
console.log(`rex.totalDeAnimais    = ${rex.totalDeAnimais}`);       // undefined
console.log(`Animal.totalDeAnimais = ${Animal.totalDeAnimais}`);    // 4
