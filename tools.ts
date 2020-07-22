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
                crc2.lineTo(spacingX, spacingY);
                crc2.stroke();
                crc2.beginPath();
                crc2.moveTo(spacingX, spacingY);
            }
    }

    export function erasing(_event: MouseEvent): void {
        document.getElementById("canvas")!.removeEventListener("mousedown", startDrawing);
        document.getElementById("canvas")!.removeEventListener("mousemove", zeichnen);
        document.getElementById("canvas")!.removeEventListener("mouseup", stopDrawing);
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
                crc2.clearRect(_event.offsetX, _event.offsetY, 50, 50);
        }
    }

    function stopErasing(): void {
        eraser = false;
    }

    export function clearCanvas(): void {
        let confirmation = confirm("Do you really want to delete your picture?");
        if (confirmation == true) {
            crc2.clearRect(0, 0, canvaswidth, canvasheight);
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
        let mycircle = new Circle (canvaswidth / 2, canvasheight / 2, 100, 1);
        mycircle.draw();
    }
}