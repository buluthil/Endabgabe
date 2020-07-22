namespace Endabgabe {
    
    window.addEventListener("load", start);

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    export let malen: boolean = false;
    export let pensilThickness: number = 10;
    export let canvaswidth = canvas.width = window.innerWidth;
    export let canvasheight = canvas.height = window.innerHeight / 2;
    export let eraser: boolean = false;

    crc2.strokeStyle = "Black";

    function start(_event: Event): void {
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
        let painting: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#paint");
        painting.addEventListener("click", paint);
        let eraser: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#eraser");
        eraser.addEventListener("click", erasing);
        let circle: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#drawCircle");
        circle.addEventListener("click", drawCircle);
        let pensilthickness: HTMLInputElement = <HTMLInputElement>document.querySelector("input#pensilThickness");
        pensilthickness.addEventListener("input", changeThickness);
        username();
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
}