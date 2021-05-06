window.addEventListener("load",myInit,false);
let szamlalo = 0;
let xe;
let xwin=0;
let owin=0;

function $(id){
    return document.getElementById(id);
}

function myInit(){
    $("1.").addEventListener("click",elso,false);
    $("2.").addEventListener("click",masodik,false);
    $("3.").addEventListener("click",harmadik,false);
    $("4.").addEventListener("click",negyedik,false);
    $("5.").addEventListener("click",otodik,false);
    $("6.").addEventListener("click",hatodik,false);
    $("7.").addEventListener("click",hetedik,false);
    $("8.").addEventListener("click",nyolcadik,false);
    $("9.").addEventListener("click",kilencedik,false);
    $("nullazo").addEventListener("click",nullaz,false);
    xe = [null,null,null,null,null,null,null,null,null]
    console.log("ittt");
}

function elso(){
    if(szamlalo%2 ==0){
        $("1.").style.backgroundImage ='url(images/O.png)';
        xe[0] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("1.").style.backgroundImage ='url(images/X.png)';
        xe[0] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("1.").removeEventListener("click",elso,false);
    szamlalo++;
    dontetlene();
}

function masodik(){
    if(szamlalo%2 ==0){
        $("2.").style.backgroundImage ='url(images/O.png)';
        xe[1] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("2.").style.backgroundImage ='url(images/X.png)';
        xe[1] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("2.").removeEventListener("click",masodik,false);
    szamlalo++;
    dontetlene();
}

function harmadik(){
    if(szamlalo%2 ==0){
        $("3.").style.backgroundImage ='url(images/O.png)';
        xe[2] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("3.").style.backgroundImage ='url(images/X.png)';
        xe[2] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("3.").removeEventListener("click",harmadik,false);
    szamlalo++;
    dontetlene();
}

function negyedik(){
    if(szamlalo%2 ==0){
        $("4.").style.backgroundImage ='url(images/O.png)';
        xe[3] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("4.").style.backgroundImage ='url(images/X.png)';
        xe[3] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("4.").removeEventListener("click",negyedik,false);
    szamlalo++;
    dontetlene();
}

function otodik(){
    if(szamlalo%2 ==0){
        $("5.").style.backgroundImage ='url(images/O.png)';
        xe[4] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("5.").style.backgroundImage ='url(images/X.png)';
        xe[4] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("5.").removeEventListener("click",otodik,false);
    szamlalo++;
    dontetlene();
}

function hatodik(){
    if(szamlalo%2 ==0){
        $("6.").style.backgroundImage ='url(images/O.png)';
        xe[5] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("6.").style.backgroundImage ='url(images/X.png)';
        xe[5] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("6.").removeEventListener("click",hatodik,false);
    szamlalo++;
    dontetlene();
}

function hetedik(){
    if(szamlalo%2 ==0){
        $("7.").style.backgroundImage ='url(images/O.png)';
        xe[6] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("7.").style.backgroundImage ='url(images/X.png)';
        xe[6] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("7.").removeEventListener("click",hetedik,false);
    szamlalo++;
    dontetlene();
}


function nyolcadik(){
    if(szamlalo%2 ==0){
        $("8.").style.backgroundImage ='url(images/O.png)';
        xe[7] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("8.").style.backgroundImage ='url(images/X.png)';
        xe[7] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("8.").removeEventListener("click",nyolcadik,false);
    szamlalo++;
    dontetlene();
}

function kilencedik(){
    if(szamlalo%2 ==0){
        $("9.").style.backgroundImage ='url(images/O.png)';
        xe[8] = false;
        $("kep").innerHTML ='<img src="images/X.png" alt="kep">';
        owine();
    }else{
        $("9.").style.backgroundImage ='url(images/X.png)';
        xe[8] = true;
        $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
        xwine();
    }
    $("9.").removeEventListener("click",kilencedik,false);
    szamlalo++;
    dontetlene();
}
function owine(){
    if((xe[1] == false && xe[2] == false && xe[0] == false)||
    (xe[3] == false && xe[6] == false && xe[0] == false)||
    (xe[4] == false && xe[8] == false && xe[0] == false)||
    (xe[4] == false && xe[1] == false && xe[7] == false)||
    (xe[2] == false && xe[5] == false && xe[8] == false)||
    (xe[4] == false && xe[2] == false && xe[6] == false)||
    (xe[4] == false && xe[3] == false && xe[5] == false)||
    (xe[6] == false && xe[7] == false && xe[8] == false)
    ){
        owin++;
        $("Owin").innerHTML=owin;
        setTimeout(win,1000);
    }
}
function xwine(){
    if((xe[1] == true && xe[2] == true && xe[0] == true)||
    (xe[3] == true && xe[6] == true && xe[0] == true)||
    (xe[4] == true && xe[8] == true && xe[0] == true)||
    (xe[4] == true && xe[1] == true && xe[7] == true)||
    (xe[2] == true && xe[5] == true && xe[8] == true)||
    (xe[4] == true && xe[2] == true && xe[6] == true)||
    (xe[4] == true && xe[3] == true && xe[5] == true)||
    (xe[6] == true && xe[7] == true && xe[8] == true)
    ){
        xwin++;
        $("Xwin").innerHTML=xwin;
        setTimeout(win,1000);
    }
}
function win(){
    $("1.").style.backgroundImage ="";
    $("2.").style.backgroundImage ="";
    $("3.").style.backgroundImage ="";
    $("4.").style.backgroundImage ="";
    $("5.").style.backgroundImage ="";
    $("6.").style.backgroundImage ="";
    $("7.").style.backgroundImage ="";
    $("8.").style.backgroundImage ="";
    $("9.").style.backgroundImage ="";
    myInit();
}

function dontetlene(){
    let dontetlen = true;
    for(let i = 0; i < xe.length; i++){
        if(xe[i] == null){
            dontetlen = false;
        }
    }
    if(dontetlen == true){
        win()
    }
}
function nullaz(){
    console.log("itt")
    szamlalo = 0;
    xwin=0;
    owin=0;
    $("kep").innerHTML ='<img src="images/O.png" alt="kep">';
    $("Owin").innerHTML=owin;
    $("Xwin").innerHTML=xwin;
    win();
}