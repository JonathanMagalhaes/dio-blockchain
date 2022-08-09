let totalDeDias = parseInt(gets());
let meses = parseInt((totalDeDias%365) / 30);
let anos = parseInt(totalDeDias / 365);
let dias = parseInt((totalDeDias%365)%30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");