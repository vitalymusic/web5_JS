let telefonaValidacija =  /(\+371)(\d{8})/gm;




let paroleValidacija =  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/gm;

let manaParole = "Qwerty!12345";
if(manaParole.match(paroleValidacija)){
    alert("Parole laba");
}