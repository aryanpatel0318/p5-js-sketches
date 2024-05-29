function setup() {
  createCanvas(400,400);
}

function mousePressed() {
  stroke('purple');
  line(0,0,width,height);
}

function mouseReleased() {
  stroke('orange');
  line(width,0,0,height);
}
