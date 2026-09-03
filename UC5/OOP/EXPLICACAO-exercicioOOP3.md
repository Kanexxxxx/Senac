# Explicação do Projeto Final (exercicioOOP3.js)

Este arquivo explica o projeto final da UC5 **do zero**, em português simples.
Você não precisa saber nada antes de ler. Cada conceito tem um exemplo pequeno
antes de aparecer no código de verdade.

**Como rodar o projeto:**

```powershell
node .\UC5\OOP\exercicioOOP3.js
```

(ou entre na pasta `UC5/OOP` e digite `node exercicioOOP3.js`)

---

## 1. O que o professor pediu, e onde está no código

| O professor pediu | Onde está | O que faz |
|---|---|---|
| Classe base `Produto` | linha ~24 | o "molde" de todo produto |
| Atributos privados `#id`, `#nome`, `#preco` | dentro de `Produto` | ninguém de fora altera |
| Getters para os atributos | `get id()`, `get nome()`, `get preco()` | deixam **ler** os privados |
| Método `calcularDesconto()` | dentro de `Produto` | versão padrão: devolve 0 |
| `ProdutoFisico`: adiciona peso e calcula frete | classe filha 1 | `peso` + `calcularFrete()` |
| `ProdutoFisico` sobrescreve `calcularDesconto()` | classe filha 1 | 5% de desconto |
| `ProdutoDigital`: adiciona `tamanhoArquivo` | classe filha 2 | tamanho em MB |
| `ProdutoDigital` sobrescreve `calcularDesconto()` (maior) | classe filha 2 | 20% de desconto |
| Classe `Carrinho` com adicionar e remover | classe `Carrinho` | `adicionar()` e `remover()` |
| Carrinho calcula o total com descontos polimórficos | `calcularTotal()` | soma o `precoFinal()` de cada um |
| Classe utilitária `Validador` com método `static` | classe `Validador` | `Validador.precoValido()` |

**Tudo o que ele pediu está no arquivo.** Nada faltou.

---

## 2. O que é POO (Programação Orientada a Objetos)

Antes, nos outros exercícios da UC5, você escrevia assim:

```javascript
const nome = "Teclado";
const preco = 300;
function calcularDesconto(preco) { return preco * 0.05; }
```

Os dados ficavam de um lado e as funções do outro, tudo solto.

Na POO, o dado e a função que mexe nele ficam **juntos, dentro de uma caixinha**.
Essa caixinha é o **objeto**.

> **Frase para falar com o professor:** "POO é juntar os dados e os
> comportamentos que pertencem à mesma coisa dentro de um mesmo objeto."

---

## 3. Conceito 1 — Classe e Objeto

**Classe = a forma de bolo. Objeto = o bolo.**

A forma não se come. Ela só define o formato. Com uma forma você faz vários bolos
diferentes (chocolate, cenoura), mas todos com o mesmo formato.

```javascript
class Cachorro {          // a FORMA (classe)
    latir() {
        console.log("Au au!");
    }
}

const rex = new Cachorro();    // o BOLO (objeto)
const bob = new Cachorro();    // outro objeto, mesma forma
rex.latir();                   // Au au!
```

A palavra **`new`** é o que "assa o bolo": ela cria um objeto novo a partir da classe.

No nosso projeto:

```javascript
const teclado = new ProdutoFisico(1, "Teclado Mecanico", 300, 1.2);
```

`ProdutoFisico` é a classe. `teclado` é o objeto.

---

## 4. Conceito 2 — `constructor` e `this`

O **`constructor`** é um método especial que roda **sozinho** na hora em que você
usa `new`. Ele serve para guardar os valores iniciais do objeto.

O **`this`** significa "este objeto aqui". É como apontar o dedo para si mesmo.

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;      // "o nome DESTE objeto = o nome que chegou"
        this.idade = idade;
    }
}

const ana = new Pessoa("Ana", 20);
console.log(ana.nome);   // Ana
```

Por que `this` é necessário? Porque a classe é **uma só**, mas os objetos são
**vários**. Quando você escreve `this.nome`, o JavaScript entende "o nome do
objeto que está sendo usado agora" — no `ana` é "Ana", no `bruno` seria "Bruno".

No nosso projeto:

```javascript
constructor(id, nome, preco) {
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
}
```

---

## 5. Conceito 3 — Campo privado com `#` (encapsulamento)

