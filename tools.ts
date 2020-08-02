namespace Endabgabe {
    
    function removeCanvasEventListeners(): void {
        document.getElementById("canvas")!.removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas")!.removeEventListener("mousedown", startErasing);
        document.getElementById("canvas")!.removeEventListener("mousemove", erase);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas")!.removeEventListener("click", drawCircle2);
        document.getElementById("canvas")!.removeEventListener("mousedown", startMovingObject);
        document.getElementById("canvas")!.removeEventListener("mousemove", movingObject);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopmovingObject);
        document.getElementById("canvas")!.removeEventListener("click", drawTriangle2);
        document.getElementById("canvas")!.removeEventListener("click", deleteObject2)
        document.getElementById("canvas")!.removeEventListener("click", drawHeart2);
    }

    export function paint(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.addEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.addEventListener("mouseup", stopDrawing);
    }

    function startDrawing(_event: MouseEvent) {
        malen = true;
        zeichnen(_event);
    }

    function stopDrawing(): void {
        malen = false;
        crc2.beginPath();
        crc2.save();
    }

    function zeichnen(_event: MouseEvent): void {
        if (malen == false || animation == true) {
            console.log("Nicht am Zeichnen");
        } else {
                let spacingY: number = _event.offsetY
                let spacingX: number = _event.offsetX;
                crc2.lineWidth = pensilThickness;
                crc2.lineCap = "round";
                crc2.lineTo(spacingX, spacingY);
                crc2.stroke();
                crc2.beginPath();
                crc2.moveTo(spacingX, spacingY);
            }
    }

    export function erasing(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("mousedown", startErasing);
        document.getElementById("canvas")!.addEventListener("mousemove", erase);
        document.getElementById("canvas")!.addEventListener("mouseup", stopErasing);
    }

    function startErasing(_event: MouseEvent): void {
        eraser = true;
        erase(_event);
    }

    function erase(_event: MouseEvent): void {
        if (eraser == false) {
            console.log("Nicht am Radieren");
        } else {
                crc2.clearRect(_event.offsetX - 25, _event.offsetY - 25, 50, 50);
        }
    }

    function stopErasing(): void {
        eraser = false;
    }

    export function clearCanvas() {
        let confirmation = confirm("Do you really want to delete your picture?");
        if (confirmation == true) {
            crc2.clearRect(0, 0, canvaswidth, canvasheight);
            while (symbols.length > 0) {
                symbols.pop();
                console.log(symbols.length);
            }
        } else {
            alert("Your picture hasn't been deleted");
        }
    }

    export function drawCircle(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("click", drawCircle2);
    }

    function drawCircle2(_event: MouseEvent): void {
        let mycircle: Circle = new Circle (_event, radius, Math.floor(Math.random() * 20));
        mycircle.draw();
        circles.push(mycircle);
        symbols.push(mycircle);
    }

    export function drawHeart(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("click", drawHeart2);
    }

    function drawHeart2(_event: MouseEvent): void {
        let myheart: Heart = new Heart (_event);
        myheart.draw();
        hearts.push(myheart);
        symbols.push(myheart);
    }

    export function drawTriangle(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("click", drawTriangle2);
    }

    function drawTriangle2(_event: MouseEvent): void {
        let mytriangle: Triangle = new Triangle(_event, triangleheight);
        mytriangle.draw();
        triangles.push(mytriangle);
        symbols.push(mytriangle);
    }

    export function startAnimation(): void {
        if (counter == 0) {
            counter++;
            animation = true;
            update();
        } else {
            return;
        }
    }

    export function stopAnimation(): void {
        if (counter == 1) {
            counter--;
            animation = false;
        } else {
            return;
        }
    }

    export function update(): void {
        let request = requestAnimationFrame(update);
        if (animation == true) {
            crc2.clearRect(0, 0, canvaswidth, canvasheight);
            for (let i: number = 0; i < symbols.length; i++) {
                symbols[i].move(1/5);
                symbols[i].draw();
            }
        } else {
            cancelAnimationFrame(request);
            console.log("stopped animating");
        }
    }

    export function deleteObject(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("click", deleteObject2)
    }

    function deleteObject2(_event: MouseEvent): void {

        for (let i: number = 0; i < symbols.length; i++){
            let ty = symbols[i].getType()
            switch (ty){
                case "Triangle":
                    if (-triangleheight / 2 <= symbols[i].position.x - 250 - _event.offsetX && triangleheight >= symbols[i].position.x - _event.offsetX &&
                        -triangleheight / 2 <= symbols[i].position.y + 250 - _event.offsetY && triangleheight >= symbols[i].position.y - _event.offsetY){
                        symbols.splice(i, 1);
                    } 
                case "Circle":
                    if (-symbols[i].size <= symbols[i].position.x - _event.offsetX && symbols[i].size >= symbols[i].position.x - _event.offsetX
                        && -symbols[i].size <= symbols[i].position.y - _event.offsetY && symbols[i].size >= symbols[i].position.y - _event.offsetY) {
                        symbols.splice(i, 1);
                    }
                case "Hearts":
                    break;
            }
        }
        return;
    }

    export function moveObject(): void {
        removeCanvasEventListeners();
        document.getElementById("canvas")!.addEventListener("mousedown", startMovingObject);
        document.getElementById("canvas")!.addEventListener("mousemove", movingObject);
        document.getElementById("canvas")!.addEventListener("mouseup", stopmovingObject);
    }

    function startMovingObject(_event: MouseEvent): void {
        move = true;
        movingObject(_event);
    }

    function movingObject(_event: MouseEvent): void {
        if (move == true) {
            for (let i: number = 0; i < symbols.length; i++){
                let ty = symbols[i].getType()
                switch (ty){
                    case "Triangle":
                        if (-triangleheight / 2 <= symbols[i].position.x - 250 - _event.offsetX && triangleheight >= symbols[i].position.x - _event.offsetX &&
                            -triangleheight / 2 <= symbols[i].position.y + 250 - _event.offsetY && triangleheight >= symbols[i].position.y - _event.offsetY){
                            symbols[i].position.x = _event.offsetX;
                            symbols[i].position.y = _event.offsetY;
                            crc2.clearRect(0, 0, canvaswidth, canvasheight);
                            symbols[i].draw();
                        }
                    case "Circle":
                        if (-symbols[i].size <= symbols[i].position.x - _event.offsetX && symbols[i].size >= symbols[i].position.x - _event.offsetX
                            && -symbols[i].size <= symbols[i].position.y - _event.offsetY && symbols[i].size >= symbols[i].position.y - _event.offsetY) {
                            symbols[i].position.x = _event.offsetX;
                            symbols[i].position.y = _event.offsetY;
                            crc2.clearRect(0, 0, canvaswidth, canvasheight);
                            symbols[i].draw();
                        }
                    case "Hearts":
                    break;
                }
            }
        }
    }

    function stopmovingObject(): void { // Objekte auf dem Canvas sollen nach Loslassen der Maus wieder gezeichnet werden
        for (let i: number = 0; i < symbols.length; i++) { 
            symbols[i].draw();
        }
        move = false;
    }
}