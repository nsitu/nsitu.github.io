var width = 500;
var height = 500;
var stemX = width/2;
var stemY = height/2;
var stemW= 10;
var stemH=200;

let flowers = [];
let images = [];

function setup(){
  createCanvas(500,500);
  background(0);
  for(let i = 0; i < 4; i++){
    var anImage = createImg(i+'.png');
    anImage.hide();
    images.push(anImage);
  }
  for(let i = 0; i < 5; i++){
    var flowerX = random(0, width);
    flowers.push(new Flower(flowerX, 300));
  }
}
function draw(){
  background(0);
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }
}
function mouseMoved(){
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].grow();
  }
}
function mouseClicked(){
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].clip();
  }
}

class Flower{
  constructor(x,y){
    this.stemX = x;
    this.stemY = y;
    this.stemW = 5;
    this.stemH = 200;
    this.growRate = random(0.5,1.5);
    this.leafAdjustment = random(1.8,2);
    this.colorAdjustment = random(0.2,1);
    this.flowerDiameter = 100;
    this.flowerNumber = Math.floor(Math.random() * 4);
    console.log(this.flowerNumber);
  }
  display(){
    strokeWeight(0);
    fill(this.colorAdjustment*40,this.colorAdjustment*255,this.colorAdjustment*40);
    rect(this.stemX, this.stemY, this.stemW, this.stemH);
    rect(this.stemX, this.stemY+ this.stemY/this.leafAdjustment, 20, 10);
    fill(this.colorAdjustment*142,this.colorAdjustment*107,this.colorAdjustment*220);
    ellipse(this.stemX, this.stemY, this.flowerDiameter/4);
    image(images[this.flowerNumber],
      this.stemX-(this.flowerDiameter/2),
      this.stemY-(this.flowerDiameter/2),
      this.flowerDiameter,
      this.flowerDiameter
    );
    fill(242,107,220,100);
    ellipse(this.stemX, this.stemY, this.flowerDiameter/2);
  }
  grow(){
    this.stemH = this.stemH + this.growRate;
    this.stemY = this.stemY - this.growRate;
    this.stemW = this.stemW + (this.growRate*0.05);
    this.flowerDiameter = this.flowerDiameter + this.growRate;
  }
  clip(){
    this.stemH = 200;
    this.stemY = 300;
    this.stemW = 5;
    this.flowerDiameter = 100;
  }
}
