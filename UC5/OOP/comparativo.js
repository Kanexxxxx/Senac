/* =====================================================================
   AULA 1 - COMPARATIVO: PROCEDURAL  x  ORIENTADO A OBJETOS

   O mesmo problema (depositar dinheiro numa conta) resolvido das
   duas formas, lado a lado, para enxergar a diferenca.

   A frase-chave da aula:
   - Procedural: a FUNCAO manipula uma estrutura de fora  -> depositar(conta, 50)
   - POO:        o OBJETO cuida do proprio estado com this -> conta.depositar(50)
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) ABORDAGEM PROCEDURAL
   Aqui os DADOS ficam num lugar e o COMPORTAMENTO em outro.
   Nada impede que outra parte do programa mude o saldo direto
   (contaProcedural.saldo = 999999) sem passar por regra nenhuma.
   --------------------------------------------------------------------- */

// Objeto literal: so um pacote de chave: valor, sem comportamento.
const contaProcedural = { titular: "Ana", saldo: 100 };

// A funcao esta SOLTA. Ela precisa receber a conta como parametro,
// porque ela nao "pertence" a conta nenhuma.
function depositar(conta, valor) {
    conta.saldo += valor;
}

depositar(contaProcedural, 50);   // repare: passamos a conta E o valor
console.log(`Procedural: ${contaProcedural.titular} tem R$ ${contaProcedural.saldo}`);


/* ---------------------------------------------------------------------
   2) ABORDAGEM ORIENTADA A OBJETOS
   Agora DADOS + COMPORTAMENTO moram juntos dentro da classe.
   A conta sabe se cuidar sozinha.
   --------------------------------------------------------------------- */

class ContaBancaria {

    // constructor: metodo especial que roda automaticamente no "new".
    // E ele que inicializa as propriedades do objeto recem-criado.
    constructor(titular, saldoInicial) {
        this.titular = titular;      // "this" = ESTE objeto que esta nascendo
        this.saldo = saldoInicial;
    }

    // O metodo nao recebe mais a conta como parametro.
    // Ele usa "this", que aponta para o objeto que chamou o metodo.
    depositar(valor) {
        this.saldo += valor;
    }
}

// "new" fabrica um objeto (instancia) a partir do molde da classe.
const contaPOO = new ContaBancaria("Ana", 100);

contaPOO.depositar(50);   // repare: passamos SO o valor. O objeto ja sabe quem ele e.
console.log(`POO: ${contaPOO.titular} tem R$ ${contaPOO.saldo}`);
