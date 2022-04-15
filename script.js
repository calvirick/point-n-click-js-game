/*------------------Console Logs-------------------*/
console.log("Javascript started...🐠");

/*------------------Game Objects-------------------*/
const positionElement = document.getElementById("title");
let currentImage = document.getElementById("currentImage");

/*------------------Canvas-------------------*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

/*------------------Script-------------------*/

function pictureChange() {
  currentImage.src = "./assets/Scenes/scene2.jpg";
}
function goBack() {
  currentImage.src = "./assets/Scenes/scene1.jpg";
}
function printMousePos(event) {
  positionElement.textContent =
    "clientX: " + event.clientX + " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);
