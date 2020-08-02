"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    Endabgabe.canvas = document.querySelector("#canvas");
    Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
    Endabgabe.malen = false;
    Endabgabe.pensilThickness = 10;
    Endabgabe.canvaswidth = Endabgabe.canvas.width = window.innerWidth;
    Endabgabe.canvasheight = Endabgabe.canvas.height = window.innerHeight / 2;
    Endabgabe.eraser = false;
    Endabgabe.radius = 100;
    Endabgabe.fillobject = false;
    Endabgabe.interval = false;
    Endabgabe.animation = false;
    Endabgabe.counter = 0;
    Endabgabe.circles = [];
    Endabgabe.hearts = [];
    Endabgabe.triangles = [];
    Endabgabe.triangleheight = 200 * Math.cos(Math.PI / 6);
    Endabgabe.move = false;
    Endabgabe.url = "https://zauberbildlukas.herokuapp.com/";
    Endabgabe.crc2.strokeStyle = "Black";
    Endabgabe.symbols = [];
    Endabgabe.user = getUserName();
    function init(_event) {
        let pensilthickness = document.querySelector("input#pensilThickness");
        pensilthickness.addEventListener("input", Endabgabe.changeThickness);
        let objectSize = document.querySelector("input#objectSize");
        objectSize.addEventListener("input", Endabgabe.changeSize);
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
        let triangle = document.querySelector("button#drawTriangle");
        triangle.addEventListener("click", Endabgabe.drawTriangle);
        let heart = document.querySelector("button#drawHeart");
        heart.addEventListener("click", Endabgabe.drawHeart);
        let startanimation = document.querySelector("button#startAnimation");
        startanimation.addEventListener("click", Endabgabe.startAnimation);
        let stopanimation = document.querySelector("button#stopAnimation");
        stopanimation.addEventListener("click", Endabgabe.stopAnimation);
        let fill = document.querySelector("button#fillObject");
        fill.addEventListener("click", Endabgabe.fillObject);
        let deleteobject = document.querySelector("button#deleteObject");
        deleteobject.addEventListener("click", Endabgabe.deleteObject);
        let moveobject = document.querySelector("button#moveObject");
        moveobject.addEventListener("click", Endabgabe.moveObject);
        username();
    }
    function getUserName() {
        let user = prompt("Please enter your username:", "Username");
        if (user == null) {
            return "";
        }
        else {
            return user;
        }
    }
    function username() {
        if (Endabgabe.user == "") {
            Endabgabe.user = "User";
            document.getElementById("username1").innerHTML =
                "Zauberbild " + Endabgabe.user;
            document.getElementById("username2").innerHTML =
                "Welcome " + Endabgabe.user + " !";
        }
        else {
            document.getElementById("username1").innerHTML =
                "Zauberbild " + Endabgabe.user;
            document.getElementById("username2").innerHTML =
                "Welcome " + Endabgabe.user + " !";
        }
        Endabgabe.crc2.font = "10rem Arial";
        Endabgabe.crc2.textAlign = "center";
        Endabgabe.crc2.strokeText(Endabgabe.user, Endabgabe.canvaswidth / 2, Endabgabe.canvasheight / 2);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=canvas.js.map