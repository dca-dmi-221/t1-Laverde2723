class Botones{
    constructor({x, y, b, h, image}){
        this.x = x;
        this.y = y;
        this.b = b;
        this.h = h;
        this.image = image;
        this.click = false;
    }

    show(){
        image(this.image, this.x, this.y);
    }
    cli(mouseX, mouseY){
        return distancia(mouseX, mouseY, this.x, this.y,) < this.b/2;
    }
    cli2(mouseX, mouseY){
        return mouseX > this.x && mouseX < (this.x + this.b) && mouseY > this.y && mouseY < (this.y + this.h);
    }
}