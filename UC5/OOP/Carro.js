/* =====================================================================
   AULA 1 - CLASSE, OBJETO, ATRIBUTOS, METODOS e o "this"

   CLASSE  = o molde / a planta da casa. Sozinha ela nao e um carro.
   OBJETO  = a instancia, o carro de verdade construido a partir do molde.

   Uma unica classe Carro pode gerar quantos objetos quisermos, e cada
   objeto guarda os SEUS proprios valores (um Uno vermelho, um Gol azul...).

   ATRIBUTOS = o que o objeto TEM   (marca, modelo, ano, velocidade)
   METODOS   = o que o objeto FAZ   (acelerar, frear)
   ===================================================================== */

class Carro {

    // -----------------------------------------------------------------
    // CONSTRUCTOR
    // Metodo especial chamado sozinho quando escrevemos "new Carro(...)".
    // Responsavel por DEFINIR e INICIALIZAR as propriedades do objeto.
    // -----------------------------------------------------------------
    constructor(marca, modelo, ano) {

        // "this" e a referencia ao objeto que esta sendo criado agora.
        // this.marca (o atributo) recebe marca (o parametro).
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        // Nem todo atributo precisa vir de parametro.
        // Todo carro comeca parado, entao ja fixamos 0 aqui.
        this.velocidade = 0;
    }

    // -----------------------------------------------------------------
    // METODO acelerar()
    // Dentro da classe NAO se escreve a palavra "function".
    // "this.velocidade" e sempre a velocidade DESTE carro,
    // nunca a de outro objeto.
    // -----------------------------------------------------------------
    acelerar(incremento) {
        this.velocidade += incremento;   // mesmo que: this.velocidade = this.velocidade + incremento
        console.log(`O ${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }

    // -----------------------------------------------------------------
    // METODO frear()
    // -----------------------------------------------------------------
    frear() {
        this.velocidade = 0;
        console.log(`O ${this.modelo} parou.`);
    }
}

/* =====================================================================
   TESTANDO
   ===================================================================== */

const meuCarro = new Carro("Fiat", "Uno", 2020);
meuCarro.acelerar(50);
meuCarro.acelerar(30);   // 50 + 30 = 80: o objeto LEMBRA do proprio estado
meuCarro.frear();

// Prova de que cada objeto tem os proprios valores:
// o outroCarro nasce do MESMO molde, mas com dados independentes.
const outroCarro = new Carro("Volkswagen", "Gol", 2018);
outroCarro.acelerar(60);

console.log(`Velocidade do Uno: ${meuCarro.velocidade} km/h`);   // 0   (foi freado)
console.log(`Velocidade do Gol: ${outroCarro.velocidade} km/h`); // 60
