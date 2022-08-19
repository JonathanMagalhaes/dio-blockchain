// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let N = parseInt(gets());
let inteirotemp = gets();
let line = inteirotemp.split(' ')
let A = parseInt(line[0]);
let B = parseInt(line[1]);

let calc = (A + B);

if (calc > N) {
    console.log("Deixa para amanha!");
} else {
    console.log("Farei hoje!");
}