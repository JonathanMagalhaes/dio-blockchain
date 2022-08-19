// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let tempo;
let horas, minutos, segundos;

tempo = parseInt(gets());

  if (tempo >= 3600) {
    let rest = tempo % 3600;
    
    horas = parseInt((tempo - rest) / 3600);
    let rest2 = rest % 60;
    
    minutos = parseInt((rest - rest2) / 60);
    segundos = parseInt(rest2);
    console.log(horas + ":" + minutos + ":" + segundos);
  } else if (tempo >= 60) {
    let rest = tempo % 60;

    minutos = parseInt((tempo - rest) / 60);
    segundos = parseInt(rest);
    console.log("0:" + minutos + ":" + segundos);
  } else if (tempo < 60) {
    segundos = tempo;
    
    console.log("0:0:" + segundos);
  }