function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  if (keyCode === 65) { 
    fill('purple');
    triangle(100, 100, 150, 50, 200, 100);
  } else if (keyCode === 66) { 
    fill('orange');
    triangle(250, 250, 300, 200, 350, 250);
  }
}

function mousePressed() {
  fill('blue'); 
  let sideLength = 100;
  let height = (sqrt(3)/2)*sideLength;
  let x = mouseX;
  let y = mouseY;
  triangle(x,y-(2/3)*height,x-sideLength/2,y+(1/3) * height, x + sideLength/2,y+(1/3)*height);
}
