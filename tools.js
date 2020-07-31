"use strict";
var Endabgabe;
(function (Endabgabe) {
    function removeCanvasEventListeners() {
        document.getElementById("canvas").removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas").removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas").removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas").removeEventListener("mousedown", startErasing);
        document.getElementById("canvas").removeEventListener("mousemove", erase);
        document.getElementById("canvas").removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas").removeEventListener("click", drawCircle2);
        document.getElementById("canvas").removeEventListener("mousedown", startMovingObject);
        document.getElementById("canvas").removeEventListener("mousemove", movingObject);
        document.getElementById("canvas").removeEventListener("mouseup", stopmovingObject);
        document.getElementById("canvas").removeEventListener("click", drawTriangle2);
        document.getElementById("canvas").removeEventListener("click", deleteObject2);
        document.getElementById("canvas").removeEventListener("click", drawHeart2);
    }
    function paint() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("mousedown", startDrawing);
        document.getElementById("canvas").addEventListener("mousemove", zeichnen);
        document.getElementById("canvas").addEventListener("mouseup", stopDrawing);
    }
    Endabgabe.paint = paint;
    function startDrawing(_event) {
        Endabgabe.malen = true;
        zeichnen(_event);
    }
    function stopDrawing() {
        Endabgabe.malen = false;
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.save();
    }
    function zeichnen(_event) {
        if (Endabgabe.malen == false || Endabgabe.animation == true) {
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
        removeCanvasEventListeners();
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
                Endabgabe.circles.splice(i, 0);
            }
        }
        else {
            alert("Your picture hasn't been deleted");
        }
    }
    Endabgabe.clearCanvas = clearCanvas;
    async function savePicture() {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            let formData = new FormData(Endabgabe.form);
            let query = new URLSearchParams(formData);
            let response = await fetch(Endabgabe.url + "?" + query.toString());
            let responseText = await response.text();
            alert("Your picture has been saved");
            console.log(responseText);
        }
        else {
            alert("Your picture hasn't been saved");
        }
    }
    Endabgabe.savePicture = savePicture;
    function drawCircle() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("click", drawCircle2);
    }
    Endabgabe.drawCircle = drawCircle;
    function drawCircle2(_event) {
        let mycircle = new Endabgabe.Circle(_event, Endabgabe.radius, Math.floor(Math.random() * 20));
        mycircle.draw();
        Endabgabe.circles.push(mycircle);
    }
    function drawHeart() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("click", drawHeart2);
    }
    Endabgabe.drawHeart = drawHeart;
    function drawHeart2(_event) {
        let myheart = new Endabgabe.Heart(_event);
        myheart.draw();
        Endabgabe.hearts.push(myheart);
    }
    function drawTriangle() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("click", drawTriangle2);
    }
    Endabgabe.drawTriangle = drawTriangle;
    function drawTriangle2(_event) {
        let mytriangle = new Endabgabe.Triangle(_event, Endabgabe.triangleheight);
        mytriangle.draw();
        Endabgabe.triangles.push(mytriangle);
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
            console.log(Endabgabe.circles[0].position.x);
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
            for (let i = 0; i < Endabgabe.triangles.length; i++) {
                Endabgabe.triangles[i].move(1 / 5);
                Endabgabe.triangles[i].draw();
            }
            for (let i = 0; i < Endabgabe.hearts.length; i++) {
                Endabgabe.hearts[i].move(1 / 5);
                Endabgabe.hearts[i].draw();
            }
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
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("click", deleteObject2);
    }
    Endabgabe.deleteObject = deleteObject;
    function deleteObject2(_event) {
        for (let i = 0; i < Endabgabe.circles.length; i++) {
            if (-Endabgabe.circles[i].size <= Endabgabe.circles[i].position.x - _event.offsetX && Endabgabe.circles[i].size >= Endabgabe.circles[i].position.x - _event.offsetX
                && -Endabgabe.circles[i].size <= Endabgabe.circles[i].position.y - _event.offsetY && Endabgabe.circles[i].size >= Endabgabe.circles[i].position.y - _event.offsetY) {
                Endabgabe.circles.splice(i, 1);
                console.log("Circle deleted");
            }
            else {
                console.log("Circle not clicked");
            }
        }
        for (let i = 0; i < Endabgabe.triangles.length; i++) {
            if (-Endabgabe.triangleheight / 2 <= Endabgabe.triangles[i].position.x - _event.offsetX && Endabgabe.triangleheight >= Endabgabe.triangles[i].position.x - _event.offsetX &&
                -Endabgabe.triangleheight / 2 <= Endabgabe.triangles[i].position.y - _event.offsetY && Endabgabe.triangleheight >= Endabgabe.triangles[i].position.y - _event.offsetY) {
                Endabgabe.triangles.splice(i, 1);
                console.log("Triangle deleted");
            }
            else {
                console.log("Trianle not clicked");
            }
        }
    }
    function moveObject() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("mousedown", startMovingObject);
        document.getElementById("canvas").addEventListener("mousemove", movingObject);
        document.getElementById("canvas").addEventListener("mouseup", stopmovingObject);
    }
    Endabgabe.moveObject = moveObject;
    function startMovingObject(_event) {
        Endabgabe.move = true;
        movingObject(_event);
    }
    function movingObject(_event) {
        if (Endabgabe.move == true) {
            for (let i = 0; i < Endabgabe.circles.length; i++) {
                if (-Endabgabe.circles[i].size <= Endabgabe.circles[i].position.x - _event.offsetX && Endabgabe.circles[i].size >= Endabgabe.circles[i].position.x - _event.offsetX
                    && -Endabgabe.circles[i].size <= Endabgabe.circles[i].position.y - _event.offsetY && Endabgabe.circles[i].size >= Endabgabe.circles[i].position.y - _event.offsetY) { // Radius des Kreises - Position des Objektes - Position meiner Maus
                    console.log("Position Circle X - Mouse X", Endabgabe.circles[i].position.x - _event.offsetX);
                    console.log("Position Circle Y - Mouse Y", Endabgabe.circles[i].position.y - _event.offsetY);
                    Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
                    Endabgabe.circles[i].position.x = _event.offsetX;
                    Endabgabe.circles[i].position.y = _event.offsetY;
                    Endabgabe.circles[i].draw();
                }
                else {
                    console.log("Position Circle X - Mouse X", Endabgabe.circles[i].position.x - _event.offsetX);
                    console.log("Position Circle Y - Mouse Y", Endabgabe.circles[i].position.y - _event.offsetY);
                    console.log("Didn't move");
                }
            }
            for (let i = 0; i < Endabgabe.triangles.length; i++) {
                if (-200 <= Endabgabe.triangles[i].position.x - _event.offsetX && 200 >= Endabgabe.triangles[i].position.x - _event.offsetX &&
                    -200 <= Endabgabe.triangles[i].position.y - _event.offsetY && 200 >= Endabgabe.triangles[i].position.y - _event.offsetY) {
                    Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
                    Endabgabe.triangles[i].position.x = _event.offsetX;
                    Endabgabe.triangles[i].position.y = _event.offsetY;
                    Endabgabe.triangles[i].draw();
                }
                else {
                    console.log("Trianle not moved");
                    //console.log("Triangle Height", triangleheight / 2);
                    //console.log("Triangle Height - Triangle Position X - Mouse Position X", triangleheight - triangles[i].position.x - _event.offsetX);
                }
            }
        }
    }
    function stopmovingObject() {
        for (let i = 0; i < Endabgabe.circles.length; i++) {
            Endabgabe.circles[i].draw();
        }
        for (let i = 0; i < Endabgabe.triangles.length; i++) {
            Endabgabe.triangles[i].draw();
        }
        Endabgabe.move = false;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=tools.js.map