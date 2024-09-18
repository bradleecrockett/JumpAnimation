// Your Name
// Date
let pX = 300;
let pY = 350;

function setup() {
  createCanvas(600, 400);
  background(240);
  noStroke();
}

function draw() {
  background(240);
  // draw the ground
  fill('green');
  rect(0, 390, width, 20);

  
  //draw the player @ (pY, pX)
  drawPlayer(pX, pY);
}

function drawPlayer(x, y) {
  fill('red');
  rect(x, y, 30, 40);
}