Um atributo normal qualquer um mexe:

```javascript
class Conta {
    constructor(saldo) { this.saldo = saldo; }
}
const c = new Conta(100);
c.saldo = 999999;         // ninguém impediu! problema.
```

Com `#` na frente, o atributo vira **privado**: só o código **de dentro da classe**
consegue mexer nele.

```javascript
class Conta {
    #saldo;                         // privado
    constructor(saldo) { this.#saldo = saldo; }
}
const c = new Conta(100);
c.#saldo = 999999;                  // ERRO! não dá.
```

Isso se chama **encapsulamento**: proteger o dado atrás de uma parede.

No nosso projeto, `#id`, `#nome` e `#preco` são privados. Assim ninguém consegue
mudar o preço de um produto "na marra" depois que ele foi criado.

> **Detalhe importante:** o `#` faz parte do nome. É `#preco`, não `preco`.
> E ele precisa ser **declarado no topo da classe** (`#preco;`) antes de ser usado.

---

## 6. Conceito 4 — Getter

Se o dado é privado, como é que a gente lê ele? Com um **getter**.

Getter é um método que finge ser um atributo: você escreve `get` na frente e
usa **sem parênteses**.

```javascript
class Conta {
    #saldo;
    constructor(saldo) { this.#saldo = saldo; }

    get saldo() {           // getter
        return this.#saldo;
    }
}

const c = new Conta(100);
console.log(c.saldo);       // 100   <- SEM parênteses
console.log(c.saldo());     // ERRO  <- não é assim
```

Repare na diferença: `#saldo` (com `#`) é o dado guardado; `saldo` (sem `#`) é a
janelinha para olhar o dado. Um deixa ler, o outro guarda.

> **Por que é melhor que deixar público?** Porque a leitura é liberada e a
> escrita não. É "olha, mas não encosta".

No nosso projeto:

```javascript
get id()    { return this.#id; }
get nome()  { return this.#nome; }
get preco() { return this.#preco; }
```

E por isso, no resto do código, aparece `produto.preco` e nunca `produto.#preco`.

---

## 7. Conceito 5 — Herança (`extends` e `super`)

Herança serve quando existe a relação **"É UM"**:

- Um cachorro **é um** animal.
- Um professor **é uma** pessoa.
- Um produto físico **é um** produto. ✅

Quando isso é verdade, a classe filha pode **herdar** tudo da classe pai e não
precisa reescrever nada.

```javascript
class Animal {
    constructor(nome) { this.nome = nome; }
    comer() { console.log(`${this.nome} está comendo.`); }
}

class Cachorro extends Animal {      // Cachorro É UM Animal
    latir() { console.log("Au au!"); }
}

const rex = new Cachorro("Rex");
rex.latir();    // método próprio
rex.comer();    // método HERDADO do pai (não foi escrito em Cachorro!)
```

### E o `super()`?

`super()` chama o **constructor do pai**. É obrigatório quando a filha tem
constructor próprio.

```javascript
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);          // manda o nome pro pai guardar
        this.raca = raca;     // só depois do super() pode usar this
    }
}
```

Por que é obrigatório? Porque o pai é quem sabe guardar os atributos dele
(no nosso caso `#id`, `#nome` e `#preco` são **privados** — a filha nem
alcançaria eles sozinha). O `super()` é o jeito de pedir "pai, guarda isso aí
pra mim".

> **Regra que cai em prova:** `super()` vem **antes** de qualquer `this`.
> Se você usar `this` antes do `super()`, o JavaScript dá erro.

No nosso projeto:

```javascript
class ProdutoFisico extends Produto {
    constructor(id, nome, preco, peso) {
        super(id, nome, preco);   // pai guarda os 3 privados
        this.peso = peso;         // filha guarda o atributo novo
    }
}
```

---

## 8. Conceito 6 — Polimorfismo por sobrescrita

**Poli** = muitas, **morfo** = formas. "Muitas formas".

É quando o **mesmo nome de método** faz **coisas diferentes**, dependendo do
objeto que chamou.

