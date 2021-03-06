class Imagenes{
    constructor(pantalla){
        this.pantalla = pantalla;
        this.menu = loadImage('./Images/Menu.jpg');
        this.primeraPagina = loadImage('./Images/PrimeraPagina.png');
        this.segundaPagina = loadImage('./images/SegundaPagina.png');
        this.canciones = loadImage('./images/Canciones.png')
        this.terceraPagina = loadImage('./images/TerceraPagina.png');
        this.boton0 = new Botones({
            x: 459,
            y: 600,
            b: 150,
            h: 150,
            image: loadImage('./Images/Songs.png')
        })
        this.boton1 = new Botones({
            x: 782,
            y: 600,
            b: 150,
            h: 150,
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
        this.reproducir = new Botones({
            x: 610,
            y: 635,
            b: 30,
            h: 45,
            image: loadImage('./images/Reproducir.png')
        })
        this.avanzar1 = new Botones({
            x: 650,
            y: 635,
            b: 32,
            h: 65,
            image: loadImage('./images/Avanzar1.png')
        })
        this.avanzar2 = new Botones({
            x: 567,
            y: 635,
            b: 32,
            h: 65,
            image: loadImage('./images/Avanzar2.png')
            
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
    
    pantalla3(songs){
        if(this.pantalla === 3){
            image(this.segundaPagina, 600, 360);
            this.devolver.show();
            this.avanzar2.show();
            this.avanzar1.show();
            this.reproducir.show();
            imageMode(CENTER);
            fill(255);
            textSize(30);

            for (let i = 0; i < playlist[0].songs.length; i++) {
                const song = playlist[0].songs[i];
                //text(song.nombre, 315, (i*100), 300);
            }
        }
    }

    pantalla4(){
        if(this.pantalla === 4){
            image(this.terceraPagina, 600, 360);
            this.avanzar2.show();
            this.avanzar1.show();
            this.reproducir.show();
            this.devolver.show();
            imageMode(CENTER);
        }
    }

    pantalla5(){
        if(this.pantalla === 5){
            image(this.canciones, 600, 360);
            this.devolver.show();
            this.avanzar2.show();
            this.avanzar1.show();
            this.reproducir.show();
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
 