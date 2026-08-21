const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();

console.log("======================================");
console.log("     🤖 SISTEMA ULTRA PROFISSIONAL");
console.log("======================================\n");

console.log("Inicializando sistema...");
console.log("Carregando inteligência...");
console.log("Procurando inteligência...");
console.log("⚠️ Inteligência não encontrada.\n");

rl.question("Digite seu nome: ", (nome) => {

  console.log(`\nOlá, ${nome}! 👋`);
  console.log("Analisando seu nível de inteligência...");

  setTimeout(() => {
    console.log("\n🔎 Resultado da análise:");
    console.log("██████████████████████████ 100%");
  }, 1000);

  setTimeout(() => {
    console.log("\n📊 Relatório:");
    console.log("• Inteligência:  ███████░░░ 73%");
    console.log("• Sorte:         ███░░░░░░░ 31%");
    console.log("• Sono:          ██████████ 99%");
    console.log("• Vontade de trabalhar:  █░░░░░░░░░ 4%");
    console.log("• Capacidade de fazer merda: ∞");
  }, 2000);

  setTimeout(() => {
    console.log("\n🚨 ATENÇÃO 🚨");
    console.log("O sistema detectou que você está");
    console.log("procrastinando em vez de programar.");
  }, 3500);

  setTimeout(() => {
    console.log("\n💡 Sugestão do sistema:");
    console.log('"Vai fazer alguma coisa útil, criatura."');
  }, 5000);

  setTimeout(() => {
    console.log("\n======================================");
    console.log("   Programa encerrado com sucesso.");
    console.log("   Motivo: o desenvolvedor cansou.");
    console.log("======================================");

    rl.close();
  }, 6500);
});