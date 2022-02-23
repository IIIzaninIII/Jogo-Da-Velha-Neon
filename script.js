var plaX = 0;
var plaO = 0;
var empate = 0;
var n=0;
var vez;
var l1;
var l2;
var l3;
var l4;
var l5;
var l6;
var l7;
var l8;
var l9;
var res=0;
var rev;
var x1;
var x2;
var x3;
var x4;
var x5;
var x6;
var x7;
var x8;
var x9;
var i=0;
 



function win(){
    if(l1=='X' && l2=='X' && l3 == 'X'){
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("p2").classList.remove("changeColor");
        document.getElementById("p2").classList.add("vermelho");
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l4=='X' && l5=='X' && l6 == 'X'){
        document.getElementById("p4").classList.remove("changeColor");
        document.getElementById("p4").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p6").classList.remove("changeColor");
        document.getElementById("p6").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l7=='X' && l8=='X' && l9 == 'X'){
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("p8").classList.remove("changeColor");
        document.getElementById("p8").classList.add("vermelho");
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l1=='X' && l4=='X' && l7 == 'X'){
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("p4").classList.remove("changeColor");
        document.getElementById("p4").classList.add("vermelho");
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l2=='X' && l5=='X' && l8 == 'X'){
        document.getElementById("p2").classList.remove("changeColor");
        document.getElementById("p2").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p8").classList.remove("changeColor");
        document.getElementById("p8").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l3=='X' && l6=='X' && l9 == 'X'){
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("p6").classList.remove("changeColor");
        document.getElementById("p6").classList.add("vermelho");
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l7=='X' && l5=='X' && l3 == 'X'){
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }
    if(l9=='X' && l5=='X' && l1 == 'X'){
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("X Venceu");
        res=1;
        plaX++;
        document.getElementById("pxp").innerText = ("X = "+plaX);
    }  
    
    if(l1=='O' && l2=='O' && l3 == 'O'){
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("p2").classList.remove("changeColor");
        document.getElementById("p2").classList.add("vermelho");
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l4=='O' && l5=='O' && l6 == 'O'){
        document.getElementById("p4").classList.remove("changeColor");
        document.getElementById("p4").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p6").classList.remove("changeColor");
        document.getElementById("p6").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l7=='O' && l8=='O' && l9 == 'O'){
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("p8").classList.remove("changeColor");
        document.getElementById("p8").classList.add("vermelho");
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l1=='O' && l4=='O' && l7 == 'O'){
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("p4").classList.remove("changeColor");
        document.getElementById("p4").classList.add("vermelho");
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l2=='O' && l5=='O' && l8 == 'O'){
        document.getElementById("p2").classList.remove("changeColor");
        document.getElementById("p2").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p8").classList.remove("changeColor");
        document.getElementById("p8").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l3=='O' && l6=='O' && l9 == 'O'){
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("p6").classList.remove("changeColor");
        document.getElementById("p6").classList.add("vermelho");
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l7=='O' && l5=='O' && l3 == 'O'){
        document.getElementById("p7").classList.remove("changeColor");
        document.getElementById("p7").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p3").classList.remove("changeColor");
        document.getElementById("p3").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }
    if(l9=='O' && l5=='O' && l1 == 'O'){
        document.getElementById("p9").classList.remove("changeColor");
        document.getElementById("p9").classList.add("vermelho");
        document.getElementById("p5").classList.remove("changeColor");
        document.getElementById("p5").classList.add("vermelho");
        document.getElementById("p1").classList.remove("changeColor");
        document.getElementById("p1").classList.add("vermelho");
        document.getElementById("vez1").innerText = ("O Venceu");
        res=1;
        plaO++;
        document.getElementById("pop").innerText = ("O = "+plaO);
    }  
}




function plr(){

    var teste = n%2;

    if(teste==0){
        vez = 'X';
    }
    else{
        vez = 'O';
    }
    return vez;
}

function inverso(){
    var teste = n%2;

    if(teste==0){
        rev = 'O';
    }
    else{
        rev = 'X';
    }
    return rev;
}






