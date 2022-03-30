let imagenes;
let pantalla = 0;


function preload(){

}

function setup() {
  createCanvas(1220, 720);
  imagenes = new Imagenes(pantalla);
}

function draw() {
  background(0);
  imagenes.pantalla0();
  imagenes.pantalla1();
}

function mousePressed(){
  imagenes.click(mouseX, mouseY);
}

