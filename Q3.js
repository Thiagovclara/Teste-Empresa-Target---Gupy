import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

let dado = JSON.parse(await readFile("dados.json"));

let valores = [];

function IniciaValores() {
  valores = [];
  for (var n of dado) {
    valores.push(n.valor);
  }
  return valores;
}

function CalculaMedia(vetor) {
  let soma = 0;
  let media = 0;
  let tamanho = 0;
  for (var v of vetor) {
    soma = soma + v;
    if (v !== 0) {
      tamanho++;
    }
  }
  media = soma / tamanho;
  return media.toFixed(4);
}

// O menor valor de faturamento ocorrido em um dia do mês;
function MenorValor() {
  IniciaValores();
  let valorDecres = valores.sort((i1, i2) => {
    if (i1 < i2) {
      return 1;
    } else if (i1 > i2) {
      return -1;
    } else {
      return 0;
    }
  });

  console.log("Menor valor do mês: " + valorDecres[dado.length - 1]);
}

//O maior valor de faturamento ocorrido em um dia do mês;
async function MaiorValor() {
  IniciaValores();
  let valorCresc = valores.sort((i1, i2) => {
    if (i1 < i2) {
      return -1;
    } else if (i1 > i2) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log("Maior valor do mês: " + valorCresc[dado.length - 1]);
}

//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

function DiasAcimaMedia(vetor) {
  let media = CalculaMedia(vetor);
  let numDias = 0;
  for (var i of vetor) {
    if (i > media) {
      numDias++;
    }
  }
  return console.log(
    "Número de dias com faturamento acima da média: " + numDias
  );
}
MenorValor();
MaiorValor();
DiasAcimaMedia(IniciaValores());
