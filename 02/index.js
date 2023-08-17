const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

// let contador = 0;
// let maiorCidade = "";
// for (let i = 0; i < cidades.length; i++) {
//   if (cidades[i].length > contador) {
//     maiorCidade = cidades[i];
//   }
// }
// console.log(maiorCidade);

const maiorCidadeStrings = cidades.reduce(
  (acumulador, elementoAtual, indice, array) => {
    let maiorCidade = "";
    let contador = 0;
    if (cidades.length > contador) {
      maiorCidade = elementoAtual;
    }
    return maiorCidade;
  }
);
console.log(maiorCidadeStrings);
