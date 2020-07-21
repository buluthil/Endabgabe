window.addEventListener("load", start);

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
let malen: boolean = false;
let pensilThickness: number = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;
crc2.strokeStyle = "Black";

function start(_event: Event): void {
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", zeichnen);
    canvas.addEventListener("mouseup", stopDrawing);
    let canvassize: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#canvasSize");
    canvassize.addEventListener("change", canvasSize);
    let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor");
    pensilcolor.addEventListener("change", pensilColor);
    let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor");
    backgroundcolor.addEventListener("change", backgroundColor);
    let clearcanvasbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#clearCanvas");
    clearcanvasbutton.addEventListener("click", clearCanvas);
    let savecanvasbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#savePicture");
    savecanvasbutton.addEventListener("click", savePicture);
    let circle: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#drawCircle");
    circle.addEventListener("click", drawCircle);
    let pensilthickness: HTMLInputElement = <HTMLInputElement>document.querySelector("input#pensilThickness");
    pensilthickness.addEventListener("input", changeThickness);
    username();
}

function changeThickness(_event: Event) {
    let slider = <HTMLInputElement>document.getElementById("pensilThickness")!;
    pensilThickness = parseFloat(slider.value)
    crc2.lineWidth = pensilThickness;
    return pensilThickness;
}

function drawCircle(_event: MouseEvent) {
    let x: number = canvas.width / 2;
    let y: number = canvas.height / 2;
    let radius: number = 100;
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI*2, false);
    crc2.stroke();
    crc2.beginPath();
}

function backgroundColor() {
    let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor")
    canvas.style.background = backgroundcolor.value;
}

function username() {
    let user = prompt("Please enter your username:", "Username");
    if (user == null) {
        user = "User";
        document.getElementById("username1")!.innerHTML = 
        "Zauberbild " + user;
        document.getElementById("username2")!.innerHTML = 
        "Welcome " + user + " !";
    } else {
        document.getElementById("username1")!.innerHTML = 
        "Zauberbild " + user;
        document.getElementById("username2")!.innerHTML = 
        "Welcome " + user + " !";
    }
}
function pensilColor(_event: Event) {
    let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor")
    crc2.strokeStyle = pensilcolor.value;
    return crc2.strokeStyle; // Color changes back to black after changing canvas size
}

function startDrawing(_event: MouseEvent) {
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

function clearCanvas(): void {
    let confirmation = confirm("Do you really want to delete your picture?");
    if (confirmation == true) {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        alert("Your picture hasn't been deleted");
    }
}

function canvasSize(): number { //Muss 2x Variable für HTMLSelectElement eingeben, da ich Parameter nicht über Funktion weiterleiten kann (Fehlermeldung)
    let canvassize: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#canvasSize");
    switch(canvassize.value) {
        case ("small"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 3;
            crc2.strokeStyle;
            break;
        case ("medium"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2;
            crc2.strokeStyle;
            break;
        case ("large"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.5;
            crc2.strokeStyle;
            break;
    }
    return canvas.height;
}

function savePicture(): void {
    let confirmation = confirm("Do you really want to save your picture?");
    if (confirmation == true) {
        alert("Your picture has been saved");
    } else {
        alert("Your picture hasn't been saved");
    }
}
