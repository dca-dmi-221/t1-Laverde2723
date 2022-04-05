let imagenes;
let pantalla = 1;
let songs;


function setup() {
  createCanvas(1220, 720);
  imagenes = new Imagenes(pantalla);

}

function draw() {
  background(0);
  imagenes.pantalla1();
  imagenes.pantalla2();
  imagenes.pantalla3();
  imagenes.pantalla4();
  imagenes.pantalla5();
}

function mousePressed(){
  imagenes.click(mouseX, mouseY);
}
