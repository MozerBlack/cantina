// ====================
// Passo 1 – Declarando variáveis
// ====================
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// ====================
// Passo 2 – Atualizando valores
// ====================
salgados = salgados - 5; 
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// ====================
// Passo 3 – Teste rápido
// ====================
console.log("=== Teste com const ===");
try {
  precoSalgado = 6; // Vai gerar erro porque const não pode ser alterado
} catch (erro) {
  console.error("Erro ao tentar alterar precoSalgado:", erro.message);
}

console.log("=== Teste com var e let no escopo ===");
if (true) {
  var testeVar = "Sou var"; 
  let testeLet = "Sou let"; 
  console.log("Dentro do bloco:", testeVar); 
  console.log("Dentro do bloco:", testeLet);
}

console.log("Fora do bloco:", testeVar); 
try {
  console.log("Fora do bloco:", testeLet); 
} catch (erro) {
  console.error("Erro ao acessar testeLet fora do bloco:", erro.message);
}
