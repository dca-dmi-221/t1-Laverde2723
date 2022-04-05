class Imagenes{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.menu = loadImage('./Images/Menu.jpg');
        this.primeraPagina = loadImage('./Images/PrimeraPagina.png');
        this.segundaPagina = loadImage('./images/SegundaPagina.png');
        this.caciones = loadImage('./images/Canciones.png')
        this.terceraPagina = loadImage('./images/TerceraPagina.png');
        this.boton0 = new Botones({
            x: 459,
            y: 600,
            b: 60,
            h: 20,
            image: loadImage('./Images/Songs.png')
        })
        this.boton1 = new Botones({
            x: 782,
            y: 600,
            b: 50,
            h: 20,
            image: loadImage('./Images/Playlist.png')
        })
        this.boton2 = new Botones({
            x: 340,
            y: 400,
            b: 200,
            h: 200,
            image: loadImage('./images/Flash1.png')
        })
        this.boton3 = new Botones({
            x: 870,
            y: 400,
            b: 200,
            h: 300,
            image: loadImage('./images/Flash2.png')
        })
        this.devolver = new Botones({
            x: 1125,
            y: 129,
            b: 50,
            h: 50,
            image: loadImage('./images/Devolver.png')
        })
    }

    pantalla1(){
        if(this.pantalla === 1){
            image(this.menu, 600, 360);
            imageMode(CENTER);
            this.boton0.show();
            this.boton1.show();
            imageMode(CENTER);
        }
    }

    pantalla2(){
        if(this.pantalla === 2){
            image(this.primeraPagina, 600, 360);
            imageMode(CENTER);
            this.boton2.show();
            this.boton3.show();
            this.devolver.show();
            
        }
    }
    
    pantalla3(){
        if(this.pantalla === 3){
            image(this.segundaPagina, 600, 360);
            this.devolver.show();
            this.boton3.show();
            this.boton3.show();
            this.boton3.show();
            this.boton3.show();
            imageMode(CENTER);
        }
    }

    pantalla4(){
        if(this.pantalla === 4){
            image(this.terceraPagina, 600, 360);
            this.devolver.show();
            imageMode(CENTER);
        }
    }

    pantalla5(){
        if(this.pantalla === 5){
            image(this.caciones, 600, 360);
            this.devolver.show();
            imageMode(CENTER)
        }
    }

    click(mouseX, mouseY){
        if(this.pantalla === 1){
            if(this.boton0.cli(mouseX, mouseY)){
                this.pantalla = 5;
            }
        }
        if(this.pantalla === 1){
            if(this.boton1.cli(mouseX, mouseY)){
                this.pantalla = 2;
            }
        }
        if(this.pantalla === 2){
            if(this.boton3.cli(mouseX, mouseY)){
                this.pantalla = 3;
            }
            if(this.boton2.cli(mouseX, mouseY)){
                this.pantalla = 4;
            }
            if(this.devolver.cli(mouseX, mouseY)){
                this.pantalla = 1
            }
        }
        if(this.pantalla === 3){
            if(this.devolver.cli(mouseX, mouseY)){
                this.pantalla = 2
            }
        }
        if(this.pantalla === 4){
            if(this.devolver.cli(mouseX, mouseY)){
                this.pantalla = 2
            }
        }
        if(this.pantalla === 5){
            if(this.devolver.cli(mouseX, mouseY)){
                this.pantalla = 1
            }
        }
    }
 }
