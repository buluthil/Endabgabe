namespace Endabgabe {
    
    export class Triangle extends Vector {

        position: Vector;
        velocity: Vector;
        height: number;

        constructor(_event: MouseEvent, _height: number) {
            super(_event.offsetX, _event.offsetY);
            this.position = new Vector(_event.offsetX + 200, _event.offsetY - 220);
            this.velocity = new Vector(Math.floor(Math.random()* 20) + 1, Math.floor(Math.random()* 20) + 1);
            this.height = _height;                                                                              // Höhe des Deiecks kann/soll nicht statisch festgelegt werden                                                                
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();                                                          
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x - 100 > canvaswidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.x - 300 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 300 - this.height < 0) {
                this.velocity.y = -this.velocity.y;
            } 
            if (this.position.y + 300 > canvasheight) {
                this.velocity.y = -this.velocity.y;
            }
        }

        draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.position.x - 100, this.position.y  + 300);
        crc2.lineTo(this.position.x - 300, this.position.y + 300);
        crc2.lineTo(this.position.x - 200, this.position.y + 300 - this.height);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        }   

        getType(): string {
            return "Triangle";
        }
    }
}