function cal(num){
    document.forms1.view.value = document.forms1.view.value + num;
}

function equal(){
    let ex= document.forms1.view.value ;    
    if(ex){
        document.forms1.view.value = eval(ex);
    }
}