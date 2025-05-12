// Função calculadora: realiza operações básicas (+, -, *, /)
function calc(a, b, op) {
  if (op === '+') {
    return a + b;
  } else if (op === '-') {
    return a - b;
  } else if (op === '*') {
    return a * b;
  } else if (op === '/') {
    if (b === 0) {
      return 'Erro: divisão por zero';
    }
    return a / b;
  } else {
    return 'Operação inválida';
  }
}

// Exemplos de uso
console.log(calc(8, 2, '+')); // 10
console.log(calc(8, 2, '-')); // 6
console.log(calc(8, 2, '*')); // 16
console.log(calc(8, 2, '/')); // 4
