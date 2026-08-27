/* =====================================================================
   AULA 2 - MODELO DE PROTOTIPOS DO JAVASCRIPT (Prototype Chain)

   No JS, objetos herdam de OUTROS OBJETOS.
   Todo objeto tem um prototipo interno. Quando pedimos uma propriedade,
   o JS procura primeiro no proprio objeto; se nao achar, sobe para o
   prototipo, depois para o prototipo do prototipo... ate achar
   ou devolver "undefined". Isso e a CADEIA DE PROTOTIPOS.

   Dois nomes que confundem:
   - prototype  -> propriedade da FUNCAO CONSTRUTORA. Define o prototipo
                   que as instancias criadas por ela vao usar.
   - __proto__  -> referencia interna de CADA OBJETO, apontando para o
                   prototipo do qual ele herda.
                   (sao 2 underscores de cada lado: __proto__)

   OBS: este arquivo estava com 3 erros na versao antiga:
        "console joao ="  (era "const"),  "___proto___" com 3 underscores
        e uma variavel global "fala" criada sem querer.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) A FORMA ANTIGA: function construtora + prototype
   --------------------------------------------------------------------- */

// Funcao construtora: por convencao comeca com letra MAIUSCULA.
// Quando chamada com "new", o "this" aponta para o objeto novo.
function Pessoa(nome) {
    this.nome = nome;
}

// O metodo NAO fica dentro de cada objeto: fica no PROTOTIPO,
// que e compartilhado por todas as pessoas criadas.
// Vantagem: 1000 pessoas na memoria = 1 unica copia do metodo falar().
Pessoa.prototype.falar = function () {
    console.log(`Ola, meu nome e ${this.nome}`);
};

const joao = new Pessoa("Joao");
const maria = new Pessoa("Maria");

joao.falar();
maria.falar();

console.log("\n--- Provando a cadeia de prototipos ---");

// "nome" esta DENTRO do proprio objeto joao.
console.log(`joao tem 'nome' proprio?  ${joao.hasOwnProperty("nome")}`);   // true

// "falar" NAO esta dentro de joao: ele foi buscar no prototipo.
console.log(`joao tem 'falar' proprio? ${joao.hasOwnProperty("falar")}`);  // false

// __proto__ do objeto aponta para o prototype da funcao construtora.
console.log(`joao.__proto__ === Pessoa.prototype ? ${joao.__proto__ === Pessoa.prototype}`);   // true

// Forma moderna e recomendada de ler a mesma coisa:
console.log(`Object.getPrototypeOf(joao) === Pessoa.prototype ? ${Object.getPrototypeOf(joao) === Pessoa.prototype}`);

// Subindo mais um degrau da cadeia: Pessoa.prototype herda de Object.prototype,
// e o topo da cadeia e sempre null.
console.log(`Pessoa.prototype.__proto__ === Object.prototype ? ${Pessoa.prototype.__proto__ === Object.prototype}`);
console.log(`Object.prototype.__proto__ = ${Object.prototype.__proto__}`);   // null = fim da cadeia

// Propriedade que nao existe em lugar nenhum da cadeia:
console.log(`joao.idade = ${joao.idade}`);   // undefined


/* ---------------------------------------------------------------------
   2) A FORMA NOVA: class do ES6

   A class NAO e um mecanismo novo de heranca. Ela e apenas uma forma
   mais legivel ("acucar sintatico") de escrever exatamente o mesmo
   codigo de cima: uma funcao construtora com metodos no prototype.
   --------------------------------------------------------------------- */

class Pessoa2 {
    constructor(nome) {
        this.nome = nome;
    }

    // Este metodo tambem vai parar no Pessoa2.prototype, e nao no objeto.
    falar() {
        console.log(`Ola, meu nome e ${this.nome}`);
    }
}

const ana = new Pessoa2("Ana");
ana.falar();

console.log("\n--- class gera o MESMO tipo de estrutura ---");
console.log(`ana.__proto__ === Pessoa2.prototype ? ${ana.__proto__ === Pessoa2.prototype}`);   // true
console.log(`ana tem 'falar' proprio? ${ana.hasOwnProperty("falar")}`);                        // false (esta no prototipo)

// Prova final: por baixo do capo, "class" continua sendo uma funcao.
console.log(`typeof Pessoa  = ${typeof Pessoa}`);    // function
console.log(`typeof Pessoa2 = ${typeof Pessoa2}`);   // function tambem!
