class Imagenes{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.menu = loadImage('./Images/Menu.jpg');
        this.primeraPagina = loadImage('./Images/PimeraPagina.png');
        this.boton = new Botones({
            x: 500,
            y: 600,
            b: 233,
            h: 2345,
            image: loadImage('./Images/Songs.png')
        })
        this.boton1 = new Botones({
            x: 750,
            y: 600,
            b: 750,
            h: 600,
            image: loadImage('./Images/Playlist.png')
        })
    }

    pantalla0(){
        if(this.pantalla === 0){
            image(this.menu, 600, 360);
            imageMode(CENTER);
            this.boton.show();
            this.boton1.show();
            imageMode(CENTER);
        }
    }

    pantalla1(){
        if(this.pantalla === 1){
            image(this.primeraPagina, 0, 0);
            imageMode(CENTER);

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