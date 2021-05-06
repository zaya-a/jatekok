window.addEventListener("load",init,false);
function $(id){
    return document.getElementById(id);
}
function init(){
 $("startGomb").addEventListener("click",fugveny,false);
 $("szin1").addEventListener("click",szin1,false);
 $("szin2").addEventListener("click",szin2,false);
 $("szin3").addEventListener("click",szin3,false);
 $("szin4").addEventListener("click",szin4,false);
 $("szin5").addEventListener("click",szin5,false);
 $("szin6").addEventListener("click",szin6,false);
}
var rgbRandom= "";
let fugveny = function(){
    //randomrgb
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);

    console.log("Az rgb kód:" + red + green + blue);
    $("rgbMutato").innerHTML = "Az rgb kód: " + red+" "+ green+" "+ blue; 
    //rgb a köröknek
    for( let i = 1; i<=6; i++ ){
        let r = Math.floor(Math.random() * (255 - 0) + 0);
        let g = Math.floor(Math.random() * (255 - 0) + 0);
        let b = Math.floor(Math.random() * (255 - 0) + 0);
        
        $("szin"+i).style.backgroundColor = "rgb("+r+","+g+","+b+")";
    }
    let kivétel = Math.floor(Math.random() * (7 - 1) + 1);
    console.log("true: "+kivétel);
    rgbRandom = "rgb("+red+", "+green+", "+blue+")";
    $("szin"+kivétel).style.backgroundColor = rgbRandom;
    console.log($("szin1").style.backgroundColor);
    console.log(rgbRandom);
    
}

function szin1(){
    if($("szin1").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
function szin2(){
    if($("szin2").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
function szin3(){
    if($("szin3").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
function szin4(){
    if($("szin4").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
function szin5(){
    if($("szin5").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
function szin6(){
    if($("szin6").style.backgroundColor == rgbRandom){
        $("result").innerHTML = "Gratulálok, megtaláltad a színt!";
    }
}
