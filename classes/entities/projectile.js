import Entity from "./entity";

export default class Projectile extends Entity {
  constructor(game, x, y, radius, speed, color) {
    super(game, x, y, radius, radius, false);
    this.ctx = game.ctx;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
  }
  draw() {
    this.y += - this.speed;

    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;

    //TODO: change position so that hitbox matches a square of length 2*radius (probably create new Round class)
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fill();
  }
  checkCollitions(bricks) {
    for (const brick in bricks) {
      if (this.isColliding(brick)) {
        console.log("Collided !")
        brick.disabled = true;
      }
    }
  }
}
