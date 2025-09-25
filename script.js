// Função para mostrar mensagens na tela
function mostrar(msg) {
  const saida = document.getElementById("saida");
  const div = document.createElement("div");
  div.className = "mensagem";
  div.textContent = msg;
  saida.appendChild(div);
}

// Resultados fixos da atividade
mostrar("Bem-vindo à Cantina da Escola");
mostrar("Temos 20 salgados disponíveis.");
mostrar("Cada salgado custa R$5");
mostrar("Agora restam 15 salgados.");
mostrar("A cantina vendeu R$25");
mostrar("🔹 Testando const: não é possível alterar o valor de precoSalgado.");
mostrar("Se tentarmos: precoSalgado = 6; → dá erro no código.");
mostrar("Dentro do bloco: Sou var (visível fora do bloco)");
mostrar("Dentro do bloco: Sou let (apenas dentro do bloco)");
mostrar("Fora do bloco: Sou var (visível fora do bloco)");
mostrar("Fora do bloco: ERRO → 'testeLet' não está definido.");
