"use strict";
var Endabgabe;
(function (Endabgabe) {
    function changeThickness(_event) {
        let slider = document.getElementById("pensilThickness");
        Endabgabe.pensilThickness = parseFloat(slider.value);
        Endabgabe.crc2.lineWidth = Endabgabe.pensilThickness;
        return Endabgabe.pensilThickness;
    }
    Endabgabe.changeThickness = changeThickness;
    function changeSize() {
        let slider = document.getElementById("objectSize");
        Endabgabe.radius = parseFloat(slider.value);
        return Endabgabe.radius;
    }
    Endabgabe.changeSize = changeSize;
    function backgroundColor() {
        let backgroundcolor = document.querySelector("select#backgroundColor");
        Endabgabe.canvas.style.background = backgroundcolor.value;
    }
    Endabgabe.backgroundColor = backgroundColor;
    function pensilColor(_event) {
        let pensilcolor = document.querySelector("select#pensilColor");
        Endabgabe.crc2.strokeStyle = pensilcolor.value;
        return Endabgabe.crc2.strokeStyle; // Color changes back to black after changing canvas size
    }
    Endabgabe.pensilColor = pensilColor;
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