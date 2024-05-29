function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  fill('yellow');
  ellipse(width / 2, height / 2, 150, 100);
}

function keyReleased() {
  fill('blue');
  ellipse(mouseX, mouseY, 50, 75);
}

function doubleClicked() {
  clear();
}
