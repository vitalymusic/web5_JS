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

obj1.sayHello();



