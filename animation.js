"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Circle {
        constructor(_x, _y, _radius, _speed) {
            this.set(_x, _y, _radius, _speed);
        }
        set(_x, _y, _radius, _speed) {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
            this.speed = _speed;
            this.dx = 1 * this.speed;
            this.dy = 1 * this.speed;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.closePath();
        }
        update() {
            this.draw();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    Endabgabe.Circle = Circle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=animation.js.map