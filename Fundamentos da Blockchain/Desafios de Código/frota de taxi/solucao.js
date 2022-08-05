// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let lines = gets().split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  lines[0].split(' ').map(x => parseFloat(x));

const precoPorKmAlcool = (precoAlcool/rendimentoAlcool);
const precoPorKmGasolina = (precoGasolina/rendimentoGasolina);

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

print(maisEconomico);