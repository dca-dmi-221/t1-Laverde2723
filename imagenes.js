class Imagenes{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.menu = loadImage('./Images/Menu.jpg');
        this.primeraPagina = loadImage('./Images/PrimeraPagina.png');
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
        this.boton2 = new Botones({
            x: 350,
            y: 400,
            b: 879,
            h: 567.,
            image: loadImage('./images/Flash1.png')
        })
        this.boton3 = new Botones({
            x: 870,
            y: 400,
            b: 345,
            h: 678,
            image: loadImage('./images/Flash2.png')
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
            image(this.primeraPagina, 600, 360);
            imageMode(CENTER);
            this.boton2.show();
            this.boton3.show();
            
        }
    }

    click(mouseX, mouseY){
        if(this.pantalla === 0){
            if(this.boton.cli(mouseX, mouseY)){
                this.pantalla = 2;
            }
            if(this.boton1.cli(mouseX, mouseY)){
                this.pantalla = 1;
            }
        }
    }
}