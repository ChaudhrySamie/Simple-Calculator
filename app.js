function digit(a){
    document.getElementById("solve").value +=a;
}

function eq(){
    var a=document.getElementById("solve");
    a.value=eval(a.value)
}

function clearAll(){
    var a=document.getElementById("solve");
    a.value=""
}
function removeOneByOne(){
    var a=document.getElementById("solve");
    var b=a.value;
    b=b.slice(0,-1);
    a.value=b
}
