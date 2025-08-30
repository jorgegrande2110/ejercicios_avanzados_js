function findArrayIndex(array, text) {
  return array.indexOf(text);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos
console.log(findArrayIndex(mainCharacters, "Leia"));       // 1
console.log(findArrayIndex(mainCharacters, "Han Solo"));    // 2
console.log(findArrayIndex(mainCharacters, "Yoda"));        // -1 (no existe)
console.log(findArrayIndex(mainCharacters, "Rey"));         // 4
