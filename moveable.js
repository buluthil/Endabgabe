"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Moveable {
        constructor(_event, _size) {
            this.set(_event, _size);
        }
        set(_event, _size) {
            this.position = new Endabgabe.Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Endabgabe.Vector(5, 5);
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
    }
    Endabgabe.Moveable = Moveable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map