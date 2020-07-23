namespace Endabgabe {

    export class Circle {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number) {
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(1, 1);
            this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        draw() {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0 ,Math.PI*2, false);
            crc2.stroke();
            crc2.closePath();
        }

    }
}