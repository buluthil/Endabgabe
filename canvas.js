"use strict";
window.addEventListener("load", start);
let canvas = document.querySelector("#canvas");
let crc2 = canvas.getContext("2d");
let malen = false;
let pensilThickness = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;
crc2.strokeStyle = "Black";
function start(_event) {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", zeichnen);
    canvas.addEventListener("mouseup", stopDrawing);
    let canvassize = document.querySelector("select#canvasSize");
    canvassize.addEventListener("change", canvasSize);
    let pensilcolor = document.querySelector("select#pensilColor");
    pensilcolor.addEventListener("change", pensilColor);
    let backgroundcolor = document.querySelector("select#backgroundColor");
    backgroundcolor.addEventListener("change", backgroundColor);
    let clearcanvasbutton = document.querySelector("button#clearCanvas");
    clearcanvasbutton.addEventListener("click", clearCanvas);
    let savecanvasbutton = document.querySelector("button#savePicture");
    savecanvasbutton.addEventListener("click", savePicture);
    let circle = document.querySelector("button#drawCircle");
    circle.addEventListener("click", drawCircle);
    let pensilthickness = document.querySelector("input#pensilThickness");
    pensilthickness.addEventListener("input", changeThickness);
    username();
}
function changeThickness(_event) {
    let slider = document.getElementById("pensilThickness");
    pensilThickness = parseFloat(slider.value);
    crc2.lineWidth = pensilThickness;
    return pensilThickness;
}
function drawCircle(_event) {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = 100;
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);
    crc2.stroke();
    crc2.beginPath();
}
function backgroundColor() {
    let backgroundcolor = document.querySelector("select#backgroundColor");
    canvas.style.background = backgroundcolor.value;
}
function username() {
    let user = prompt("Please enter your username:", "Username");
    if (user == null) {
        user = "User";
        document.getElementById("username1").innerHTML =
            "Zauberbild " + user;
        document.getElementById("username2").innerHTML =
            "Welcome " + user + " !";
    }
    else {
        document.getElementById("username1").innerHTML =
            "Zauberbild " + user;
        document.getElementById("username2").innerHTML =
            "Welcome " + user + " !";
    }
}
function pensilColor(_event) {
    let pensilcolor = document.querySelector("select#pensilColor");
    crc2.strokeStyle = pensilcolor.value;
    return crc2.strokeStyle; // Color changes back to black after changing canvas size
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
        let spacingY = _event.offsetY;
        let spacingX = _event.offsetX;
        crc2.lineWidth = pensilThickness;
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
        crc2.clearRect(0, 0, canvas.width, canvas.height);
    }
    else {
        alert("Your picture hasn't been deleted");
    }
}
function canvasSize() {
    let canvassize = document.querySelector("select#canvasSize");
    switch (canvassize.value) {
        case ("small"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 3;
            crc2.strokeStyle;
            break;
        case ("medium"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2;
            crc2.strokeStyle;
            break;
        case ("large"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.5;
            crc2.strokeStyle;
            break;
    }
    return canvas.height;
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