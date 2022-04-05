let imagenes;
let pantalla = 1;
let songs;
let slider;

function preload(){
  songs = loadSound("./Songs/SiVeoATuMama.mp3");
  songs = loadSound("./Songs/258.mp3");
  songs = loadSound("./Songs/Bichiyal.mp3");
  songs = loadSound("./Songs/LaZona.mp3");
  songs = loadSound("./Songs/120.mp3");
  songs = loadSound("./Songs/YoVistoAsi.mp3");
  songs = loadSound("./Songs/HaciendoQueMeAmas.mp3");
  songs = loadSound("./Songs/TeDeseoLoMejor.mp3");
}


function setup() {
  createCanvas(1220, 720);
  imagenes = new Imagenes(pantalla);
  slider = createSlider(0, 1, 0, 0.01);
  slider.position(1000,650);
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
