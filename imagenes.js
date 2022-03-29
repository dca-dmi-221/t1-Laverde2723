class Imagenes{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.menu = loadImage('/imagenes/Menu.jpg');
        this.primeraPagina = loadImage('/imagenes/primeraPagina.png');
        this.boton = new Botones({
            x: 710,
            y: 645,
            b: 345,
            h: 213,
            image: loadImage('/imangenes/Songs.png')
        })
        this.boton1 = new Botones({
            x: 1085,
            y: 460,
            b: 320,
            h: 320,
            image: loadImage('/imagenes/Playlist.png')
        })
    }

    pantalla0(){
        if(this.pantalla === 0){
            image(this.menu, 0, 0);
            imageMode(CENTER);
            this.boton.show();
            this.boton1.show();
            imageMode(CENTER);
        }
    }

    pantalla1(){
        if(this.pantalla === 1){
            image(this.primeraPagina, 0, 0);
        }
    }

    click(mouseX, mouseY){
        if(this.pantalla === 0){
            if(this.boton.cli(mouseX, mouseY)){
                this.pantalla = 1;
                console.log("click")
            }
            if(this.boton1.cli(mouseX, mouseY)){
                this.pantalla = 2;
            }
        }
    }
}