"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", start);
    Endabgabe.canvas = document.querySelector("#canvas");
    Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
    Endabgabe.malen = false;
    Endabgabe.pensilThickness = 10;
    Endabgabe.canvaswidth = Endabgabe.canvas.width = window.innerWidth;
    Endabgabe.canvasheight = Endabgabe.canvas.height = window.innerHeight / 2;
    Endabgabe.eraser = false;
    Endabgabe.radius = 100;
    Endabgabe.crc2.strokeStyle = "Black";
    function start(_event) {
        let canvassize = document.querySelector("select#canvasSize");
        canvassize.addEventListener("change", Endabgabe.canvasSize);
        let pensilcolor = document.querySelector("select#pensilColor");
        pensilcolor.addEventListener("change", Endabgabe.pensilColor);
        let backgroundcolor = document.querySelector("select#backgroundColor");
        backgroundcolor.addEventListener("change", Endabgabe.backgroundColor);
        let clearcanvasbutton = document.querySelector("button#clearCanvas");
        clearcanvasbutton.addEventListener("click", Endabgabe.clearCanvas);
        let savecanvasbutton = document.querySelector("button#savePicture");
        savecanvasbutton.addEventListener("click", Endabgabe.savePicture);
        let painting = document.querySelector("button#paint");
        painting.addEventListener("click", Endabgabe.paint);
        let eraser = document.querySelector("button#eraser");
        eraser.addEventListener("click", Endabgabe.erasing);
        let circle = document.querySelector("button#drawCircle");
        circle.addEventListener("click", Endabgabe.drawCircle);
        let pensilthickness = document.querySelector("input#pensilThickness");
        pensilthickness.addEventListener("input", Endabgabe.changeThickness);
        let objectSize = document.querySelector("input#objectSize");
        objectSize.addEventListener("input", Endabgabe.changeSize);
        username();
        //window.setInterval(update, 20);
    }
    function username() {
        let user = prompt("Please enter your username:", "Username");
        if (user == null) {
            user = "User";
            document.getElementById("username1").innerHTML =
                "Zauberbild " + user;
            document.getElementById("username2").innerHTML =
                "Welcome " + user + " !";
        }
        else {
            document.getElementById("username1").innerHTML =
                "Zauberbild " + user;
            document.getElementById("username2").innerHTML =
                "Welcome " + user + " !";
        }
        Endabgabe.crc2.font = "10rem Arial";
        Endabgabe.crc2.textAlign = "center";
        Endabgabe.crc2.strokeText(user, Endabgabe.canvaswidth / 2, Endabgabe.canvasheight / 2);
    }
    //function update(): void {
    //    crc2.clearRect(0, 0, canvaswidth, canvasheight);
    //}
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map