let scrollDiv
let theImages = []
let universe = 5000
let darkBlue
let lightBlue

preload = () => {
  // src, startX, startY, scale
  theImages.push( new Fragment("Diamond.png", .005, 0.8) );
  theImages.push( new Fragment("WaterfallFragment1.png", .6, 1.1) );
  theImages.push( new Fragment("DropsOnly.png", .2, 0.5) );
  theImages.push( new Fragment("CrystalFormationTopLeft.png",  .3, 0.5) );
  theImages.push( new Fragment("Inverhaugh.png", .4, 0.9) );
  theImages.push( new Fragment("MountainStripeTriangle.png", .5, 0.9) );

}
setup = () => {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke(0)
  // Select scrollDiv by id and change position and width/height
  scrollDiv = select("#scrollDiv");
  scrollDiv.position(0, 0);
  darkBlue = color(20,20,50);
  lightBlue = color(70,70,150);

}


draw = () => {
  setGradient(0, 0, width, height, darkBlue, lightBlue);
  //background(20,20,50);
  for ( img of theImages){
    img.roam()
    img.show()
  }
  showMarker()
}


showMarker = () => {
  let markerY = map(scrollDiv.elt.scrollTop, 0, 10000, 20, (height-20) );
  //console.log(markerY);
  fill(100,100,255)
  push()
    translate(0,markerY)
    rotate(radians(45))
    rect(0,0,40,40);
  pop()
}

windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
    scrollDiv.position(0, 0);
}



class Fragment {

  // e.g. ('img.png', 0.1, 0.5)
  constructor(src, location, scale) {
    this.src = src
    this.img = loadImage(src, (loaded) => {
        this.srcH = loaded.height
        this.srcW = loaded.width
        this.dispW = min(this.srcW, windowWidth)
        this.dispH = this.dispW * (this.srcH / this.srcW)
        this.x = ( windowWidth - this.dispW) / 2 ;
        this.y = location*universe;
    });
    //this.height = windowWidth*(this.img.height/this.img.width)
    this.blendMode = random([SCREEN, MULTIPLY, OVERLAY ])
    this.variation = random(0.5, 1.5);
    this.scale = scale;
  }


  roam(){
   if ( random(0,2)  < 1 ){
     this.x = this.x + ( noise(frameCount) - 0.5 ) * 3
   }
   if ( random(0,2)  < 1 ){
     this.y = this.y + ( noise(scrollDiv.elt.scrollTop) - 0.5 ) *3
   }
 }
 show(){
   push()
     //scale(this.scaleFactor)
     translate(0, -scrollDiv.elt.scrollTop*this.variation)
     blendMode(this.blendMode);
     rotate(PI*noise())
     image(this.img,this.x,this.y, this.dispW*this.scale, this.dispH *this.scale)
   pop();
 }
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
