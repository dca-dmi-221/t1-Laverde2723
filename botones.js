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
    cli(mx, my){
        return distancia(mx, my, this.x, this.y,) < this.b/2;
    }
    cli2(mx, my){
        return mx > this.x && mx < (this.x + this.b) && my > this.y && my < (this.y + this.h);
    }
}