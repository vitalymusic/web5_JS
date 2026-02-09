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
let data = [
    {
        name:"alex",
        surname:"Aboliņš",
        email:"user1@inbox.lv",
        phone:"+37123423423"
    },
]
