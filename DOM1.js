// DOM = document Object Model;

const elem1 = document.getElementById('head1');

elem1.innerText = "Te ir jauns teksts";

const elem2 = document.querySelector('p');
elem2.innerText = elem1.innerText;

document.querySelector('input[type="text"]').value = elem2.innerText;


// darbs ar vairākiem elementiem

const rindkopas = document.querySelectorAll('p');

console.log(rindkopas);

for(rindkopa of rindkopas){
      let jaunsTeksts = rindkopa.innerText.toLowerCase(); 
       rindkopa.innerText = jaunsTeksts;


    //    Style atribūta maiņa
    rindkopa.onclick = (e)=>{
        e.target.style.color = "red";
        e.target.style.backgroundColor = "yellow";
    }

    rindkopa.ondblclick = (e)=>{
        e.target.style.color = "";
        e.target.style.backgroundColor = "";
    }


}

// 1. Atlasam visus elementus

const input1 = document.querySelector('input[type="text"]');
const btn2 = document.querySelector('.btn2');
const resultDiv = document.querySelector('.result');


btn2.onclick = ()=>{
    console.log(input1.value);
    resultDiv.innerText = +input1.value; //STRING 
    document.body.innerHTML += "<h2>"+input1.value+"</h2>";
    
}

input1.oninput = (e)=>{
    document.title = e.target.value;
}



