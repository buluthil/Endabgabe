"use strict";
window.addEventListener("load", start);
let canvas = document.querySelector("#canvas");
let crc2 = canvas.getContext("2d");
let malen = false;
let checkUsername = false;
function start(_event) {
    canvas.width = window.innerWidth;
    canvas.height = 500;
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", zeichnen);
    canvas.addEventListener("mouseup", stopDrawing);
    let canvassize = document.querySelector("select#canvasSize");
    canvassize.addEventListener("change", canvasSize);
    let pensilcolor = document.querySelector("select#pensilColor");
    pensilcolor.addEventListener("change", pensilColor);
    username();
}
function username() {
    let user = prompt("Please enter your username:", "DNJKLAQNDKOJ");
    if (checkUsername == false) {
        checkUsername = true;
        document.getElementById("username1").innerHTML =
            "Zauberbild " + user;
        document.getElementById("username2").innerHTML =
            "Welcome " + user + " !";
    }
    else {
        console.log("what happened");
    }
}
function pensilColor(_event) {
    let pensilcolor = document.querySelector("select#pensilColor");
    crc2.strokeStyle = pensilcolor.value;
}
function startDrawing(_event) {
    malen = true;
    zeichnen(_event);
}
function stopDrawing() {
    malen = false;
    crc2.beginPath();
}
function zeichnen(_event) {
    if (malen == false) {
        console.log("Nicht am Zeichnen");
    }
    else {
        let spacingY = _event.clientY / 100 * 82; //Korrektur der Mausposition
        let spacingX = _event.clientX;
        crc2.lineWidth = 10;
        crc2.lineCap = "round";
        crc2.lineTo(spacingX, spacingY);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(spacingX, spacingY);
    }
}
function clearCanvas() {
    let confirmation = confirm("Do you really want to delete your picture?");
    if (confirmation == true) {
        canvas.width = window.innerWidth;
        canvas.height = 500;
    }
    else {
        alert("Your picture hasn't been deleted");
    }
}
function canvasSize() {
    let canvassize = document.querySelector("select#canvasSize");
    let canvasHeight = parseFloat(canvassize.value);
    canvas.width = window.innerWidth;
    canvas.height = canvasHeight;
}
function savePicture() {
    let confirmation = confirm("Do you really want to save your picture?");
    if (confirmation == true) {
        alert("Your picture has been saved");
    }
    else {
        alert("Your picture hasn't been saved");
    }
}
//# sourceMappingURL=canvas.js.map