"use strict";
var Endabgabe;
(function (Endabgabe) {
    function changeThickness(_event) {
        let slider = document.getElementById("pensilThickness");
        Endabgabe.pensilThickness = parseFloat(slider.value);
        Endabgabe.crc2.lineWidth = Endabgabe.pensilThickness;
        Endabgabe.crc2.save();
    }
    Endabgabe.changeThickness = changeThickness;
    function changeSize() {
        let slider = document.getElementById("objectSize");
        Endabgabe.radius = parseFloat(slider.value);
        //trianglesize = parseFloat(slider.value);
        Endabgabe.crc2.lineWidth = Endabgabe.pensilThickness;
        Endabgabe.crc2.save();
    }
    Endabgabe.changeSize = changeSize;
    function backgroundColor() {
        let backgroundcolor = document.querySelector("select#backgroundColor");
        Endabgabe.canvas.style.background = backgroundcolor.value;
        Endabgabe.crc2.lineWidth = Endabgabe.pensilThickness;
        Endabgabe.crc2.save();
    }
    Endabgabe.backgroundColor = backgroundColor;
    function pensilColor() {
        let pensilcolor = document.querySelector("select#pensilColor");
        Endabgabe.crc2.strokeStyle = pensilcolor.value;
        Endabgabe.crc2.save();
    }
    Endabgabe.pensilColor = pensilColor;
    function fillObject() {
        let color = document.getElementById("pensilColor");
        Endabgabe.fillcolor = color.value;
        Endabgabe.crc2.fillStyle = Endabgabe.fillcolor;
        Endabgabe.crc2.fill();
        Endabgabe.crc2.save();
    }
    Endabgabe.fillObject = fillObject;
    function canvasSize() {
        let canvassize = document.querySelector("select#canvasSize");
        switch (canvassize.value) {
            case ("small"):
                Endabgabe.canvaswidth = Endabgabe.canvas.width = window.innerWidth;
                Endabgabe.canvasheight = Endabgabe.canvas.height = window.innerHeight / 3;
                Endabgabe.crc2.strokeStyle;
                break;
            case ("medium"):
                Endabgabe.canvaswidth = Endabgabe.canvas.width = window.innerWidth;
                Endabgabe.canvasheight = Endabgabe.canvas.height = window.innerHeight / 2;
                Endabgabe.crc2.strokeStyle;
                break;
            case ("large"):
                Endabgabe.canvaswidth = Endabgabe.canvas.width = window.innerWidth;
                Endabgabe.canvasheight = Endabgabe.canvas.height = window.innerHeight / 1.5;
                Endabgabe.crc2.strokeStyle;
                break;
        }
        return Endabgabe.canvasheight;
    }
    Endabgabe.canvasSize = canvasSize;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=customisation.js.map