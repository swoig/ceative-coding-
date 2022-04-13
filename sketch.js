let playerX = 200;
let playerY = 350;
let targetX = 150;
let targetY = 50;
let playerRadius = 10;
let targetSpeed = 1;
let score = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  drawBackground('🧙‍♂️');
}

function draw() {
  if(targetX >= playerX - playerRadius && targetX <= playerX + playerRadius && targetY >= playerY - playerRadius && targetY <= playerY + playerRadius)   {
    score = score + 1;
    targetSpeed = score;
    console.log('your score is', score);
    targetX = Math.random() * width;
    targetY = Math.random() * height;
    
    drawBackground('🧙‍♂️');
  } else {
    drawBackground('🧙‍♂️');
  }
  
  text('🐙', targetX, targetY)
  circle(playerX, playerY, playerRadius * 2);
  
  let randomNumber = Math.random();
  
  if(randomNumber > 0.5) {
    // move right
    targetX = targetX + Math.random() * targetSpeed;
  } else {
    // move left
    targetX = targetX - Math.random() * targetSpeed;
  }
  
  randomNumber = Math.random();
  
  if(randomNumber > 0.5) {
    // move down
    targetY = targetY + Math.random() * targetSpeed;
  } else {
    // move up
    targetY = targetY - Math.random() * targetSpeed;
  }

  
  if(keyIsDown(LEFT_ARROW) == true) {
    playerX = playerX - 5;
  }
  if(keyIsDown(RIGHT_ARROW) == true) {
    playerX = playerX + 5;
  }
  if(keyIsDown(UP_ARROW) == true) {
    playerY = playerY - 5;
  }
  if(keyIsDown(DOWN_ARROW) == true) {
    playerY = playerY + 5;
  }
}

function drawBackground(backgroundText) {
  text(backgroundText, Math.random() * width, Math.random() * height);
}