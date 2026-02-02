function sayHello(text,type){
    text = text.toUpperCase();

    switch(type){
        case "alert":alert(text);break;
        case "prompt":prompt(text);break;
        case "confirm":confirm(text);break;
    }

    return 2+2;

    

}


const clickHandler = ()=>{
      document.body.innerHTML+= `<h1>Funkcijas rezultāts ir: ${sayHello("Hello","confirm")} </h1>`
}


const counter = ()=>{
        

}




// sayHello();