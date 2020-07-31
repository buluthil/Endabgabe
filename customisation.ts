namespace Endabgabe {

    export function changeThickness(_event: Event) {
        let slider = <HTMLInputElement>document.getElementById("pensilThickness")!;
        pensilThickness = parseFloat(slider.value);
        crc2.lineWidth = pensilThickness;
        crc2.save();
    }

    export function changeSize() {
        let slider = <HTMLInputElement>document.getElementById("objectSize")!;
        radius = parseFloat(slider.value);
        //trianglesize = parseFloat(slider.value);
        crc2.lineWidth = pensilThickness;
        crc2.save();
    }

    export function backgroundColor() {
        let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor");
        canvas.style.background = backgroundcolor.value;
        crc2.lineWidth = pensilThickness;
        crc2.save();
    }

    export function pensilColor() {
        let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor");
        crc2.strokeStyle = pensilcolor.value;
        crc2.save();
    }

    export function fillObject(): void {
        let color = <HTMLSelectElement>document.getElementById("pensilColor");
        fillcolor = color.value
        crc2.fillStyle = fillcolor;
        crc2.fill();
        crc2.save();
    }

    export function canvasSize(): number { 
        let canvassize: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#canvasSize");
        switch(canvassize.value) {
            case ("small"):
                canvaswidth = canvas.width = window.innerWidth;
                canvasheight = canvas.height = window.innerHeight / 3;
                crc2.strokeStyle;
                break;
            case ("medium"):
                canvaswidth = canvas.width = window.innerWidth;
                canvasheight = canvas.height = window.innerHeight / 2;
                crc2.strokeStyle;
                break;
            case ("large"):
                canvaswidth = canvas.width = window.innerWidth;
                canvasheight = canvas.height = window.innerHeight / 1.5;
                crc2.strokeStyle;
                break;
        }
        return canvasheight;
    }
}