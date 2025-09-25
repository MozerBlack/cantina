// Variáveis globais para rastrear o estado.
var nomeCantina;
let salgados;
const precoSalgado = 5; 

function atualizarInterface() {
    // Atualiza os elementos HTML com os valores atuais das variáveis
    document.getElementById('nome-cantina').textContent = nomeCantina || "Não Declarado";
    document.getElementById('salgados-disponiveis').textContent = salgados !== undefined ? salgados : "Não Declarado";
    document.getElementById('preco-salgado').textContent = "R$ " + precoSalgado;
}

function passo1Declarar() {
    // PASSO 1 – Declarando variáveis
    
    // var: escopo de função/global.
    nomeCantina = "Cantina da Escola"; 
    
    // let: escopo de bloco, mutável (ideal para o estoque).
    salgados = 20;

    // const: escopo de bloco, IMUTÁVEL (preço fixo).

    atualizarInterface();
    document.getElementById('faturamento').textContent = "R$ 0";
    document.getElementById('mensagem-interacao').textContent = 
        `✅ Passo 1 Concluído! Variáveis declaradas. (var: ${nomeCantina}, let: ${salgados}, const: R$ ${precoSalgado})`;
    
    // Habilita os botões de ação
    document.getElementById('btn-passo2').disabled = false;
    document.getElementById('btn-passo3-const').disabled = false;
    document.getElementById('btn-passo3-escopo').disabled = false;
    console.log("--- PASSO 1: Variáveis Declaradas ---");
    console.log("var nomeCantina:", nomeCantina);
    console.log("let salgados:", salgados);
    console.log("const precoSalgado:", precoSalgado);
}

function passo2Atualizar() {
    // Verifica se as variáveis foram inicializadas
    if (salgados === undefined) {
        document.getElementById('mensagem-interacao').textContent = "⚠️ Por favor, execute o 'Passo 1' primeiro.";
        return;
    }
    
    const vendidos = 5;
    
    // PASSO 2 – Atualizando valores
    // let permite a atualização do valor.
    salgados = salgados - vendidos;
    
    // Calcula o total usando a constante.
    let totalVendido = vendidos * precoSalgado; 

    atualizarInterface();
    document.getElementById('faturamento').textContent = "R$ " + totalVendido;
    document.getElementById('mensagem-interacao').textContent = 
        `✅ Passo 2 Concluído! ${vendidos} salgados vendidos. Estoque restante: ${salgados}. Faturamento: R$ ${totalVendido}.`;
    
    console.log("--- PASSO 2: Venda Realizada ---");
    console.log("Novo estoque (let salgados):", salgados);
    console.log("Faturamento (let totalVendido): R$", totalVendido);
}

function passo3TestarConst() {
    // PASSO 3a – Teste rápido: Tentando mudar o valor de precoSalgado (const)
    
    let mensagem;
    
    try {
        // A linha 'precoSalgado = 6;' está comentada. Se fosse ativada, geraria um TypeError.
        // precoSalgado = 6; 
        mensagem = "❌ ERRO: 'const' não pode ser reatribuído! Se a linha estivesse ativa, daria 'TypeError'. O preço permanece R$ 5.";
        console.error("--- PASSO 3a: Teste de const ---");
        console.error("Tentativa de mudar precoSalgado falhou. Tipo de erro: TypeError: Assignment to constant variable.");
    } catch (e) {
        mensagem = `❌ ERRO: ${e.name}! O valor de 'const' não pode ser alterado. Preço permanece R$ ${precoSalgado}.`;
    }
    
    document.getElementById('mensagem-interacao').textContent = mensagem;
    atualizarInterface();
}

function passo3TestarEscopo() {
    // PASSO 3b – Teste rápido: Escopo de var vs let
    
    let resultadoVar = "";
    let resultadoLet = "";

    console.log("--- PASSO 3b: Teste de Escopo (var vs let) ---");
    console.log("-----------------------------------------------");

    if (true) {
        var testeVar = "Sou var dentro do if";  
        let testeLet = "Sou let dentro do if";  
        
        console.log("1. DENTRO DO BLOCO:");
        console.log("   testeVar (var):", testeVar); // Funciona
        console.log("   testeLet (let):", testeLet); // Funciona
        resultadoVar = "var funciona DENTRO";
        resultadoLet = "let funciona DENTRO";
    }
    
    console.log("\n2. FORA DO BLOCO:");
    
    // Teste de VAR:
    console.log("   testeVar (var):", testeVar); // FUNCIONA! var "vaza" para fora do bloco.
    resultadoVar += " e VAZA para FORA.";

    // Teste de LET:
    try {
        // Descomente a linha abaixo no console para ver o erro.
        // console.log("   testeLet (let):", testeLet); 
        console.error("   testeLet (let): ReferenceError. 'let' é restrito ao bloco e não pode ser acessado aqui.");
        resultadoLet += " e GERA ERRO FORA (ReferenceError).";
    } catch (e) {
        resultadoLet += " e GERA ERRO FORA (ReferenceError).";
    }

    document.getElementById('mensagem-interacao').innerHTML = 
        `✅ Passo 3b Concluído! Veja o **Console (F12)** para detalhes:<br>
        - **var**: ${resultadoVar}<br>
        - **let**: ${resultadoLet}`;
}

// Inicializa a interface ao carregar a página
atualizarInterface();