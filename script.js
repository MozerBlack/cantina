// =================================================================
// PASSO 1 – Declarando variáveis
// =================================================================

// var: escopo de função/global, pode mudar. (Usada aqui para o nome da cantina)
var nomeCantina = "Cantina da Escola";
console.log("-----------------------------------------");
console.log("PASSO 1: DECLARAÇÃO");
console.log("-----------------------------------------");
console.log("Bem-vindo à " + nomeCantina);

// let: escopo de bloco, pode mudar. Ideal para contadores.
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// const: escopo de bloco, NÃO PODE MUDAR. Ideal para valores fixos.
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// =================================================================
// PASSO 2 – Atualizando valores (Simulando a venda de 5 salgados)
// =================================================================

// Atualiza o número de salgados (let permite a alteração)
salgados = salgados - 5; 

// Calcula a receita usando o valor constante
let totalVendido = 5 * precoSalgado; 

console.log("\n-----------------------------------------");
console.log("PASSO 2: ATUALIZAÇÃO");
console.log("-----------------------------------------");
console.log("Venda de 5 salgados realizada.");
console.log("Agora restam " + salgados + " salgados."); // Resultado: 15
console.log("A cantina vendeu R$" + totalVendido);      // Resultado: R$25

// =================================================================
// PASSO 3 – Teste rápido (Testando const e escopo)
// =================================================================

console.log("\n-----------------------------------------");
console.log("PASSO 3: TESTES DE REGRAS");
console.log("-----------------------------------------");

// -----------------------------------------------------------------
// Teste 1: O que acontece se tentar mudar o valor de precoSalgado?
// -----------------------------------------------------------------
console.log("TESTE 1: Tentando mudar o valor de precoSalgado...");
/*
// DESCOMENTE AS DUAS LINHAS ABAIXO NO SEU AMBIENTE DE TESTE PARA VER O ERRO!
precoSalgado = 6; 
console.log("Preço alterado para R$" + precoSalgado); 
// Resultado: TypeError: Assignment to constant variable.
*/
console.log("O código dá ERRO de tipo (TypeError), pois 'const' não permite reatribuição.");


// -----------------------------------------------------------------
// Teste 2: O que acontece com 'var' e 'let' dentro de um bloco {}?
// -----------------------------------------------------------------
console.log("\nTESTE 2: Testando escopo de 'var' e 'let' em um bloco 'if':");

if (true) {
    var testeVar = "Sou var dentro do if";  // var tem escopo de função/global (Vaza)
    let testeLet = "Sou let dentro do if";  // let tem escopo de bloco (Fica restrito)

    console.log("DENTRO do bloco: testeVar = " + testeVar); // FUNCIONA
    console.log("DENTRO do bloco: testeLet = " + testeLet); // FUNCIONA
}

console.log("\nFORA do bloco:");
console.log("Acesso a 'var': " + testeVar); // FUNCIONA: var "vaza" para fora do bloco.

/*
// DESCOMENTE A LINHA ABAIXO NO SEU AMBIENTE DE TESTE PARA VER O ERRO!
console.log("Acesso a 'let': " + testeLet); 
// Resultado: ReferenceError: testeLet is not defined
*/
console.log("Acesso a 'let': O código dá ERRO de referência (ReferenceError), pois 'let' só existe DENTRO do bloco 'if'.");