/* =====================================================================
   AULA 3 - PROJETO FINAL: Sistema de E-commerce / Carrinho de Compras

   Junta tudo que foi visto nas tres aulas:
   - Classe e objeto              (Aula 1)
   - constructor e this           (Aula 1)
   - Campos privados com #        (Aula 2)
   - Getters                      (Aula 2)
   - Heranca com extends/super    (Aula 3)
   - Polimorfismo por sobrescrita (Aula 3)
   - Metodo estatico (static)     (Aula 3)
   ===================================================================== */


/* =====================================================================
   CLASSE BASE - Produto

   E o molde de qualquer produto da loja.
   Ela nao e vendida diretamente: quem vai para o carrinho e um
   ProdutoFisico ou um ProdutoDigital (as classes filhas).
   ===================================================================== */
class Produto {

    // Campos privados: ninguem de fora muda o preco na marra.
    #id;
    #nome;
    #preco;

    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    // ---- GETTERS: leitura controlada dos campos privados ----
    // Usados SEM parenteses: produto.nome (parece um atributo comum).
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

    // -----------------------------------------------------------------
    // calcularDesconto()
    // Versao PADRAO da classe pai: produto comum nao tem desconto.
    // As filhas vao SOBRESCREVER este metodo com a regra delas.
    // -----------------------------------------------------------------
    calcularDesconto() {
        return 0;
    }

    // -----------------------------------------------------------------
    // calcularFrete()
    // Mesma ideia: por padrao o frete e zero.
    // So o ProdutoFisico vai sobrescrever, porque so ele e entregue.
    // -----------------------------------------------------------------
    calcularFrete() {
        return 0;
    }

    // Quanto o cliente realmente paga por este produto.
    // Repare: chamamos this.calcularDesconto() sem saber de qual classe
    // o objeto e. O proprio objeto escolhe a versao certa.
    precoFinal() {
        return this.#preco - this.calcularDesconto() + this.calcularFrete();
    }
}


/* =====================================================================
   CLASSE FILHA 1 - ProdutoFisico

   "extends Produto" = ProdutoFisico E UM Produto.
   Novidade: tem peso, entao tem frete.
   ===================================================================== */
class ProdutoFisico extends Produto {

    constructor(id, nome, preco, peso) {

        // super() chama o constructor do pai para gravar id, nome e preco
        // (que sao privados e a filha nao alcanca sozinha).
        super(id, nome, preco);

        // So depois do super() podemos usar this para o atributo novo.
        this.peso = peso;   // em kg
    }

    // SOBRESCRITA 1: produto fisico tem 5% de desconto.
    calcularDesconto() {
        return this.preco * 0.05;
    }

    // SOBRESCRITA 2: o frete e R$ 2,50 por quilo.
    calcularFrete() {
        return this.peso * 2.50;
    }
}


/* =====================================================================
   CLASSE FILHA 2 - ProdutoDigital

   Tambem E UM Produto, mas nao precisa ser entregue.
   Como a loja nao gasta com frete, o desconto pode ser MAIOR.
   ===================================================================== */
class ProdutoDigital extends Produto {

    constructor(id, nome, preco, tamanhoArquivo) {
        super(id, nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;   // em MB
    }

    // SOBRESCRITA: 20% de desconto (nao tem custo de entrega).
    calcularDesconto() {
        return this.preco * 0.20;
    }

    // Nao sobrescreve calcularFrete(): herda o 0 do pai.
}


/* =====================================================================
   CLASSE UTILITARIA - Validador

   O metodo e STATIC: pertence a CLASSE, nao ao objeto.
   Por isso chamamos Validador.precoValido(...) sem usar "new".
   ===================================================================== */
class Validador {

    // Preco valido: precisa ser numero e maior que zero.
    static precoValido(preco) {

        if (isNaN(preco)) {
            return false;
        }

        return preco > 0;
    }
}


/* =====================================================================
   CLASSE Carrinho

   Guarda VARIOS objetos Produto dentro de um array, do mesmo jeito
   que a Biblioteca guardava Livros no exercicio 1.
   ===================================================================== */
class Carrinho {

    constructor(cliente) {
        this.cliente = cliente;
        this.produtos = [];   // array vazio que vai receber os produtos
    }

