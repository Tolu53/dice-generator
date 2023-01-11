var randLeft = Math.floor(Math.random()*6)+1;
var randRight = Math.floor(Math.random()*6)+1;
var randLeftimg = "images/dice" + randLeft +".png";
var randRightimg = "images/dice"+ randRight+".png";

document.querySelectorAll("img")[0].setAttribute("src",randLeftimg);
document.querySelectorAll("img")[1].setAttribute("src",randRightimg);

if(randLeft>randRight){
document.querySelectorAll("h1")[1].innerHTML="Player 1 wins";
}else{if(randLeft===randRight){document.querySelectorAll("h1")[1].innerHTML = "its a draw"}
else{document.querySelectorAll("h1")[1].innerHTML="Player 2 Wins";}}
