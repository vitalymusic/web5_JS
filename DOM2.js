// Elementu veidošana un pievienotšana ar JS

document.body.innerHTML += ''; 
//Pievieno HTML kodu

let formElem = document.createElement('form');
let formButton = document.createElement('button');
formButton.type = "submit";
formButton.innerText = "Saglabāt datus!";


for(let i=0;i<5;i++){
    let inputField = document.createElement('input');
    inputField.type="text";
    inputField.name = "field"+ i;
    inputField.classList.add('form-input');
    formElem.appendChild(inputField);
}
formElem.appendChild(formButton);

// document.body.appendChild(formElem);

// element.insertAdjacentElement(position, element)
document.querySelector('#head1').insertAdjacentElement('afterend', formElem);


// Tabulas datu izvade ar JS

// JSON objekts
let users = [
    {
        name: "Alex",
        surname: "Āboliņš",
        email: "user1@inbox.lv",
        phone: "+37123423423"
    },
    {
        name: "Jānis",
        surname: "Bērziņš",
        email: "janis.berzins@inbox.lv",
        phone: "+37126123456"
    },
    {
        name: "Līga",
        surname: "Ozoliņa",
        email: "liga.o@gmail.com",
        phone: "+37129554433"
    },
    {
        name: "Māris",
        surname: "Kļaviņš",
        email: "maris.kl@inbox.lv",
        phone: "+37128877665"
    },
    {
        name: "Anete",
        surname: "Vītola",
        email: "anete.v@apollo.lv",
        phone: "+37125443322"
    },
    {
        name: "Kārlis",
        surname: "Zariņš",
        email: "karlis.z@inbox.lv",
        phone: "+37127766554"
    },
    {
        name: "Elīna",
        surname: "Krūmiņa",
        email: "elina.krumina@inbox.lv",
        phone: "+37126655443"
    },
    {
        name: "Andris",
        surname: "Lācis",
        email: "andris.lacis@gmail.com",
        phone: "+37120099887"
    },
    {
        name: "Sanda",
        surname: "Kalniņa",
        email: "sanda.k@inbox.lv",
        phone: "+37122233445"
    },
    {
        name: "Roberts",
        surname: "Priede",
        email: "roberts.p@inbox.lv",
        phone: "+37123344556"
    }
];
