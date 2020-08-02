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
            while (Endabgabe.symbols.length > 0) {
                Endabgabe.symbols.pop();
                console.log(Endabgabe.symbols.length);
            }
        }
        else {
            alert("Your picture hasn't been deleted");
        }
    }
    Endabgabe.clearCanvas = clearCanvas;
    function drawCircle() {
        removeCanvasEventListeners();
        document.getElementById("canvas").addEventListener("click", drawCircle2);
    }
    Endabgabe.drawCircle = drawCircle;
    function drawCircle2(_event) {
        let mycircle = new Endabgabe.Circle(_event, Endabgabe.radius, Math.floor(Math.random() * 20));
        mycircle.draw();
        Endabgabe.circles.push(mycircle);
        Endabgabe.symbols.push(mycircle);
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
        Endabgabe.symbols.push(myheart);
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
        Endabgabe.symbols.push(mytriangle);
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
            for (let i = 0; i < Endabgabe.symbols.length; i++) {
                Endabgabe.symbols[i].move(1 / 5);
                Endabgabe.symbols[i].draw();
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
        for (let i = 0; i < Endabgabe.symbols.length; i++) {
            let ty = Endabgabe.symbols[i].getType();
            switch (ty) {
                case "Triangle":
                    if (-Endabgabe.triangleheight / 2 <= Endabgabe.symbols[i].position.x - 250 - _event.offsetX && Endabgabe.triangleheight >= Endabgabe.symbols[i].position.x - _event.offsetX &&
                        -Endabgabe.triangleheight / 2 <= Endabgabe.symbols[i].position.y + 250 - _event.offsetY && Endabgabe.triangleheight >= Endabgabe.symbols[i].position.y - _event.offsetY) {
                        Endabgabe.symbols.splice(i, 1);
                    }
                case "Circle":
                    if (-Endabgabe.symbols[i].size <= Endabgabe.symbols[i].position.x - _event.offsetX && Endabgabe.symbols[i].size >= Endabgabe.symbols[i].position.x - _event.offsetX
                        && -Endabgabe.symbols[i].size <= Endabgabe.symbols[i].position.y - _event.offsetY && Endabgabe.symbols[i].size >= Endabgabe.symbols[i].position.y - _event.offsetY) {
                        Endabgabe.symbols.splice(i, 1);
                    }
                case "Hearts":
                    break;
            }
        }
        return;
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
            for (let i = 0; i < Endabgabe.symbols.length; i++) {
                let ty = Endabgabe.symbols[i].getType();
                switch (ty) {
                    case "Triangle":
                        if (-Endabgabe.triangleheight / 2 <= Endabgabe.symbols[i].position.x - 250 - _event.offsetX && Endabgabe.triangleheight >= Endabgabe.symbols[i].position.x - _event.offsetX &&
                            -Endabgabe.triangleheight / 2 <= Endabgabe.symbols[i].position.y + 250 - _event.offsetY && Endabgabe.triangleheight >= Endabgabe.symbols[i].position.y - _event.offsetY) {
                            Endabgabe.symbols[i].position.x = _event.offsetX;
                            Endabgabe.symbols[i].position.y = _event.offsetY;
                            Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
                            Endabgabe.symbols[i].draw();
                        }
                    case "Circle":
                        if (-Endabgabe.symbols[i].size <= Endabgabe.symbols[i].position.x - _event.offsetX && Endabgabe.symbols[i].size >= Endabgabe.symbols[i].position.x - _event.offsetX
                            && -Endabgabe.symbols[i].size <= Endabgabe.symbols[i].position.y - _event.offsetY && Endabgabe.symbols[i].size >= Endabgabe.symbols[i].position.y - _event.offsetY) {
                            Endabgabe.symbols[i].position.x = _event.offsetX;
                            Endabgabe.symbols[i].position.y = _event.offsetY;
                            Endabgabe.crc2.clearRect(0, 0, Endabgabe.canvaswidth, Endabgabe.canvasheight);
                            Endabgabe.symbols[i].draw();
                        }
                    case "Hearts":
                        break;
                }
            }
        }
    }
    function stopmovingObject() {
        for (let i = 0; i < Endabgabe.symbols.length; i++) {
            Endabgabe.symbols[i].draw();
        }
        Endabgabe.move = false;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=tools.js.map