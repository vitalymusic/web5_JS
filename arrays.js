let arr1 = [];


arr1.push("jauns elements1");
arr1.push("jauns elements2");
arr1.push("jauns elements3");
arr1.push("jauns elements4");

arr1.pop();

arr1.unshift("pvisam jauns elements");
arr1.shift();


// result = arr1.map((item)=>{
//     return item.toUpperCase();
// })
// result = arr1.forEach((item)=>{
//     return item.toUpperCase();
// })


result = arr1.filter((item)=>{
    if(item == "jauns elements"){
            return item;
    }
})
const numbers = [1,3,2,12,11,20];
result = numbers.sort((a,b)=>{
    return a-b;
});
result = arr1.concat(numbers);

let teksts = "Pirmais, Otrais, trešais";
result = teksts.split(", ");

let [pirm,,otrs] = result;


