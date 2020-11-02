let bubbles = [];
let plastics = [];

function preload() {
  backgroundimage = loadImage('background2.png');

  for (let i=0; i< 3; i++){
  plastics[i]=loadImage('plastic'+i+'.png');
}
}

function setup(){
  createCanvas (windowWidth,windowHeight);
  for (let i=0; i< 20; i++){
    let x = random (width);
    let y = random (height);
    let r = random (30,50);
    let plastic = random(plastics);
    let b = new Bubble (x,y,r, plastic);
    bubbles.push (b);
   }
}

function mousePressed(){
  background(255);
  for (let i=0; i<bubbles.length; i++){
    if (bubbles[i].contains(mouseX,mouseY)){
    bubbles.splice(i, 1);
  }
}
}

function draw(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNERS);
  background(backgroundimage, 0,0, windowWidth, windowHeight);

  imageMode(CENTER);


  for (let i=0; i<bubbles.length; i++){
    bubbles[i].show();
  }

  if(bubbles.length===0){
  alert("YAY! Let's make it a better place ")
  noLoop();
}

}

class Bubble {
  constructor (x,y,r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.plastic = img;
  }


contains(px,py) {
  let d= dist(px,py,this.x, this.y);
  if (d<this.r) {
    return true;
  } else {
    return false;
  }
}


show() {
  image(this.plastic, this.x, this.y, this.r, this.r);
  // stroke ();
  // strokeWeight(5);
  // fill(this.brightness,125);
  // ellipse(this.x,this.y, this.r *2);
}
}
