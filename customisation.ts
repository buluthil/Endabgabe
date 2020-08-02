namespace Endabgabe {

    export function changeThickness(_event: Event) {
        let slider = <HTMLInputElement>document.getElementById("pensilThickness")!;
        pensilThickness = parseFloat(slider.value);
        crc2.lineWidth = pensilThickness;
    }

    export function changeSize() {
        let slider = <HTMLInputElement>document.getElementById("objectSize")!;
        radius = parseFloat(slider.value);
        crc2.lineWidth = pensilThickness;
    }

    export function backgroundColor(): string {
        let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor");
        canvasbackground = backgroundcolor.value;
        canvas.style.background = canvasbackground;
        return canvasbackground;
    }

    export function pensilColor(): string {
        let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor");
        crc2.strokeStyle = pensilcolor.value;
        colorofpensil = pensilcolor.value;
        return colorofpensil;
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