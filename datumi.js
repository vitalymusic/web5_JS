

let paslaik = new Date();
paslaikMilisekundes = Date.now();
pec12StundamMiliekundes = paslaikMilisekundes+ (1000*3600*12);
let pec12stundam = new Date(pec12StundamMiliekundes);


document.body.innerHTML+=`
Pašlaik ir: ${paslaik.getHours()<10?"0"+paslaik.getHours():paslaik.getHours()}:${paslaik.getMinutes()<10?"0"+paslaik.getMinutes():paslaik.getMinutes()} <br>
Pēc 12 stundām būs: ${pec12stundam.getHours()}:${pec12stundam.getMinutes()}

`;

console.log(paslaik.getMonth()+1);