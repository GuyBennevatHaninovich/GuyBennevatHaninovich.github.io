let size, posY, gravity, velY, posX, halfSize, minimumDistance, xCenter, yCenter, distance, b, obstacleSize, gameSound;
let speed = 5;
let obstacles = [];
let spawnRate = 2000;
let llamaSprite = [];
let objectSprite = [];
let bg = [];
let imgNum = 0;
let bgNum = 0;
let r = 0;
let score = 0;
let font;


function preload() {
  soundFormats('mp3');
  gameSound = loadSound('music.mp3');
  font = loadFont('PressStartP2.ttf')
  bg[0] = loadImage("background/0.png");
  bg[1] = loadImage("background/1.png");
  bg[2] = loadImage("background/2.png");
  bg[3] = loadImage("background/3.png");
  bg[4] = loadImage("background/4.png");
  bg[5] = loadImage("background/5.png");
  bg[6] = loadImage("background/6.png");
  bg[7] = loadImage("background/7.png");
  llamaSprite[0] = loadImage('images/llama0.png');
  llamaSprite[1] = loadImage('images/llama1.png');
  llamaSprite[2] = loadImage('images/llama2.png');
  llamaSprite[3] = loadImage('images/llama3.png');
  llamaSprite[4] = loadImage('images/llama4.png');
  llamaSprite[5] = loadImage('images/llama5.png');
  llamaSprite[6] = loadImage('images/llama6.png');
  objectSprite[0] = loadImage('images/fence.png');
  objectSprite[1] = loadImage('images/car.png');
  objectSprite[2] = loadImage('images/trashcan.png')

}


function setup() {
  createCanvas(800,400);
  gameSound.setVolume(0.1);
  gameSound.play();
  gameSound.loop();
  dino = new Dino();
  setInterval(newObstacle, spawnRate);
}

function draw() {
  background(bg[bgNum])
  stroke(0);
  rect(0, height - 80, width, height - 80)
  dino.show(imgNum);
  if (frameCount % 5 == 0) {
    bgNum = (bgNum + 1) % 8
    imgNum = (imgNum + 1) % 7
  }
  dino.jump();
  dino.move();
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
    obstacles[i].update();
    if (obstacles[i].hits() === true) {
      gameOver();
    }
    if (obstacles[i].x < 0) {
      obstacles.splice(i, 1);
      score += 1;
    }
  }
  textFont(font);
  fill(255);
  text("Score: " + score, width - 200, 50)
}



function gameOver() {
  noLoop();
  noStroke();
  textFont(font);
  textSize(40);
  fill(255);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  let reset = createButton("Press here to restart");
  reset.position(width / 2, height / 2 + 20);
  reset.mousePressed(refreshPage);
  gameSound.stop();
}

function refreshPage(){
    window.location.reload();
    gameSound.play();
}
