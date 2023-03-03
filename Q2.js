//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma
//dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na
//linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne
//uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente
//definido no código;

let seq = [0, 1];

function PertenceFib(numero) {
  while (seq[seq.length - 1] < numero) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  console.log(seq);

  if (seq.find((item) => item == numero)) {
    return console.log("O número pertence à sequência");
  } else {
    return console.log("O número não pertence à sequência");
  }
}

PertenceFib(parseInt(process.argv[2]));
