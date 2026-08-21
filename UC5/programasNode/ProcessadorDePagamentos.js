class ProcessadorDePagamento {
    #saldo = 1000;
    #limite = 500;

    processarPagamento(valor, cartao) {
        if (!this.#validarCartao(cartao)) {
            return "Cartão inválido.";
        }

        if (!this.#verificarSaldo(valor)) {
            return "Saldo insuficiente.";
        }

        this.#registrarTransacao(valor);
        this.#enviarRecibo(valor);
        return "Pagamento aprovado.";
    }

    #validarCartao(cartao) {
        console.log("Validando cartão...");
        return Boolean(cartao?.numero) && cartao.validade > new Date();
    }

    #verificarSaldo(valor) {
        console.log("Verificando saldo...");
        return valor > 0 && valor <= this.#saldo + this.#limite;
    }

    #registrarTransacao(valor) {
        this.#saldo -= valor;
        console.log(`Transação de R$ ${valor.toFixed(2)} registrada.`);
    }

    #enviarRecibo(valor) {
        console.log(`Recibo enviado: pagamento de R$ ${valor.toFixed(2)}.`);
    }
}

const processador = new ProcessadorDePagamento();
const cartao = {
    numero: "1234 5678 9012 3456",
    validade: new Date("2027-12-31")
};

console.log(processador.processarPagamento(150, cartao));