```javascript
class Animal {
    falar() { console.log("Som genérico"); }
}
class Cachorro extends Animal {
    falar() { console.log("Au au!"); }      // SOBRESCREVEU
}
class Gato extends Animal {
    falar() { console.log("Miau!"); }       // SOBRESCREVEU
}

const bichos = [new Cachorro(), new Gato()];
bichos.forEach(b => b.falar());   // Au au!  /  Miau!
```

Repare: a chamada é sempre `b.falar()`, igualzinha. Mas o resultado muda, porque
cada objeto usa a **versão da sua própria classe**. Não tem nenhum `if`
perguntando "é cachorro ou gato?".

**Sobrescrever** = a filha escreve um método com o mesmo nome do pai. A versão
da filha "ganha".

No nosso projeto, o polimorfismo aparece no `calcularTotal()`:

```javascript
calcularTotal() {
    let total = 0;
    this.produtos.forEach((produto) => {
        total += produto.precoFinal();      // sempre a MESMA chamada
    });
    return total;
}
```

O carrinho não sabe (e não precisa saber) se aquilo é físico ou digital.
Se for físico, `precoFinal()` vai usar 5% e cobrar frete. Se for digital,
vai usar 20% e frete zero. **Cada objeto sabe se virar sozinho.**

> **Esse é o ponto mais importante do trabalho.** Se o professor perguntar
> "onde está o polimorfismo?", aponte para o `forEach` do `calcularTotal()` e
> diga: "aqui, porque a chamada é sempre igual mas o cálculo muda conforme o
> tipo do produto, e eu não usei nenhum `if` para isso."

---

## 9. Conceito 7 — Método estático (`static`)

Um método normal precisa de um objeto para funcionar:

```javascript
const c = new Calculadora();
c.somar(2, 3);
```

Um método **`static`** pertence à **classe**, não ao objeto. Você chama direto,
**sem `new`**:

```javascript
class Calculadora {
    static somar(a, b) { return a + b; }
}
console.log(Calculadora.somar(2, 3));   // 5  -> sem criar objeto
```

Quando usar? Quando o método **não depende dos dados de nenhum objeto
específico**. Validar se um preço é maior que zero não precisa de um produto
existindo — é só uma continha.

(Você já usa métodos estáticos sem saber: `Math.random()` e `Math.max()` são
estáticos. Ninguém escreve `new Math()`.)

No nosso projeto:

```javascript
class Validador {
    static precoValido(preco) {
        if (isNaN(preco)) {
            return false;      // não é número
        }
        return preco > 0;      // true se for positivo
    }
}
```

E o carrinho usa assim, antes de aceitar o produto:

```javascript
if (Validador.precoValido(produto.preco) === false) {
    console.log(`RECUSADO: "${produto.nome}" tem preco invalido.`);
    return;      // sai do método, não adiciona
}
```

O `isNaN()` significa "is Not a Number" (não é um número). Se alguém mandar
`"abc"`, o `isNaN("abc")` dá `true`, então o método devolve `false` = preço inválido.

---

## 10. Passeio pelo código, bloco a bloco

### Bloco 1 — `class Produto` (o pai)

```javascript
class Produto {
    #id;
    #nome;
    #preco;
```
Declara os três campos privados.

```javascript
    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }
```
Guarda os valores quando alguém usar `new`.

```javascript
    get id()    { return this.#id; }
    get nome()  { return this.#nome; }
    get preco() { return this.#preco; }
```
As três janelinhas de leitura.

```javascript
    calcularDesconto() { return 0; }
    calcularFrete()    { return 0; }
    descricao()        { return "Produto"; }
```
As versões **padrão**. Um produto genérico não tem desconto nem frete.
As filhas vão trocar essas regras. Esses métodos existem para **garantir que
todo produto responda a essas perguntas**, mesmo que a resposta seja zero.

```javascript
    precoFinal() {
        return this.#preco - this.calcularDesconto() + this.calcularFrete();
    }
}
```
A conta final: **preço − desconto + frete**.
Repare que ele chama `this.calcularDesconto()` sem saber de qual classe o objeto é.
É aqui que o polimorfismo acontece de verdade.

### Bloco 2 — `class ProdutoFisico extends Produto`

