const prompt = require(`prompt-sync`)();
console.log("Programa anos da copa do mundo.iDigite 0 para sair");
console.log("--------------------------------------------------");
do{
    const ano = Number (prompt("ano:"));
    if (ano == 0 ){
        break;

    } else if (ano == 1942 || ano == 1946){
        console.log(`nao houve copa em ${ano}(segunda guerra mundial)`);
        
    }else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`sim! ${ano} e ano de copa do mundo`);

    }else {
        console.log(`nao....${ano}nao e ano de copa do mundo!`)

    }
} while (true);