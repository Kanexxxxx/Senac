/* =====================================================================
   AULA 2 - ABSTRACAO

   ABSTRACAO = esconder a COMPLEXIDADE e mostrar so a interface
   simples e essencial para usar o sistema.

   Comparacao do dia a dia: para dirigir voce so gira a chave.
   Nao precisa saber como a injecao eletronica funciona.

   Aqui: quem usa a classe chama UM unico metodo publico -> processar().
   Por tras dele rodam 4 passos privados que ninguem de fora enxerga:
        1. validar o cartao
        2. verificar o saldo
        3. registrar a transacao
        4. enviar o recibo

   Repare que ate os METODOS podem ser privados com "#".
   ===================================================================== */

class ProcessadorDePagamento {

    // Campos privados com valor inicial ja na declaracao.
    #saldo = 1000;
    #limite = 500;

    /* -----------------------------------------------------------------
       INTERFACE PUBLICA
       E o UNICO metodo que o mundo de fora precisa conhecer.
       Ele orquestra os passos internos na ordem certa.
       ----------------------------------------------------------------- */
    processar(valor, cartao) {

        // O "!" (NOT) inverte o resultado: "se NAO for valido..."
        if (!this.#validarCartao(cartao)) {
            return "Cartao invalido.";
        }

        if (!this.#verificarSaldo(valor)) {
            return "Saldo insuficiente.";
        }

        this.#registrarTransacao(valor);
        this.#enviarRecibo(valor);

        return "Pagamento aprovado.";
    }

    /* -----------------------------------------------------------------
       PASSOS INTERNOS (PRIVADOS)
       Chamados apenas de dentro da classe, sempre com "this.#nome()".
       Se alguem tentar "processador.#validarCartao(...)" da erro.
       ----------------------------------------------------------------- */

    // Passo 1: o cartao tem numero e ainda esta na validade?
    #validarCartao(cartao) {
        console.log("1) Validando cartao...");

        // Boolean(...) transforma qualquer coisa em true/false.
        // O "?." evita quebrar o programa caso cartao venha undefined.
        return Boolean(cartao?.numero) && cartao.validade > new Date();
    }

    // Passo 2: o valor cabe no saldo + limite?
    #verificarSaldo(valor) {
        console.log("2) Verificando saldo...");
        return valor > 0 && valor <= this.#saldo + this.#limite;
    }

    // Passo 3: desconta de verdade do saldo privado.
    #registrarTransacao(valor) {
        this.#saldo -= valor;
        console.log(`3) Transacao de R$ ${valor.toFixed(2)} registrada.`);
    }

    // Passo 4: "envia" o comprovante.
    #enviarRecibo(valor) {
        console.log(`4) Recibo enviado: pagamento de R$ ${valor.toFixed(2)}.`);
    }
}

/* =====================================================================
   TESTANDO
   Do lado de fora o codigo fica SIMPLES: cria e chama processar().
   Toda a complexidade ficou escondida (abstraida) dentro da classe.
   ===================================================================== */

const processador = new ProcessadorDePagamento();

// Objeto literal representando o cartao do cliente.
const cartao = {
    numero: "1234 5678 9012 3456",
    validade: new Date("2027-12-31")
};

console.log("--- Pagamento valido ---");
console.log(processador.processar(150, cartao));

console.log("\n--- Cartao vencido ---");
const cartaoVencido = { numero: "9999 9999 9999 9999", validade: new Date("2020-01-01") };
console.log(processador.processar(150, cartaoVencido));

console.log("\n--- Valor acima do saldo + limite ---");
console.log(processador.processar(99999, cartao));
