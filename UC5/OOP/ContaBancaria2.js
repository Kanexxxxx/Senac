class ContaBancaria {
  #saldo;
  #senha;

  constructor(titular, saldoInicial, senha) {
    this.titular = titular;
    this.#saldo = saldoInicial;
    this.#senha = senha;
  }
  //getter para leitura controlada
  get saldo() {
    return `R$ ${this.#saldo.toFixed(2)}`;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depositando: R$ ${valor}`);
    }
  }

  sacar(valor, senhainformada) {
    if (senhainformada !== this.#senha) {
      console.log("Senha incorreta!");
      return;
    }

    if (valor > this.#saldo) {
      console.log("Saldo insuficiente!");
      return;
    }
    this.#saldo -= valor;
    console.log(`Saque de R$ ${valor} realizado.`);
  }
}
const minhaConta = new ContaBancaria ("Kainã", 100,123456);

minhaConta.depositar(100);
minhaConta.sacar(25, 123456);
