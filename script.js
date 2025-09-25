function mostrar(msg) {
  const saida = document.getElementById("saida");
  const div = document.createElement("div");
  div.className = "mensagem";
  div.textContent = msg;
  saida.appendChild(div);
}

// Passo 1
var nomeCantina = "Cantina da Escola";
mostrar("Bem-vindo à " + nomeCantina);

let salgados = 20;
mostrar("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
mostrar("Cada salgado custa R$" + precoSalgado);

function mostrar(msg) {
  const saida = document.getElementById("saida");
  const div = document.createElement("div");
  div.className = "mensagem";
  div.textContent = msg;
  saida.appendChild(div);
}

// Valores iniciais
let salgados = 20;
const precoSalgado = 5;

// Atualização
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

mostrar("Agora restam " + salgados + " salgados.");
mostrar("A cantina vendeu R$" + totalVendido);

function mostrar(msg) {
  const saida = document.getElementById("saida");
  const div = document.createElement("div");
  div.className = "mensagem";
  div.textContent = msg;
  saida.appendChild(div);
}

// Teste com const
mostrar("🔹 Testando const: não é possível alterar o valor de precoSalgado.");
mostrar("Se tentarmos: precoSalgado = 6; → dá erro no código.");

// Teste var e let
if (true) {
  var testeVar = "Sou var (visível fora do bloco)";
  let testeLet = "Sou let (apenas dentro do bloco)";
  mostrar("Dentro do bloco: " + testeVar);
  mostrar("Dentro do bloco: " + testeLet);
}

mostrar("Fora do bloco: " + testeVar);
try {
  mostrar("Fora do bloco: " + testeLet);
} catch (e) {
  mostrar("Fora do bloco: ERRO → 'testeLet' não está definido.");
}
