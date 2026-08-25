let userseq=[];
let gameseq=[];
let level=0;
let btns=["red","green","purple","yellow"];
let started=false;
let h2=document.querySelector('h2');
let body=document.querySelector("body");
body.addEventListener("keypress",function(){
    if(started==false){
        level++;
console.log("key is pressed");
h2.innerText=`level ${level}`;
started=true;
levelup();
}});
function levelup(){
    userseq=[];
    let rndno=Math.floor(Math.random()*3);
    let rndclr=btns[rndno];
    // console.log(rndno);
    // console.log(rndclr);
    gameseq.push(rndclr);
    // console.log(gameseq);
    let rndbtn=document.querySelector(`#${rndclr}`);
    flash(rndbtn);
}
function flash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},100);
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function checkAns(idx){
    // let idx=level-1;
if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        level++;
        h2.innerText=`level ${level}`;
        setTimeout(levelup,1000);
    }
    console.log("same seq");

} 
    else{
h2.innerHTML=`Game Over !  Your score was ${level} <b>press any key to start again`;
body.style.backgroundColor="red";
setTimeout(function(){
    body.style.backgroundColor="white";

},150)
reset();
    }
}
function btnpress(){
    let btn=this;
    // console.log(this);
    let userColor = btn.getAttribute("id"); // Push string ID, not DOM element
    userseq.push(userColor);
    // console.log(userseq);
    checkAns(userseq.length-1);
    flash(btn);
}
function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    started=false;
}
