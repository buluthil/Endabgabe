namespace Endabgabe {

    export function changeThickness(_event: Event) {
        let slider = <HTMLInputElement>document.getElementById("pensilThickness")!;
        pensilThickness = parseFloat(slider.value)
        crc2.lineWidth = pensilThickness;
        return pensilThickness;
    }

    export function changeSize() {
        let slider = <HTMLInputElement>document.getElementById("objectSize")!;
        radius = parseFloat(slider.value);
        crc2.lineWidth = pensilThickness;
        return radius;
    }

    export function backgroundColor() {
        let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor")
        canvas.style.background = backgroundcolor.value;
        crc2.lineWidth = pensilThickness;
    }

    export function pensilColor(_event: Event) {
        let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor")
        crc2.strokeStyle = pensilcolor.value;
        return crc2.strokeStyle; // Color changes back to black after changing canvas size
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