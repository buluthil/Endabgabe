namespace Endabgabe {

    export class Circle {
        x: number;
        y: number;
        speed: number;
        dx: number;
        dy: number;
        radius: number;

        constructor(_x: number, _y: number, _radius: number, _speed: number) {
            this.set(_x, _y, _radius, _speed);
        }

        set(_x: number, _y: number, _radius: number, _speed: number): void {
            this.x = _x;
            this.y = _y;
            this.radius = _radius;
            this.speed = _speed;
            this.dx = 1 * this.speed;
            this.dy = 1 * this.speed;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Circle): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        draw() {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0 ,Math.PI*2, false);
            crc2.stroke();
            crc2.closePath();
        }

        update() {
            this.draw();
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}