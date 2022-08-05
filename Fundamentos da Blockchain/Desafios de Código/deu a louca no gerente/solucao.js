// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let input = gets();
let desconto = parseInt(input) ;

input = gets();

let precoAntigo = parseInt(input);

let precoNovo = parseInt(precoAntigo * (1 - desconto / 100));    

print(precoNovo);