let indice = 13;
let soma = 0;
let k = 0;

function Soma(indice, k) {
  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  console.log(soma);
}

Soma(indice, k);
