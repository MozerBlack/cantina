// Nome da cantina
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// Quantidade de salgados (esse valor pode mudar)
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Preço fixo de cada salgado
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);
// Atualizando a quantidade de salgados
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;
console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);
// Tentando mudar o valor de precoSalgado (isso deve dar erro)
precoSalgado = 6; // Isso deve gerar um erro porque precoSalgado é uma constante

// Teste do escopo de var e let
if (true) {
    var testeVar = "Sou var";  // var tem escopo global
    let testeLet = "Sou let";  // let tem escopo de bloco
    console.log(testeVar); // Isso vai funcionar
    console.log(testeLet); // Isso também vai funcionar
}

console.log(testeVar); // Vai funcionar, pois var é global
console.log(testeLet); // Vai gerar erro, pois testeLet tem escopo de bloco

