function Pessoa (nome){
    this.nome = nome;

}

Pessoa.prototype.falar = fala = function() {
    console.log(`Ola, meu nome e ${this.nome}`);

}
console joao = new Pessoa ("joão");
console.log(joao.___proto___=== Pessoa.prototype);