function m1(){

    var chk = document.getElementById("p1").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l1=plr();
        x1=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x1);
        document.getElementById("p1").innerText = l1;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m2(){
    var chk = document.getElementById("p2").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l2=plr();
        x2=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x2);
        document.getElementById("p2").innerText = l2;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m3(){
    var chk = document.getElementById("p3").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l3=plr();
        x3=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x3);
        document.getElementById("p3").innerText = l3;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m4(){
    var chk = document.getElementById("p4").textContent;
    
    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l4=plr();
        x4=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x4);
        document.getElementById("p4").innerText = l4;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m5(){
    var chk = document.getElementById("p5").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l5=plr();
        x5=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x5);
        document.getElementById("p5").innerText = l5;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m6(){
    var chk = document.getElementById("p6").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l6=plr();
        x6=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x6);
        document.getElementById("p6").innerText = l6;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m7(){
    var chk = document.getElementById("p7").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l7=plr();
        x7=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x7);
        document.getElementById("p7").innerText = l7;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m8(){
    var chk = document.getElementById("p8").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l8=plr();
        x8=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x8);
        document.getElementById("p8").innerText = l8;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}
function m9(){
    var chk = document.getElementById("p9").textContent;

    if(res==1){
        alert("O jogo acabou");
    }
    else if(chk==""){
        l9=plr();
        x9=inverso();
        document.getElementById("vez1").innerText = ("Vez de "+x9);
        document.getElementById("p9").innerText = l9;
        n++;
        i++;
        win()
    }
    if(i==9 && res!=1){
        emp()
    }
}



function emp(){
    document.getElementById("vez1").innerText = ("Empate");
    res=1;
    empate++;
    document.getElementById("empatep").innerText = ("Empate = "+empate);
    res=1;
    document.getElementById("p1").classList.remove("changeColor");
    document.getElementById("p1").classList.add("vermelho");
    document.getElementById("p2").classList.remove("changeColor");
    document.getElementById("p2").classList.add("vermelho");
    document.getElementById("p3").classList.remove("changeColor");
    document.getElementById("p3").classList.add("vermelho");
    document.getElementById("p4").classList.remove("changeColor");
    document.getElementById("p4").classList.add("vermelho");
    document.getElementById("p5").classList.remove("changeColor");
    document.getElementById("p5").classList.add("vermelho");
    document.getElementById("p6").classList.remove("changeColor");
    document.getElementById("p6").classList.add("vermelho");
    document.getElementById("p7").classList.remove("changeColor");
    document.getElementById("p7").classList.add("vermelho");
    document.getElementById("p8").classList.remove("changeColor");
    document.getElementById("p8").classList.add("vermelho");
    document.getElementById("p9").classList.remove("changeColor");
    document.getElementById("p9").classList.add("vermelho");
}





function reset(){
    document.getElementById("p1").innerText = ("");
    document.getElementById("p2").innerText = ("");
    document.getElementById("p3").innerText = ("");
    document.getElementById("p4").innerText = ("");
    document.getElementById("p5").innerText = ("");
    document.getElementById("p6").innerText = ("");
    document.getElementById("p7").innerText = ("");
    document.getElementById("p8").innerText = ("");
    document.getElementById("p9").innerText = ("");
    l1='';
    l2='';
    l3='';
    l4='';
    l5='';
    l6='';
    l7='';
    l8='';
    l9='';
    res=0;
    document.getElementById("p1").classList.remove("vermelho");
    document.getElementById("p1").classList.add("changeColor");
    document.getElementById("p2").classList.remove("vermelho");
    document.getElementById("p2").classList.add("changeColor");
    document.getElementById("p3").classList.remove("vermelho");
    document.getElementById("p3").classList.add("changeColor");
    document.getElementById("p4").classList.remove("vermelho");
    document.getElementById("p4").classList.add("changeColor");
    document.getElementById("p5").classList.remove("vermelho");
    document.getElementById("p5").classList.add("changeColor");
    document.getElementById("p6").classList.remove("vermelho");
    document.getElementById("p6").classList.add("changeColor");
    document.getElementById("p7").classList.remove("vermelho");
    document.getElementById("p7").classList.add("changeColor");
    document.getElementById("p8").classList.remove("vermelho");
    document.getElementById("p8").classList.add("changeColor");
    document.getElementById("p9").classList.remove("vermelho");
    document.getElementById("p9").classList.add("changeColor");
    i=0;
    var quem=plr();
    document.getElementById("vez1").innerText = ("Vez de "+quem);
}