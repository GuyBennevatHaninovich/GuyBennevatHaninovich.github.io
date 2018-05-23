class Dino {
  constructor() {
  Dino.size = 20;
  Dino.y = 0;
  gravity = 0.5;
  velY = 10;
}

  Dino(){
  }

  show(imgNum) {
    image(llamaSprite[imgNum], 50, height - 115 - (Dino.y + Dino.size), 65, 65)
}

  jump() {
    if (keyCode === UP_ARROW && Dino.y == 0 && keyIsPressed === true) {
      velY = 10;
    }
}

  move() {
    Dino.y += velY
    if (Dino.y > 0) {
      velY -= gravity;
    }
    else {
      velY = 0;
      Dino.y = 0;
      keyIsPressed === false;
    }
  }
}