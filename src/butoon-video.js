document.addEventListener("DOMContentLoaded", () => {
const markerB = document.querySelector("#marker-videoA");
const video = document.querySelector("#videoA");
const buttons = document.getElementById("buttons");

markerB.addEventListener("markerFound", () => {
buttons.style.display = "block";
video.play();
});

markerB.addEventListener("markerLost", () => {
buttons.style.display = "none";
video.pause();
});

document.getElementById("btn1").addEventListener("click", () => {
video.play();
});

document.getElementById("btn2").addEventListener("click", () => {
video.pause();
});

document.getElementById("btn3").addEventListener("click", () => {
video.currentTime = 0;
video.play();
});

document.getElementById('btn4').addEventListener('click', function() {
window.location.href = 'https://youtu.be/LzMUkLEI2hI';
});
});
