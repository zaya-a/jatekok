window.addEventListener("load",myInit,false);
let szamlalo = 0;

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
}

function elso(){
    if(szamlalo%2 ==0){
        $("1.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("1.").style.backgroundImage ='url(images/X.png)';
    }
    $("1.").removeEventListener("click",elso,false);
    szamlalo++;
    if($("2.").value == 'url(images/O.png)'){
        $("nyertes").value = "yee";
        console.log("yee");
    }
}

function masodik(){
    if(szamlalo%2 ==0){
        $("2.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("2.").style.backgroundImage ='url(images/X.png)';
    }
    $("2.").removeEventListener("click",masodik,false);
    szamlalo++;
}

function harmadik(){
    if(szamlalo%2 ==0){
        $("3.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("3.").style.backgroundImage ='url(images/X.png)';
    }
    $("3.").removeEventListener("click",harmadik,false);
    szamlalo++;
}

function negyedik(){
    if(szamlalo%2 ==0){
        $("4.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("4.").style.backgroundImage ='url(images/X.png)';
    }
    $("4.").removeEventListener("click",negyedik,false);
    szamlalo++;
}

function otodik(){
    if(szamlalo%2 ==0){
        $("5.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("5.").style.backgroundImage ='url(images/X.png)';
    }
    $("5.").removeEventListener("click",otodik,false);
    szamlalo++;
}

function hatodik(){
    if(szamlalo%2 ==0){
        $("6.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("6.").style.backgroundImage ='url(images/X.png)';
    }
    $("6.").removeEventListener("click",hatodik,false);
    szamlalo++;
}

function hetedik(){
    if(szamlalo%2 ==0){
        $("7.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("7.").style.backgroundImage ='url(images/X.png)';
    }
    $("7.").removeEventListener("click",hetedik,false);
    szamlalo++;
}


function nyolcadik(){
    if(szamlalo%2 ==0){
        $("8.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("8.").style.backgroundImage ='url(images/X.png)';
    }
    $("8.").removeEventListener("click",nyolcadik,false);
    szamlalo++;
}

function kilencedik(){
    if(szamlalo%2 ==0){
        $("9.").style.backgroundImage ='url(images/O.png)';
    }else{
        $("9.").style.backgroundImage ='url(images/X.png)';
    }
    $("9.").removeEventListener("click",kilencedik,false);
    szamlalo++;
}