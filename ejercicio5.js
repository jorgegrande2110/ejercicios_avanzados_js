function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1;
}

// Ejemplos de uso:
console.log(rollDice(6));  // Resultado entre 1 y 6
console.log(rollDice(20)); // Resultado entre 1 y 20
console.log(rollDice(10)); // Resultado entre 1 y 10