```javascript
    constructor(id, nome, preco, peso) {
        super(id, nome, preco);
        this.peso = peso;
    }
    calcularDesconto() { return this.preco * 0.05; }
    calcularFrete()    { return this.peso * 2.50; }
    descricao()        { return `Fisico, ${this.peso} kg`; }
```

Três sobrescritas. `this.preco` (sem `#`) usa o **getter** herdado do pai —
a filha não consegue tocar em `#preco` diretamente, e não precisa.

### Bloco 3 — `class ProdutoDigital extends Produto`

```javascript
    constructor(id, nome, preco, tamanhoArquivo) {
        super(id, nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }
    calcularDesconto() { return this.preco * 0.20; }
    descricao()        { return `Digital, ${this.tamanhoArquivo} MB`; }
```

Sobrescreve o desconto (20%, maior porque não tem custo de entrega) e **não**
sobrescreve o frete — então herda o `return 0` do pai. Isso é herança
funcionando: o que não precisa mudar, a filha simplesmente aproveita.

### Bloco 4 — `class Validador`

Já explicado no item 9.

### Bloco 5 — `class Carrinho`

```javascript
    constructor(cliente) {
        this.cliente = cliente;
        this.produtos = [];
    }
```
`this.produtos = []` cria um **array vazio** que vai receber os objetos.
É a mesma ideia da `Biblioteca` que guardava `Livro` no exercício 1.

**`adicionar(produto)`** — valida com o `Validador` e, se passar, usa
`push()` (que joga no fim do array).

**`remover(id)`** — procura o produto pelo id:

```javascript
let posicao = -1;                                    // "não achei ainda"

for (let i = 0; i < this.produtos.length; i++) {
    if (this.produtos[i].id === id) {
        posicao = i;                                 // achei! guarda onde
        break;                                       // para de procurar
    }
}

if (posicao === -1) { ...avisa que não existe e sai... }

this.produtos.splice(posicao, 1);                    // remove 1 item dali
```

Aquele `-1` é a **variável de controle** (flag), a mesma técnica que você usou
no exercício de números primos. `-1` é uma posição que não existe em array
nenhum, então serve como "nada encontrado".

`splice(posicao, 1)` = "a partir da posição X, apague 1 item".

**`calcularTotal()`** — acumulador começando em 0 e somando o `precoFinal()` de
cada produto (é aqui que está o polimorfismo).

**`listar()`** — usa `forEach((produto, index) => ...)`, onde `index` é a posição
(por isso `index + 1`, para a lista começar em 1 e não em 0). O `toFixed(2)`
formata o número com 2 casas decimais (300 vira "300.00").

### Bloco 6 — Testando

Cria os produtos, adiciona no carrinho (inclusive um com preço `-10` **de
propósito**, para provar que o `Validador` funciona), lista, remove, e no final
imprime as provas de cada conceito.

---

## 11. Conferindo as contas na mão

**Teclado Mecânico** — físico, R$ 300,00, peso 1,2 kg:

| Passo | Conta | Resultado |
|---|---|---|
| Desconto (5%) | 300 × 0,05 | 15,00 |
| Frete (R$ 2,50/kg) | 1,2 × 2,50 | 3,00 |
| Preço final | 300 − 15 + 3 | **288,00** |

**Curso de JavaScript** — digital, R$ 200,00:

| Passo | Conta | Resultado |
|---|---|---|
| Desconto (20%) | 200 × 0,20 | 40,00 |
| Frete | herda 0 do pai | 0,00 |
| Preço final | 200 − 40 + 0 | **160,00** |

**Total do carrinho (4 itens):** 288 + 865 + 160 + 40 = **R$ 1.353,00**
**Depois de remover o monitor:** 288 + 160 + 40 = **R$ 488,00**

Bate exatamente com o que o programa imprime.

---

## 12. Perguntas que o professor pode fazer (com a resposta pronta)

**1. O que é uma classe e o que é um objeto?**
Classe é o molde, objeto é a coisa criada a partir do molde. `ProdutoFisico` é a
classe, `teclado` é um objeto dela.

**2. Para que serve o `constructor`?**
Ele roda automaticamente quando eu uso `new` e guarda os valores iniciais do objeto.

