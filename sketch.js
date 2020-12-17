var diam1=0;

function setup() {
  createCanvas(600, 600);
  background("#800020");
}

function draw() {
  
  fill("#000000");
  stroke("#EEF8FF");
  strokeWeight(3)
  ellipse(50,20,diam1,diam1);
  fill("#312A37");
  ellipse(random(width),random(height),1,20);
  fill("#6B6D28");
  textSize(60);
  textFont("Birch");
  text("UTOPIA",200,200);
  square(mouseX, mouseY, 20);
}

function mousePressed(){
    if(diam1>400){
       diam1=0;
    }else{
     diam1=diam1+5;
    }
    
}