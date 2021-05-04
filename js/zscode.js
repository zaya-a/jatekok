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

/*
TODO
scoreboard
difficulty
hud
keyboard control
*/

let player = 3;
let delay=1500;

function leftmove(){
    if(player > 1){
        $("p"+(player)).style.backgroundColor="black";
        $("p"+(--player)).style.backgroundColor="white";
    }
}

function rightmove(){
    if(player < 5){
        $("p"+(player)).style.backgroundColor="black";
        $("p"+(++player)).style.backgroundColor="white";
    }
}

function mainGame(){
    console.log("komo is sus, m8 be impasta :)");
    delay=1500;
    redbox();
}

function redbox(){
    for(let tempx = 1; tempx < 6; tempx++){
        for(let tempy = 1; tempy < 6; tempy++){
            $("x"+tempx+"y"+tempy).style.backgroundColor="black";
        }
    }
    let col = Math.floor(Math.random()*5+1);
    let row = 1;

    $("x"+row+"y"+col).style.backgroundColor="red";

   nextredbox();

   setTimeout(function(){
       if(player==col){
            delay=delay*0.85;
            redbox();
       }else{
           window.alert("Vége");
       }
   }, delay*5);

   function nextredbox(){
       if(row < 4){
            setTimeout(function(){
                $("x"+row+"y"+col).style.backgroundColor="black";
                $("x"+ (++row) + "y" + col).style.backgroundColor="red";
                nextredbox();
            },delay);
        }else{
            setTimeout(function(){
                $("x"+row+"y"+col).style.backgroundColor="black";
                $("x"+ (++row) + "y" + col).style.backgroundColor="red";
            },delay);
        }
   }
}