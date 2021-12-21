function setup() {
  createCanvas(displayWidth, displayHeight);
  background(15);
  colorMode(HSB)

}

function draw () {
  stroke(255, 155);
  fill(frameCount&360, 70,100);
  var x= sin(radians(frameCount*0.13))*width/2;
  var y= cos(radians(1000+frameCount*0.13))*height/2;
  var x2= noise(frameCount*0.033)*450;
  var y2= noise(frameCount*0.033)*450;
  ellipse(x, y, x2, y2);
  ellipse(frameCount*noise, frameCount*noise, x2, y2);
  ellipse(width-(2.5*x), height-(2.5*y),x2,y2);
  
  ellipse(x+4, y+8, x2, y2);
  ellipse(frameCount*noise, frameCount*noise, x2, y2);
  ellipse(width-(2.5*x), height-(2.5*y),x2,y2);

  ellipse(x, y-8, x2, y2);
  ellipse(frameCount*noise, frameCount*noise, x2, y2);
  ellipse(width-(2.5*x), 12-height-(2.5*y),x2,y2);

  ellipse(x, y+12, x2, y2);
  ellipse(frameCount*noise, frameCount*noise, x2, y2);
  ellipse(width-(2.5*x), 8+height-(2.5*y),x2,y2);

  ellipse(x+6, y-12, x2, y2);
  ellipse(frameCount*noise, frameCount*noise, x2, y2);
  ellipse(width-(2.5*x), 8-height-(2.5*y),x2,y2);

  
}