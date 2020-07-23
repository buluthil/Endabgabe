"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Circle {
        constructor(_event, _size) {
            this.position = new Endabgabe.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Endabgabe.Vector(1, 1);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new Endabgabe.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Circle = Circle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=circle.js.map