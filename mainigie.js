// datu tipi

//var 

let skaitlis1;
let pirmaisSkaitlis;

const pvn = 0.21 //float (Double);

skaitlis1 = 2026; //Number

let bool = true; //Boolean

let str1 = "<h1>Tas ir teksts</h1>";

console.log(skaitlis1);

let arr1 = [
    pvn,skaitlis1,str1,[]
];
let obj1 = {
    name:"BMW",
    color:"#fff",
    price:7500,
    sayHello:()=>{
        alert("Hello!");
    }
}

document.body.innerHTML += arr1[1];
document.body.innerHTML += obj1.price;

// obj1.sayHello();



// Matematiskie operatori

// + - / * % () ^ < > <= >= == === <== >==
// = += -= *= /=  %/ 

let summa  = 1.45*4*20/5;
 summa += 100;

//  alert(summa);

 //document.body.innerHTML = (3>1);
 document.body.innerHTML = summa.toFixed(2);
 document.body.innerHTML = typeof(summa.toString());

//  Stingri tipizēts JS = TypeScript

// skaitļu ģenerātors no 0-255

let generate1 = Math.random()*255;
//document.body.innerHTML = generate1.toFixed();
document.body.innerHTML = Math.trunc(generate1);





setInterval(()=>{


    // RGB
    let background = {
    red: (Math.random()*255).toFixed(),
    green: (Math.random()*255).toFixed(),
    blue: (Math.random()*255).toFixed(),

}
    document.body.style.background = `rgb(${background.red},${background.green},${background.blue})`;  
    
    
},1000)






