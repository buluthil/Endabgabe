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
        document.getElementById("canvas").removeEventListener("click", deleteObject2);
        document.getElementById("canvas").removeEventListener("click", drawCircle2);
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
    function erasing() {
        document.getElementById("canvas").removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas").removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas").removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas").removeEventListener("click", drawCircle2);
        document.getElementById("canvas").removeEventListener("click", deleteObject2);
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
            Endabgabe.crc2.clearRect(_event.offsetX - 25, _event.offsetY - 25, 50, 50);
        }
    }
    function stopErasing() {
        Endabgabe.eraser = false;
    }
    function clearCanvas() {
        let confirmation = confirm("Do you really want to delete your picture?");
        if (confirmation == true) {
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
            for (let i = 0; i < Endabgabe.circles.length; i++) {
                Endabgabe.circles.pop();
            }
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
        document.getElementById("canvas").removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas").removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas").removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas").removeEventListener("mousedown", startErasing);
        document.getElementById("canvas").removeEventListener("mousemove", erase);
        document.getElementById("canvas").removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas").removeEventListener("click", deleteObject2);
        document.getElementById("canvas").addEventListener("click", drawCircle2);
    }
    Endabgabe.drawCircle = drawCircle;
    function drawCircle2(_event) {
        let mycircle = new Endabgabe.Circle(_event, Endabgabe.radius, Math.floor(Math.random() * 20));
        mycircle.draw();
        Endabgabe.circles.push(mycircle);
    }
    function startAnimation() {
        if (Endabgabe.counter == 0) {
            Endabgabe.counter++;
            Endabgabe.animation = true;
            update();
        }
        else {
            return;
        }
    }
    Endabgabe.startAnimation = startAnimation;
    function stopAnimation() {
        if (Endabgabe.counter == 1) {
            Endabgabe.counter--;
            Endabgabe.animation = false;
        }
        else {
            return;
        }
    }
    Endabgabe.stopAnimation = stopAnimation;
    function update() {
        let request = requestAnimationFrame(update);
        if (Endabgabe.animation == true) {
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
            for (let i = 0; i < Endabgabe.circles.length; i++) {
                Endabgabe.circles[i].move(1 / 5);
                Endabgabe.circles[i].draw();
            }
        }
        else {
            cancelAnimationFrame(request);
            console.log("stopped animating");
        }
    }
    Endabgabe.update = update;
    function deleteObject() {
        document.getElementById("canvas").removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas").removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas").removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas").removeEventListener("mousedown", startErasing);
        document.getElementById("canvas").removeEventListener("mousemove", erase);
        document.getElementById("canvas").removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas").removeEventListener("click", drawCircle2);
        document.getElementById("canvas").addEventListener("click", deleteObject2);
    }
    Endabgabe.deleteObject = deleteObject;
    function deleteObject2(_event) {
        console.log("working?");
        for (let i = 0; i < Endabgabe.circles.length; i++) {
            if (0 <= _event.offsetX - Endabgabe.circles[i].position.x && _event.offsetX - Endabgabe.circles[i].position.x <= Math.PI * Math.pow(Endabgabe.circles[i].size, 2)
                && 0 <= _event.offsetY - Endabgabe.circles[i].position.y && _event.offsetY - Endabgabe.circles[i].position.y <= Math.PI * Math.pow(Endabgabe.circles[i].size, 2)) {
                Endabgabe.circles.splice(i, 1);
                console.log("deleted");
            }
            else {
                console.log("not clicked");
            }
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=tools.js.map