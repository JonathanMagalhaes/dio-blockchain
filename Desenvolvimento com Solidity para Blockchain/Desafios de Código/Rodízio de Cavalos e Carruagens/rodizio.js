// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const quantidadeDeEntradas = parseInt(gets())
let numeroDaEntrada = 1

while (numeroDaEntrada <= quantidadeDeEntradas) {
  const placa = gets().trim();
  const numeroDeCaracteresNaPlaca = placa.length;
  const parteNumericaDaPlaca = placa.substr(4, 8);
  const parteAlfabeticadaPlaca = placa.substr(0, 3);
  const hifenDaplaca = placa[3];
  const finalDaPlaca = placa[placa.length - 1];
  const aPlacaTemOitoCaracteres = numeroDeCaracteresNaPlaca === 8;
  const osTreprimeirosCaracteresSaoLetrasMaiusculas = ChecaSeTodosSaoLetrasMaiusculas(
    parteAlfabeticadaPlaca
  );
  const osQuatroUltimosCaracteresSaoNumeros = ChecaSeTodosSaoNumeros(
    parteNumericaDaPlaca
  );
  const temHifenNoLugarCerto = hifenDaplaca === '-';
  const aPlacaEhValida =
    aPlacaTemOitoCaracteres &&
    osTreprimeirosCaracteresSaoLetrasMaiusculas &&
    osQuatroUltimosCaracteresSaoNumeros &&
    temHifenNoLugarCerto;
  
  if (aPlacaEhValida) {
    switch (Number(finalDaPlaca)) {
      case 1:
      case 2:
        console.log('SEGUNDA');
        break;
      case 3:
      case 4:
        console.log('TERCA');
        break;
      case 5:
      case 6:
        console.log('QUARTA');
        break;
      case 7:
      case 8:
        console.log('QUINTA');
        break;
      case 0:
      case 9:
        console.log('SEXTA');
        break;
    }
  } else console.log('FALHA');
  
  numeroDaEntrada += 1
}

function ChecaSeTodosSaoLetrasMaiusculas([...sentenca]) {
  let saoLetras = true;

  sentenca.map((caractere) => {
    if (!caractere.match(/[A-Z]/)) {
      saoLetras = false;
    }
  });

  return saoLetras;
}

function ChecaSeTodosSaoNumeros([...sentenca]) {
  let saoNumeros = true;

  sentenca.map((caractere) => {
    if (!caractere.match(/[0-9]/)) {
      saoNumeros = false;
    }
  });

  return saoNumeros;
}