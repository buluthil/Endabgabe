namespace Endabgabe {
    
    window.addEventListener("load", init);

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    export let malen: boolean = false;
    export let pensilThickness: number = 10;
    export let canvaswidth = canvas.width = window.innerWidth;
    export let canvasheight = canvas.height = window.innerHeight / 2;
    export let eraser: boolean = false;
    export let radius: number = 100;
    export let fillcolor: string;
    export let fillobject: boolean = false;
    export let interval: boolean = false
    export let animation: boolean = false;
    export let counter: number = 0;
    export let circles: Circle[] = [];
    export let hearts: Heart[] = [];
    export let triangles: Triangle[] = [];
    export let triangleheight = 200 * Math.cos(Math.PI / 6);
    export let move: boolean = false;
    export let form: HTMLFormElement;
    //export let url: string = "https://zauberbildlukas-server.herokuapp.com/"
    export let url: string = "http://localhost:5000";
    crc2.strokeStyle = "Black";

    function init(_event: Event): void {
        let pensilthickness: HTMLInputElement = <HTMLInputElement>document.querySelector("input#pensilThickness");
        pensilthickness.addEventListener("input", changeThickness);
        let objectSize: HTMLInputElement = <HTMLInputElement>document.querySelector("input#objectSize");
        objectSize.addEventListener("input", changeSize);
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
        let triangle: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#drawTriangle");
        triangle.addEventListener("click", drawTriangle);
        let heart: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#drawHeart");
        heart.addEventListener("click", drawHeart);
        let startanimation: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startAnimation");
        startanimation.addEventListener("click", startAnimation);
        let stopanimation: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#stopAnimation");
        stopanimation.addEventListener("click", stopAnimation);
        let fill: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#fillObject");
        fill.addEventListener("click", fillObject);
        let deleteobject: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#deleteObject");
        deleteobject.addEventListener("click", deleteObject);
        let moveobject: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#moveObject");
        moveobject.addEventListener("click", moveObject);
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
        crc2.font = "10rem Arial";
        crc2.textAlign = "center";
        crc2.strokeText(user, canvaswidth / 2, canvasheight / 2);
    }
}