/* =====================================================================
   AULA 2 - ENCAPSULAMENTO E CAMPOS PRIVADOS (#)

   ENCAPSULAMENTO = esconder os detalhes internos do objeto para
   proteger os dados contra alteracoes indevidas.

   MEMBRO PUBLICO  -> acessivel de qualquer lugar do sistema (this.titular)
   MEMBRO PRIVADO  -> so a propria classe enxerga        (this.#saldo)

   Em JavaScript o "#" na frente do nome torna o campo privado
   (padronizado no ES2022). Sem ele, qualquer um poderia escrever:
        minhaConta.saldo = 1000000;
   e o sistema perderia a integridade.
   ===================================================================== */

class ContaBancaria {

    // -----------------------------------------------------------------
    // CAMPOS PRIVADOS
    // Precisam ser declarados aqui em cima, antes de serem usados.
    // Fora da classe, "minhaConta.#saldo" da erro de sintaxe.
    // -----------------------------------------------------------------
    #saldo;
    #senha;

    constructor(titular, saldoInicial, senha) {
        this.titular = titular;      // PUBLICO: pode ser lido/alterado de fora
        this.#saldo = saldoInicial;  // PRIVADO: protegido
        this.#senha = senha;         // PRIVADO: nunca pode vazar
    }

    // -----------------------------------------------------------------
    // GETTER - leitura CONTROLADA do campo privado.
    // Repare que se usa SEM parenteses:  console.log(minhaConta.saldo)
    // Alem de liberar a leitura, ele ja FORMATA o valor (R$ 0,00).
    // Como nao existe "set saldo", o saldo e somente leitura de fora:
    // a unica forma de mexer nele e pelos metodos depositar/sacar.
    // -----------------------------------------------------------------
    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }

    // -----------------------------------------------------------------
    // METODO depositar()
    // A regra de negocio fica DENTRO do objeto: nao aceita valor <= 0.
    // -----------------------------------------------------------------
    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de deposito invalido.");
            return;   // "return" sozinho encerra o metodo aqui
        }

        this.#saldo += valor;
        console.log(`Deposito de R$ ${valor.toFixed(2)} realizado.`);
    }

    // -----------------------------------------------------------------
    // METODO sacar()
    // Duas validacoes em sequencia. Cada uma com seu "return", para
    // nao deixar o codigo continuar quando a condicao ja falhou.
    // -----------------------------------------------------------------
    sacar(valor, senhaInformada) {

        // 1) confere a senha comparando com o campo privado
        if (senhaInformada !== this.#senha) {
            console.log("Senha incorreta!");
            return;
        }

        // 2) confere se tem dinheiro suficiente
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente!");
            return;
        }

        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    }
}

/* =====================================================================
   TESTANDO
   ===================================================================== */

const minhaConta = new ContaBancaria("Kaina", 100, 123456);

minhaConta.depositar(100);        // 100 + 100 = 200
minhaConta.sacar(25, 123456);     // senha certa -> 200 - 25 = 175
minhaConta.sacar(50, 999999);     // senha errada -> recusado
minhaConta.sacar(5000, 123456);   // saldo insuficiente -> recusado

// Leitura pelo GETTER (sem parenteses, parece um atributo comum).
console.log(`Saldo final: ${minhaConta.saldo}`);

// PROVA DO ENCAPSULAMENTO:
// o atributo publico muda numa boa...
minhaConta.titular = "Kaina Rodrigues";
console.log(`Titular: ${minhaConta.titular}`);

// ...ja o campo privado nao existe do lado de fora.
// A linha abaixo criaria uma propriedade NOVA e inutil chamada "saldo2",
// sem NUNCA tocar no #saldo real protegido dentro da classe.
minhaConta.saldo2 = 999999;
console.log(`Saldo real continua: ${minhaConta.saldo}`);
