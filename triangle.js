"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Triangle extends Endabgabe.Vector {
        constructor(_event, _height) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Endabgabe.Vector(_event.offsetX + 200, _event.offsetY - 220);
            this.velocity = new Endabgabe.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
            this.height = _height; // Höhe des Deiecks kann/soll nicht statisch festgelegt werden                                                                
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x - 100 > Endabgabe.canvaswidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - 300 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 300 - this.height < 0) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + 300 > Endabgabe.canvasheight) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.position.x - 100, this.position.y + 300);
            Endabgabe.crc2.lineTo(this.position.x - 300, this.position.y + 300);
            Endabgabe.crc2.lineTo(this.position.x - 200, this.position.y + 300 - this.height);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.beginPath();
        }
        getType() {
            return "Triangle";
        }
    }
    Endabgabe.Triangle = Triangle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=triangle.js.map