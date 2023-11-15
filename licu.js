function llolo(){
window.location="iler.html"
}

function llili(){
    window.location="tulor.html"
    }

    function llulu(){
        window.location="yuler.html"
        }
        
        objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estatus: detectando objetos";
}



function draw() {
  image(img, 0, 0, 640, 420);

    
}
