function sayHello(text,type){
    switch(type){
        case "alert":alert(text);break;
        case "prompt":prompt(text);break;
        case "confirm":confirm(text);break;
    }

}


const clickHandler = ()=>{
        sayHello("Hello","confirm");
}




// sayHello();