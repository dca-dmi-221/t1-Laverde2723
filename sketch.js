let imagenes;
let pantalla = 3;
let songs;
let slider;

function preload(){
  songs = loadSound("./Songs/Training.mp3");
}


function setup() {
  createCanvas(1220, 720);
  imagenes = new Imagenes(pantalla);
  slider = createSlider(0, 1, 0, 0.01);
  songs.stop();
}
 
function draw() {
  background(0);
  imagenes.pantalla1();
  imagenes.pantalla2();
  imagenes.pantalla3();
  imagenes.pantalla4();
  imagenes.pantalla5();
  songs.setVolume(slider.value());
}

function mousePressed(){
  imagenes.click(mouseX, mouseY);
}
