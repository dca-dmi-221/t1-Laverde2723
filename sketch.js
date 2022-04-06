let imagenes;
let pantalla = 3;
let playlist = []
let songs;
let slider;

function preload(){

  playlist.push(new Playlist('YHLQMDLG'));
  playlist.push(new Playlist('EL ULTIMO TOUR DEL MUNDO'));
  
  playlist[0].songs.push(new Canciones("Si veo a tu mama", "Bad bunny", 173));
  playlist[0].songs.push(new Canciones("25/8", "Bad bunny", 244));
  playlist[0].songs.push(new Canciones("Bichiyal", "Bad bunny", 197));
  playlist[0].songs.push(new Canciones("La Zona", "Bad bunny", 137));

  playlist[1].songs.push(new Canciones("120", "Bad bunny", 152));
  playlist[1].songs.push(new Canciones("Yo visto asi", "Bad bunny", 224));
  playlist[1].songs.push(new Canciones("Haciendo que me amas", "Bad bunny", 218));
  playlist[1].songs.push(new Canciones("Te deseo lo mejor", "Bad bunny", 140));

  
}


function setup() {

  createCanvas(1220, 720);
  imagenes = new Imagenes(pantalla);
  slider = createSlider(0, 1, 0, 0.01);
  slider.position(1000,650);
}

 
function draw() {
  background(0);
  imagenes.pantalla1();
  imagenes.pantalla2();
  imagenes.pantalla3(preload());
  imagenes.pantalla4();
  imagenes.pantalla5();


}

function mousePressed(){
  imagenes.click(mouseX, mouseY);
}

