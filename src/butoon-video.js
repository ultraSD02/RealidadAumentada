var m = document-querySelector("a-maker");
m.addEventListener("markerFound", (e)=>{
var v = document.querySelector("#videoA").play();

})
m.addEventListener("markerlost", (e)=>{
var v = document.querySelector("#videoA").pause();
})  

document.getElementById("btn1").addEventListener("click", (e)=>{
var v = document.querySelector("#videoA").play();
})
document.getElementById("btn2").addEventListener("click", (e)=>{
var v = document.querySelector("#videoA").stop();
})
