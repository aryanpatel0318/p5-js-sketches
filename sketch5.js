function setup() {
  createCanvas(400, 400);
  noLoop(); 
}

function mousePressed() {
  let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta'];

  for (let i = 0; i < 10; i++) {
    fill(colors[i % colors.length]);
    rect(mouseX+i * 20, mouseY, 20, 20);
  }
}
