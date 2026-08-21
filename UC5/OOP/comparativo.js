// Abordagem procedural: os dados e a função ficam separados.
const contaProcedural = { titular: "Ana", saldo: 100 };

function depositar(conta, valor) {
    conta.saldo += valor;
}

depositar(contaProcedural, 50);
console.log(`Procedural: ${contaProcedural.titular} tem R$ ${contaProcedural.saldo}`);

// Abordagem orientada a objetos: dados e comportamentos ficam juntos.
class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

const contaPOO = new ContaBancaria("Ana", 100);
contaPOO.depositar(50);
console.log(`POO: ${contaPOO.titular} tem R$ ${contaPOO.saldo}`);
