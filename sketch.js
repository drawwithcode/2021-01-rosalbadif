function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background("gold");
  angleMode(DEGREES);
}

function draw() {
  
  noFill()
  let myColor = lerpColor(color("tomato"), color("gold"), frameCount/600)

  

  translate(width/2, height/2)
  rotate(frameCount*2)
  stroke("gold")
  line(0,0,500,frameCount*2)
  stroke(myColor)
  ellipse(0,0,frameCount,frameCount)
  
  if(frameCount === 600) {noLoop()}
  

}

