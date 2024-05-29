function setup() {
  createCanvas(400, 400);
  noLoop();
}

function mousePressed() {
  let colors = ['red','green','blue','yellow','purple'];

  for (let i = 0; i < 5; i++) {
    noFill();
    stroke(colors[i % colors.length]);
    ellipse(mouseX, mouseY, 10 + i * 10, 10 + i * 10);
  }
}
