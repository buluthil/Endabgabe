namespace Endabgabe {

    export class Moveable {

        position: Vector;
        velocity: Vector;
        size: number
    
        constructor(_event: MouseEvent, _size: number) {
        this.set(_event, _size);
        }
    
        set(_event: MouseEvent, _size: number): void {
            this.position = new Vector(_event.offsetX, _event.offsetY);
            this.velocity = new Vector(5, 5);
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
    }    
}