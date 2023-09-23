let heroi = "Jogador1";
let nivel;
let pontosXP = 789;

if(pontosXP < 1000){
  nivel = "Ferro";
}
else if(pontosXP > 1000 && pontosXP < 2000){
  nivel = "Bronze";
}
else if(pontosXP > 2000 && pontosXP < 5000){
  nivel = "Prata";
}
else if(pontosXP > 5000 && pontosXP < 7000){
  nivel = "Ouro";
}
else if(pontosXP > 7000 && pontosXP < 8000){
  nivel = "Platina";
}
else if(pontosXP > 8000 && pontosXP < 9000){
  nivel = "Ascendente";
}
else if(pontosXP > 9000 && pontosXP < 10000){
  nivel = "Imortal";
} else{
  nivel = "Radiante";
} 

console.log(`O Herói de nome **${heroi}**, está no nível **${nivel}**`);