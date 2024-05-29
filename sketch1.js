function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    fill('blue');
    ellipse(100, 100, 50, 50);
  } else if (keyCode === RIGHT_ARROW) {
    fill('green');
    ellipse(200, 200, 50, 50);
  } else if (keyCode === 32) { 
    fill('red');
    ellipse(mouseX, mouseY, 75, 75);
  }
}
