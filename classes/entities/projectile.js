import Entity from "./entity";

export default class Projectile extends Entity {
  constructor(ctx, x, y, radius, speed, color) {
    super(x, y, radius, radius, false);
    this.ctx = ctx;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
  }
  draw() {
    this.y += - this.speed;

    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fill();
  }
  checkCollitions(bricks) {
    for (const brick in bricks) {
      console.log("checking collision ")
      if (this.isColliding(brick)) {
        console.log("Collision !")
        brick.disabled = true;
      }
    }
  }
}
