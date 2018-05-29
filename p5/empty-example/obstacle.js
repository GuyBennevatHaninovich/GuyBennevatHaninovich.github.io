function Obstacle(img) {

  this.x = width
  this.w = 20;
  this.img = img;

  this.show = function () {
    if (r == 0) {
      image(img, this.x, height - 125, 50, 50)
    }
    else if (r== 2) {
      image(img, this.x, height - 120, 40, 50)
    }
    else {
      image(img, this.x, height - 95, 50)
    }
  }

  this.update = function () {
    this.x -= speed
  }

  this.hits = function(dino) {
    if (height - 100 < (height - 100 - (Dino.y + Dino.size) + Dino.size*2) && height - 100 + this.w > height - 100 - (Dino.y + Dino.size) && this.x < 50 + Dino.size && this.x + this.w > 50) {
      return true;
    }
    else {
      return false;
    }
  }
}

function newObstacle () {
    r = floor(random(0, objectSprite.length));
    b = new Obstacle(objectSprite[r], this.x, height - 125);
    obstacles.push(b);
    speed += 0.3
    spawnRate *= 0.5
}