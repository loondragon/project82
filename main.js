var me="empty"; 
var lastx,lasty;
var colour="red";
var width=2;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",word2);
function word2(e){
colour=document.getElementById("coulour").value ;
width=document.getElementById("word").value ;
me="mousedown";
}
canvas.addEventListener("mousemove",meh);
function meh(e){
curentx=e.clientX-canvas.offsetLeft;
curenty=e.clientY-canvas.offsetTop;
if (me=="mousedown") {
ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty)
    ctx.lineTo(curentx,curenty);
    ctx.stroke()
}
lastx=curentx;
lasty=curenty;
}
canvas.addEventListener("mouseup",ehh);
function ehh(e){
me="mouseup";
}
canvas.addEventListener("mouseleave",hat);
function hat(e){
me="mouseleave";
}