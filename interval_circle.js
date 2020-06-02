
function setup() {
  createCanvas(500, 500);
  frameRate(30);
}


function draw() {

  const coords = getCircleCoord();
  const percent = 100 * (coords.t + PI) / (2 * PI);
  const sinValue = sin(coords.t * PI / 2);
  const r = map(sinValue, -1.0, 1.0, 0, 255);
  const g = map(sinValue % 0.5, -1.0, 1.0, 0, 255);
  background(r, g, 0);
  
  stroke(255, 255, 255);
  noFill();
  ellipse(width/2, height/2, width, height);
  fill(255);
  const knobRadius = 15;
  const knobX = ((width/2 - knobRadius) * cos(coords.t)) + (width/2);
  const knobY = ((height/2 - knobRadius) * sin(coords.t)) + (height/2);
  circle(knobX, knobY, knobRadius*2);
  
}

function getCircleCoord() {
  const dx = mouseX - width/2;
  const dy = mouseY - height/2;
  return {
    r: sqrt( sq(dx) + sq(dy) ),
    t: atan2(dy, dx)
  };
}
