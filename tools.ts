namespace Endabgabe {
    
    export function paint(): void {
        document.getElementById("canvas")!.addEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.addEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.addEventListener("mouseup", stopDrawing);
    }

    function startDrawing(_event: MouseEvent) {
        document.getElementById("canvas")!.removeEventListener("mousedown", startErasing);
        document.getElementById("canvas")!.removeEventListener("mousemove", erase);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas")!.removeEventListener("click", deleteObject2);
        document.getElementById("canvas")!.removeEventListener("click", drawCircle2);
        malen = true;
        zeichnen(_event);
    }

    function stopDrawing(): void {
        malen = false;
        crc2.beginPath();
    }

    function zeichnen(_event: MouseEvent): void {
        if (malen == false) {
            console.log("Nicht am Zeichnen");
        } else {
                let spacingY: number = _event.offsetY
                let spacingX: number = _event.offsetX;
                crc2.lineWidth = pensilThickness;
                crc2.lineCap = "round";
                crc2.moveTo(spacingX, spacingY);
                crc2.lineTo(spacingX, spacingY);
                crc2.stroke();
                crc2.beginPath();
            }
    }

    export function erasing(): void {
        document.getElementById("canvas")!.removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas")!.removeEventListener("click", drawCircle2);
        document.getElementById("canvas")!.removeEventListener("click", deleteObject2);
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
            for (let i: number = 0; i < circles.length; i++) {
                circles.pop();
            }
        } else {
            alert("Your picture hasn't been deleted");
        }
    }

    export function savePicture(): void {
        let confirmation = confirm("Do you really want to save your picture?");
        if (confirmation == true) {
            alert("Your picture has been saved");
        } else {
            alert("Your picture hasn't been saved");
        }
    }

    export function drawCircle(): void {
        document.getElementById("canvas")!.removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas")!.removeEventListener("mousedown", startErasing);
        document.getElementById("canvas")!.removeEventListener("mousemove", erase);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas")!.removeEventListener("click", deleteObject2);
        document.getElementById("canvas")!.addEventListener("click", drawCircle2);
    }

    function drawCircle2(_event: MouseEvent): void {
        let mycircle: Circle = new Circle (_event, radius, Math.floor(Math.random() * 20));
        mycircle.draw();
        circles.push(mycircle);
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
        for (let i: number = 0; i < circles.length; i++) {
            circles[i].move(1/5);
            circles[i].draw();
        }
        } else {
            cancelAnimationFrame(request);
            console.log("stopped animating");
        }
    }

    export function deleteObject(): void {
        document.getElementById("canvas")!.removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopDrawing);
        document.getElementById("canvas")!.removeEventListener("mousedown", startErasing);
        document.getElementById("canvas")!.removeEventListener("mousemove", erase);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopErasing);
        document.getElementById("canvas")!.removeEventListener("click", drawCircle2);
        document.getElementById("canvas")!.addEventListener("click", deleteObject2)
    }

    function deleteObject2(_event: MouseEvent): void {
        console.log("working?");
        for (let i: number = 0; i < circles.length; i++) {
            if (0 <= _event.offsetX - circles[i].position.x && _event.offsetX - circles[i].position.x <= Math.PI * Math.pow(circles[i].size, 2) 
            && 0 <= _event.offsetY - circles[i].position.y && _event.offsetY - circles[i].position.y <= Math.PI * Math.pow(circles[i].size, 2)) {
                circles.splice(i, 1);
                console.log("deleted");
            } else {
                console.log("not clicked");
            }
        }
    }
}