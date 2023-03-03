//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada
//estado teve dentro do valor total mensal da distribuidora.

import { promises as fs } from "fs";

const { readFile } = fs;

let dadoEstado = JSON.parse(await readFile("dadosEstados.json"));

let valores = [];

function FaturamentoEstado() {
  valores = [];
  let soma = 0;
  for (var n of dadoEstado) {
    soma = soma + n.Faturamento_Mes;
  }
  //Calcular a porcentagem.
  console.log("Faturamento por estado:\n");
  for (var n of dadoEstado) {
    console.log(
      `Estado: ${n.Estado} - Faturamento Percentual: ${(
        (n.Faturamento_Mes / soma) *
        100
      ).toFixed(4)}%`
    );
  }
}

FaturamentoEstado();
