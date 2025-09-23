// Passo 1 - Declarando variáveis
console.log("--- Passo 1: Declarando variáveis ---");

var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

console.log("");

// Passo 2 - Atualizando valores
console.log("--- Passo 2: Atualizando valores ---");

// Imagine que 5 salgados foram vendidos
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

console.log("");

// Passo 3 - Teste rápido
console.log("--- Passo 3: Teste rápido ---");

// O que acontece se tentar mudar o valor de precoSalgado (const)?
try {
    console.log("Tentando mudar o valor de precoSalgado...");
    precoSalgado = 6;
} catch (e) {
    console.error("ERRO: " + e.message + " - 'const' não pode ser alterada.");
}

console.log("");

// O que acontece com o escopo de var e let?
console.log("--- Testando escopo de var e let ---");
if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";
    console.log("Dentro do bloco:");
    console.log("var:", testeVar); // Funciona
    console.log("let:", testeLet); // Funciona
}

console.log("Fora do bloco:");
console.log("var:", testeVar); // Funciona (var tem escopo de função/global)
try {
    console.log("let:", testeLet); // Gera erro (let tem escopo de bloco)
} catch (e) {
    console.error("ERRO: " + e.message + " - 'let' não pode ser acessada fora do bloco onde foi declarada.");
}