"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Circle extends Endabgabe.Vector {
        constructor(_event, _size, _velocity) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Endabgabe.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Endabgabe.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = this.velocity.copy(); // Offset == eine Kopie von Velocity;
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x + this.size + Endabgabe.pensilThickness / 2 > Endabgabe.canvaswidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size - Endabgabe.pensilThickness / 2 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size - Endabgabe.pensilThickness / 2 < 0) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + this.size + Endabgabe.pensilThickness / 2 > Endabgabe.canvasheight) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.beginPath();
        }
        getType() {
            return "Circle";
        }
    }
    Endabgabe.Circle = Circle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=circle.js.map