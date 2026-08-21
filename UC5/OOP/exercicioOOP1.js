/* =====================================================================
   EXERCICIO OOP 1 - Livro e Biblioteca

   Duas classes trabalhando juntas:
   - Livro:      representa UM livro e sabe controlar sua propria leitura
   - Biblioteca: guarda VARIOS objetos Livro dentro de um array
   ===================================================================== */

// ---------------------------------------------------------------------
// CLASSE LIVRO
// Uma classe e um MOLDE. Ela sozinha nao e um livro,
// ela ensina o JavaScript a fabricar livros.
// ---------------------------------------------------------------------
class Livro {

    // O constructor roda sozinho quando escrevemos "new Livro(...)".
    // "paginasLidas = 0" e um valor padrao: se ninguem informar,
    // o livro comeca com 0 paginas lidas.
    constructor(titulo, autor, paginas, paginasLidas = 0) {
        this.titulo = titulo;             // "this" = este objeto que esta sendo criado
        this.autor = autor;
        this.paginas = paginas;           // total de paginas do livro
        this.paginasLidas = paginasLidas; // quanto ja foi lido
    }

    // Metodo para registrar quantas paginas foram lidas agora.
    ler(paginas) {

        // "+=" soma no que ja existia. E o mesmo que:
        // this.paginasLidas = this.paginasLidas + paginas;
        this.paginasLidas += paginas;

        // Trava de seguranca: nao da para ler mais paginas
        // do que o livro tem. Se passou, corta no total.
        if (this.paginasLidas > this.paginas) {
            this.paginasLidas = this.paginas;
        }

        console.log(`Voce leu +${paginas} paginas de "${this.titulo}".`);
    }

    // Metodo que calcula a porcentagem lida.
    // Ele nao imprime nada: ele DEVOLVE (return) o texto pronto,
    // para quem chamou decidir o que fazer com o resultado.
    progresso() {
        // regra de tres: parte / total * 100
        // toFixed(1) deixa so 1 casa decimal (ex: 60.0)
        const porcentagem = ((this.paginasLidas / this.paginas) * 100).toFixed(1);
        return `${porcentagem}%`;
    }
}

// ---------------------------------------------------------------------
// CLASSE BIBLIOTECA
// Ela nao guarda titulo/autor: ela guarda OBJETOS Livro inteiros
// dentro de um array. Cada posicao do array e um livro completo.
// ---------------------------------------------------------------------
class Biblioteca {

    constructor(nome) {
        this.nome = nome;
        this.livros = [];   // array vazio que vai receber os objetos Livro
    }

    // Recebe um objeto Livro ja pronto e joga no final do array.
    // push() e o mesmo que voce usou na lista de compras.
    adicionarLivro(livro) {
        this.livros.push(livro);

        // livro.titulo funciona porque "livro" e um objeto da classe Livro,
        // entao ele carrega os proprios atributos junto.
        console.log(`LIVRO ADICIONADO: "${livro.titulo}" a biblioteca ${this.nome}.`);
    }

    // Percorre o array e mostra cada livro com seu progresso.
    listarLivros() {

        // "\n" pula uma linha antes de imprimir o titulo.
        // toUpperCase() deixa o nome todo em MAIUSCULO.
        console.log(`\n=== LISTA DE LIVROS: ${this.nome.toUpperCase()} ===`);

        // Se o array estiver vazio, length vale 0.
        if (this.livros.length === 0) {
            console.log("A biblioteca esta vazia.");
            return;   // encerra o metodo, nao tem o que listar
        }

        // forEach percorre o array item por item.
        // Ele entrega 2 coisas: o item da vez (livro) e a posicao (index).
        // Como o index comeca em 0, somamos +1 para exibir 1, 2, 3...
        this.livros.forEach((livro, index) => {
            console.log(
                `${index + 1}. "${livro.titulo}" (${livro.autor}) ` +
                `- Progresso: ${livro.progresso()} [${livro.paginasLidas}/${livro.paginas} pags]`
            );
        });
    }
}

/* =====================================================================
   TESTANDO
   ===================================================================== */

// Cria a biblioteca (um objeto da classe Biblioteca).
const minhaBiblioteca = new Biblioteca("Senac");

// Cria os livros (objetos da classe Livro).
// O livro2 ja nasce com 50 paginas lidas (o 4o argumento).
const livro1 = new Livro("Livro 1", "Miguel", 500);
const livro2 = new Livro("Livro 2", "Joao", 300, 50);
const livro3 = new Livro("Livro 3", "Ricardo", 464);

console.log("--- Adicionando Livros ---");
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);

console.log("\n--- Simular leitura ---");
livro1.ler(300);   // 0 + 300 = 300 de 500
livro2.ler(100);   // 50 + 100 = 150 de 300
livro3.ler(10);    // 0 + 10 = 10 de 464

console.log("\n--- Status da leitura ---");
minhaBiblioteca.listarLivros();
