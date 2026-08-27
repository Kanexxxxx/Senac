# UC5 - Logica de Programacao

## Organizacao das pastas

- `OOP/`: exercicios de Programacao Orientada a Objetos (Aulas 1, 2 e 3).
- `programasNode/`: programas executados no terminal com Node.js.
- `JS/`: arquivos JavaScript usados pelas paginas HTML.
- `html/`: paginas dos exercicios web.
  - `07_08_2026/`: exercicios da lista de arrays (Exercicios 31_07_26.txt).
- `CSS/`: estilos das paginas.
- `IMG/`: imagens usadas nos exercicios.

## Roteiro da POO (pasta OOP)

Ordem em que o professor apresentou o conteudo:

### Aula 1 - Fundamentos, Classes, Objetos e `this`
| Arquivo | Conteudo |
|---|---|
| `comparativo.js` | Procedural x POO lado a lado. `depositar(conta, 50)` x `conta.depositar(50)` |
| `Carro.js` | Classe, objeto, atributos, metodos, `constructor` e `this` |
| `exercicioOOP1.js` | **Exercicio 1:** Gerenciamento de Biblioteca (classes `Livro` e `Biblioteca`) |

### Aula 2 - Encapsulamento, Abstracao e Prototipos
| Arquivo | Conteudo |
|---|---|
| `ContaBancaria.js` | Encapsulamento, campos privados `#`, getter |
| `ProcessadorDePagamento.js` | Abstracao: um metodo publico `processar()` escondendo 4 passos privados |
| `Pessoa.js` | Prototype Chain, `prototype` x `__proto__`, `class` como acucar sintatico |
| `exercicioOOP2.js` | **Exercicio 2:** Smart Home (classe `LampadaInteligente`, get/set validando 0 a 100) |

### Aula 3 - Heranca, Polimorfismo e Estaticos
| Arquivo | Conteudo |
|---|---|
| `Funcionario.js` | Heranca com `extends` e `super()`, relacao "E UM", `instanceof` |
| `Animal.js` | Polimorfismo por sobrescrita, `super.metodo()`, `static` (atributo e metodo) |
| `exercicioOOP3.js` | **Projeto Final:** E-commerce / Carrinho de Compras (`Produto`, `ProdutoFisico`, `ProdutoDigital`, `Carrinho`, `Validador`) |

## Como executar

Programas Node (inclui toda a pasta OOP):

```powershell
node .\UC5\OOP\Animal.js
node .\UC5\programasNode\somaDoisNumeros.js
```

Paginas web: abrir o arquivo de `html/` com a extensao Live Server do VSCode.
