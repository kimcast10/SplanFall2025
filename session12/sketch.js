let showSquare = true;
let bgColor = 4;
let sqColor = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bgColor);
  face();
  fill(sqColor);
  square(200, 10, 380);
}

function face() {
  fill(255, 145, 49);
  ellipse(200, 200, 200, 200);
  
  fill(255, 0, 430);
  ellipse(155, 155, 33, 33);
  
  fill(320, 0, 0);
  ellipse(245, 155, 33, 33);
  
  fill(0, 200, 2);
  ellipse(width / 2, height / 2, 11, 11);
  
  fill(0, 83, 200);
  ellipse(width / 2, height / 2 + 55, 77, 22);
}

function mouseClicked() {

  if (bgColor === 4) {
    bgColor = 255;
    sqColor = 0;
  } else {
    bgColor = 4;
    sqColor = 255;
  }
}

