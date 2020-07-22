"use strict";
var Endabgabe;
(function (Endabgabe) {
    function paint() {
        document.getElementById("canvas").addEventListener("mousedown", startDrawing);
        document.getElementById("canvas").addEventListener("mousemove", zeichnen);
        document.getElementById("canvas").addEventListener("mouseup", stopDrawing);
    }
    Endabgabe.paint = paint;
    function startDrawing(_event) {
        document.getElementById("canvas").removeEventListener("mousedown", startErasing);
        document.getElementById("canvas").removeEventListener("mousemove", erase);
        document.getElementById("canvas").removeEventListener("mouseup", stopErasing);
        Endabgabe.malen = true;
        zeichnen(_event);
    }
    function stopDrawing() {
        Endabgabe.malen = false;
        Endabgabe.crc2.beginPath();
    }
    function zeichnen(_event) {
        if (Endabgabe.malen == false) {
            console.log("Nicht am Zeichnen");
        }
        else {
            let spacingY = _event.offsetY;
            let spacingX = _event.offsetX;
            Endabgabe.crc2.lineWidth = Endabgabe.pensilThickness;
            Endabgabe.crc2.lineCap = "round";
            Endabgabe.crc2.lineTo(spacingX, spacingY);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(spacingX, spacingY);
        }
    }
    function erasing(_event) {
        document.getElementById("canvas").removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas").removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas").removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas").addEventListener("mousedown", startErasing);
        document.getElementById("canvas").addEventListener("mousemove", erase);
        document.getElementById("canvas").addEventListener("mouseup", stopErasing);
    }
    Endabgabe.erasing = erasing;
    function startErasing(_event) {
        Endabgabe.eraser = true;
        erase(_event);
    }
    function erase(_event) {
        if (Endabgabe.eraser == false) {
            console.log("Nicht am Radieren");
        }
        else {
            Endabgabe.crc2.clearRect(_event.offsetX, _event.offsetY, 50, 50);
        }
    }
    function stopErasing() {
        Endabgabe.eraser = false;
    }
    function clearCanvas() {
        let confirmation = confirm("Do you really want to delete your picture?");
        if (confirmation == true) {
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
        }
        else {
            alert("Your picture hasn't been deleted");
        }
    }
    Endabgabe.clearCanvas = clearCanvas;
    function savePicture() {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            alert("Your picture has been saved");
        }
        else {
            alert("Your picture hasn't been saved");
        }
    }
    Endabgabe.savePicture = savePicture;
    function drawCircle() {
        document.getElementById("canvas").addEventListener("click", drawCircle2);
    }
    Endabgabe.drawCircle = drawCircle;
    function drawCircle2(_event) {
        let mycircle = new Endabgabe.Circle(_event.offsetX, _event.offsetY, 100, 1);
        mycircle.draw();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=tools.js.map