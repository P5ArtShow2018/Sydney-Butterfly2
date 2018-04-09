var x = 200; var y = 200;

function preload(){
butterfly = loadImage("assets/butterfly.png")
}


function setup() {
createCanvas(500,500);
  
}

function draw() {
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
  noStroke();
  background(0,200,200);
  image(butterfly, x, y);
  fill(255);
  ellipse(140,160,50);
  fill(255);
  ellipse(180,160,70);
  fill(255);
  ellipse(210,160,50);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    y -= 5;
  } else if(keyCode === DOWN_ARROW) {
    y += 5;
  } else if(keyCode === LEFT_ARROW) {
    x -= 5;
  } else if(keyCode === RIGHT_ARROW) {
    x += 5;
  }
}