namespace Endabgabe {

    export class Circle extends Vector { 

        velocity: Vector;
        size: number;

        constructor(_event: MouseEvent, _size: number, _velocity: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(Math.floor(Math.random()* 20) + 1, Math.floor(Math.random()* 20) + 1);
            this.size = _size;
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy(); // Offset == eine Kopie von Velocity;
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.position.x + this.size + pensilThickness / 2 > canvaswidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - this.size - pensilThickness / 2 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y - this.size - pensilThickness / 2 < 0) {
                this.velocity.y = -this.velocity.y;
            } 
            if (this.position.y + this.size + pensilThickness / 2 > canvasheight) {
                this.velocity.y = -this.velocity.y;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0 ,Math.PI*2, false);
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
        }

        getType(): string {
            return "Circle";
        }
    }
}