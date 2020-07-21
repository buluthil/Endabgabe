window.addEventListener("load", start);

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
let malen: boolean = false;
let checkUsername: boolean = false;

function start(_event: Event): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
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
    username();
}

function drawCircle() {
    crc2.beginPath();
    crc2.arc(100, 100, 50, 0, Math.PI*2, false);
    crc2.stroke();
}

function backgroundColor() {
    let backgroundcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#backgroundColor")
    canvas.style.background = backgroundcolor.value;
}

function username() {
    let user = prompt("Please enter your username:", "Username");
    if (checkUsername == false) {
        checkUsername = true;
        document.getElementById("username1").innerHTML = //Issue Posten: Warum ist document possibly 0?
        "Zauberbild " + user;
        document.getElementById("username2").innerHTML = //Issue Posten: Warum ist document possibly 0?
        "Welcome " + user + " !";
    } else {
        console.log("what happened");
    }
}
function pensilColor(_event: Event) {
    let pensilcolor: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#pensilColor")
    crc2.strokeStyle = pensilcolor.value;
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
            let spacingY: number = _event.clientY / 100 * 82; //Korrektur der Mausposition
            let spacingX: number = _event.clientX;
            crc2.lineWidth = 10;
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
        canvas.width = window.innerWidth;
        canvas.height = 500;
    } else {
        alert("Your picture hasn't been deleted");
    }
}

function canvasSize() { //Muss 2x Variable für HTMLSelectElement eingeben, da ich Parameter nicht über Funktion weiterleiten kann (Fehlermeldung)
    let canvassize: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select#canvasSize");
    switch(canvassize.value) {
        case ("small"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 3;
            break;
        case ("medium"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2;
            break;
        case ("large"):
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.5;
            break;
    }
    
}

function savePicture(): void {
    let confirmation = confirm("Do you really want to save your picture?");
    if (confirmation == true) {
        alert("Your picture has been saved");
    } else {
        alert("Your picture hasn't been saved");
    }
}
