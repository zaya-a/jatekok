window.addEventListener("load", init, false);

function $(id){
    return document.getElementById(id);
}

function init(){
    $("p3").style.backgroundColor="white";
    let balragomb=$("leftmove");
    let jobbragomb=$("rightmove");
    let startgomb=$("startbtn");
    balragomb.addEventListener("click", leftmove, false);
    jobbragomb.addEventListener("click", rightmove, false);
    startgomb.addEventListener("click", mainGame, false);
}

let selected = 3;

function leftmove(){
    if(selected > 1){
        $("p"+(selected)).style.backgroundColor="black";
        $("p"+(--selected)).style.backgroundColor="white";
    }
}

function rightmove(){
    if(selected < 5){
        $("p"+(selected)).style.backgroundColor="black";
        $("p"+(++selected)).style.backgroundColor="white";
    }
}

function mainGame(){
    console.log("komo is sus, m8 be impasta");
}