**3. O que é o `this`?**
É a referência ao objeto que está sendo usado naquele momento. Como a classe é uma
só e os objetos são vários, o `this` diz "os dados deste objeto aqui".

**4. Por que os atributos têm `#`?**
Para serem privados. Só o código de dentro da classe mexe neles. Assim ninguém
altera o preço de fora, por acidente ou de propósito. Isso é encapsulamento.

**5. Se são privados, como você lê o preço?**
Pelo getter `get preco()`. Ele libera a leitura mas não a escrita — por isso eu
escrevo `produto.preco`, sem parênteses.

**6. Onde está a herança?**
Em `class ProdutoFisico extends Produto` e `class ProdutoDigital extends Produto`.
Usei porque existe a relação "É UM": um produto físico é um produto.

**7. Para que serve o `super()`?**
Ele chama o constructor do pai. Preciso dele porque `#id`, `#nome` e `#preco` são
privados do pai — só o pai consegue gravá-los. E ele tem que vir antes de qualquer
`this`.

**8. O que é polimorfismo?**
É o mesmo método se comportar de formas diferentes conforme o objeto. No meu
`calcularTotal()` eu chamo sempre `produto.precoFinal()`, e o resultado muda
conforme o produto ser físico ou digital, sem nenhum `if`.

**9. Mostre a sobrescrita.**
`calcularDesconto()` existe no pai retornando 0, e é reescrito no `ProdutoFisico`
com 5% e no `ProdutoDigital` com 20%. A versão da filha ganha.

**10. Por que o digital tem desconto maior?**
Porque não tem custo de entrega. A loja economiza o frete, então pode repassar
mais desconto.

**11. O `ProdutoDigital` tem frete?**
Ele não sobrescreve `calcularFrete()`, então herda a versão do pai, que retorna 0.

**12. O que é um método estático?**
É um método que pertence à classe, não ao objeto. Chamo `Validador.precoValido(300)`
direto, sem `new`, porque validar um número não depende de nenhum produto existir.
`Math.random()` é um exemplo que a gente já usava.

**13. Onde o `Validador` é usado?**
No `adicionar()` do carrinho. Se o preço não passar, o produto é recusado e o
método sai com `return` antes do `push`.

**14. Por que a variável `posicao` começa em `-1`?**
Porque `-1` não é uma posição válida de array. É a flag de "não encontrei". Se
depois do laço ela continuar `-1`, eu sei que o id não existe no carrinho.

**15. Qual a diferença de `splice` e `slice`?**
`splice` **modifica** o array original (usei para remover). `slice` só tira uma
cópia de um pedaço e não mexe no original.

**16. Por que `precoFinal()` fica no pai e não em cada filha?**
Porque a fórmula (preço − desconto + frete) é a mesma para todos. O que muda é
quanto vale cada parte, e isso cada filha resolve sozinha. Assim eu escrevo a
fórmula uma vez só.

**17. O que o `instanceof` mostra no final?**
Que `teclado` é ao mesmo tempo um `ProdutoFisico` e um `Produto` — é a prova da
relação "É UM" da herança.

---

## 13. Erros comuns (para não escorregar)

- Escrever `produto.preco()` com parênteses. **Getter não usa parênteses.**
- Usar `this` antes do `super()` no constructor da filha. Dá erro.
- Achar que `#preco` e `preco` são a mesma coisa. `#preco` é o dado privado;
  `preco` é o getter.
- Dizer que polimorfismo é o `if`. É o contrário: polimorfismo é conseguir o
  comportamento diferente **sem** `if`.
- Chamar `new Validador()`. Não precisa — o método é `static`.

---

## 14. Cola de 1 minuto

> "Eu fiz um carrinho de compras. Tenho a classe `Produto` com `#id`, `#nome` e
> `#preco` privados e getters para ler. Dela herdam `ProdutoFisico`, que tem peso
> e cobra frete, e `ProdutoDigital`, que tem tamanho de arquivo e dá um desconto
> maior porque não tem entrega. As duas sobrescrevem `calcularDesconto()` — esse
> é o polimorfismo. O `Carrinho` guarda os produtos num array e o `calcularTotal()`
> só chama `precoFinal()` de cada um, sem perguntar o tipo. E o `Validador` tem um
> método `static` que barra preço inválido antes de adicionar."
