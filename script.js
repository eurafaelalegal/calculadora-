let display = document.getElementById('display');

// Função para adicionar números e operadores no display
function adicionar(valor) {
  display.value += valor;
}

// Função para limpar o display
function limpar() {
  display.value = '';
}

// Função para calcular a expressão matemática
function calcular() {
  try {
    display.value = eval(display.value); // Calcula a expressão no display
  } catch (error) {
    display.value = 'Erro'; // Se houver erro na expressão, exibe "Erro"
  }
}