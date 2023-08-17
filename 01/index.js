//const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
//crescente
// numeros.sort((a, b) => {
//   return a - b;
// });
// console.log(numeros);
//decrescente
// numeros.sort((a, b) => {
//   return b - a;
// });
// console.log(numeros);
//unicode

// numeros.sort();
// console.log(numeros);
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

//ordem alfabetica
// frutas.sort((a, b) => {
//   return a.localeCompare(b);
// });
// console.log(frutas);

//ordem alfabrtica decrescente
// frutas.sort((a, b) => {
//   return b.localeCompare(a);
// });
// console.log(frutas);

frutas.sort((a, b) => {
  return a.length - b.length;
});
console.log(frutas);
