"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Heart {
        constructor(_event) {
            this.set(_event);
        }
        set(_event) {
            this.position = new Endabgabe.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Endabgabe.Vector(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
        }
        move(_timeslice) {
            let offset = this.velocity.copy(); // Offset == eine Kopie von Velocity;
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x - 100 > Endabgabe.canvaswidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - 300 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 300 < 0) {
                this.velocity.y = -this.velocity.y;
            }
            if (this.position.y + 300 > Endabgabe.canvasheight) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            Endabgabe.crc2.beginPath();
            /*crc2.bezierCurveTo(this.position.x + 25, this.position.y + 12, this.position.x + 20, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x, this.position.y - 37.5, this.position.x, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + -55, this.position.y - 40, this.position.x -35, this.position.y - 18, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x - 20, this.position.y + 39.5, this.position.x, this.position.y + 17.5, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + 30, this.position.y + 37.5, this.position.x + 30, this.position.y, this.position.x, this.position.y);
            crc2.bezierCurveTo(this.position.x + 10, this.position.y - 15, this.position.x, this.position.y - 3, this.position.x, this.position.y);*/
            Endabgabe.crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
            Endabgabe.crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            Endabgabe.crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
            Endabgabe.crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            Endabgabe.crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            Endabgabe.crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
        }
    }
    Endabgabe.Heart = Heart;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=heart.js.map