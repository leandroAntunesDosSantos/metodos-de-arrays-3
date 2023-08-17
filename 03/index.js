const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

// numeros.sort((a, b) => {
//   return a - b;
// });

const filtro = numeros.reduce((acumulador, elementoAtual, indice, array) => {
  let maior = acumulador;

  if (elementoAtual > maior) {
    maior = elementoAtual;
  }
  return maior;
});
console.log(filtro);
