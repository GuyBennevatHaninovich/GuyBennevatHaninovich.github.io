let size, posY, gravity, velY, posX, halfSize, minimumDistance, xCenter, yCenter, distance, b, obstacleSize, bg, gameSound;
let speed = 5;
let obstacles = [];
let spawnRate = 2000;
let llamaSprite = [];
let objectSprite = [];
let imgNum = 0;
let r = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  gameSound = loadSound('music.mp3');
  bg = loadImage("images/background.jpg");
  llamaSprite[0] = loadImage('images/llama0.png');
  llamaSprite[1] = loadImage('images/llama1.png');
  llamaSprite[2] = loadImage('images/llama2.png');
  llamaSprite[3] = loadImage('images/llama3.png');
  llamaSprite[4] = loadImage('images/llama4.png');
  llamaSprite[5] = loadImage('images/llama5.png');
  llamaSprite[6] = loadImage('images/llama6.png');
  objectSprite[0] = loadImage('images/fence.png');
  objectSprite[1] = loadImage('images/car.png');

}


function setup() {
  gameSound.setVolume(0.1);
  gameSound.play();
  gameSound.playMode('sustain');
  createCanvas(800,400);
  dino = new Dino();
  setInterval(newObstacle, spawnRate);
}

function draw() {
  background(bg);
  stroke(0);
  rect(0, height - 80, width, height - 80)
  dino.show(imgNum);
  if (frameCount % 5 == 0) {
    imgNum = (imgNum + 1) % 7
  }
  dino.jump();
  dino.move();
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
    obstacles[i].update();
    if (obstacles[i].hits() === true) {
      gameOver();
      gameSound.stop();
    }
    if (obstacles[i].x < 0) {
      obstacles.splice(i, 1);
    }
  }
}



function gameOver() {
  noLoop();
  noStroke();
  textSize(40);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  text("Press f5 to restart", width / 2, height / 2 + 20);
}