    // -----------------------------------------------------------------
    // adicionar()
    // Antes de guardar, o preco passa pelo metodo estatico do Validador.
    // -----------------------------------------------------------------
    adicionar(produto) {

        if (Validador.precoValido(produto.preco) === false) {
            console.log(`RECUSADO: "${produto.nome}" tem preco invalido.`);
            return;
        }

        this.produtos.push(produto);
        console.log(`ADICIONADO: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    }

    // -----------------------------------------------------------------
    // remover()
    // Procura o produto pelo id e tira do array com splice().
    // -----------------------------------------------------------------
    remover(id) {

        // Variavel de controle: guarda a posicao encontrada.
        // Comeca em -1, que significa "nao achei".
        let posicao = -1;

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === id) {
                posicao = i;
                break;   // achou, nao precisa continuar procurando
            }
        }

        if (posicao === -1) {
            console.log(`Produto de id ${id} nao esta no carrinho.`);
            return;
        }

        // splice(posicao, 1) remove 1 item a partir daquela posicao.
        const removido = this.produtos[posicao];
        this.produtos.splice(posicao, 1);

        console.log(`REMOVIDO: ${removido.nome}`);
    }

    // -----------------------------------------------------------------
    // calcularTotal()
    // AQUI ESTA O POLIMORFISMO.
    // O laco chama sempre produto.precoFinal(), sem nenhum if
    // perguntando "e fisico ou digital?". Cada objeto ja sabe qual
    // desconto e qual frete usar.
    // -----------------------------------------------------------------
    calcularTotal() {

        // Acumulador: comeca em 0 e vai somando.
        let total = 0;

        this.produtos.forEach((produto) => {
            total += produto.precoFinal();
        });

        return total;
    }

    // -----------------------------------------------------------------
    // listar()
    // Mostra o carrinho item por item.
    // -----------------------------------------------------------------
    listar() {

        console.log(`\n=== CARRINHO DE ${this.cliente.toUpperCase()} ===`);

        if (this.produtos.length === 0) {
            console.log("O carrinho esta vazio.");
            return;
        }

        this.produtos.forEach((produto, index) => {
            console.log(
                `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)} ` +
                `| desconto: R$ ${produto.calcularDesconto().toFixed(2)} ` +
                `| frete: R$ ${produto.calcularFrete().toFixed(2)} ` +
                `| paga: R$ ${produto.precoFinal().toFixed(2)}`
            );
        });

        console.log(`Itens: ${this.produtos.length}`);
        console.log(`TOTAL A PAGAR: R$ ${this.calcularTotal().toFixed(2)}`);
    }
}


/* =====================================================================
   TESTANDO
   ===================================================================== */

// Criando os produtos (objetos das classes filhas).
const teclado = new ProdutoFisico(1, "Teclado Mecanico", 300, 1.2);
const monitor = new ProdutoFisico(2, "Monitor 24 polegadas", 900, 4);
const curso = new ProdutoDigital(3, "Curso de JavaScript", 200, 1500);
const ebook = new ProdutoDigital(4, "E-book de POO", 50, 12);

// Produto com preco errado, so para testar o Validador.
const mouse = new ProdutoFisico(5, "Mouse Quebrado", -10, 0.2);

console.log("--- Adicionando no carrinho ---");
const carrinho = new Carrinho("Kaina");

carrinho.adicionar(teclado);
carrinho.adicionar(monitor);
carrinho.adicionar(curso);
carrinho.adicionar(ebook);
carrinho.adicionar(mouse);   // recusado pelo Validador

carrinho.listar();

console.log("\n--- Removendo o monitor (id 2) ---");
carrinho.remover(2);
carrinho.remover(99);   // id que nao existe

carrinho.listar();

console.log("\n--- Provando o polimorfismo ---");
// Mesma chamada calcularDesconto(), resultados diferentes,
// porque cada objeto usa a versao da SUA classe.
console.log(`Desconto do teclado (fisico, 5%):  R$ ${teclado.calcularDesconto().toFixed(2)}`);
console.log(`Desconto do curso (digital, 20%):  R$ ${curso.calcularDesconto().toFixed(2)}`);
console.log(`Frete do teclado (1.2 kg):         R$ ${teclado.calcularFrete().toFixed(2)}`);
console.log(`Frete do curso (digital):          R$ ${curso.calcularFrete().toFixed(2)}`);

console.log("\n--- Provando o metodo estatico ---");
// Chamado direto na classe, sem criar objeto com new.
console.log(`Preco 300 e valido?   ${Validador.precoValido(300)}`);
console.log(`Preco -10 e valido?   ${Validador.precoValido(-10)}`);
console.log(`Preco "abc" e valido? ${Validador.precoValido("abc")}`);

console.log("\n--- Provando a relacao E UM ---");
console.log(`teclado instanceof ProdutoFisico -> ${teclado instanceof ProdutoFisico}`);
console.log(`teclado instanceof Produto       -> ${teclado instanceof Produto}`);
console.log(`curso instanceof Produto         -> ${curso instanceof Produto}`);
