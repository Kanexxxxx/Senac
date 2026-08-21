class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;

    }
    acelerar(incremento) {
        this.velocidade += incremento;
        console.log(`O ${this.modelo} acelerou para ${this.velocidade} km/h.`);

    }
    frear() {
        this.velocidade = 0;
        console.log(`O ${this.modelo} parou.`);
    }
}


const meuCarro = new Carro("Fiat", "Uno", 2020);
meuCarro.acelerar(50);
meuCarro.frear();
