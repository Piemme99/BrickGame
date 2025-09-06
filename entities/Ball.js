import Entity from "./Entity";

export default class Ball extends Entity {
  constructor(ctx, x, y, radius, xSpeed, ySpeed, color) {
    // For simplicity, the hitbox of a ball is a square of lenght 2*radius
    super(ctx, x, y, 2 * radius, 2 * radius);
    this.ctx = ctx;
    this.radius = radius;
    this.color = color;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  draw() {
    this.y += - this.ySpeed;

    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.fill();
  }
  checkCollitions(bricks) {
    for (const brick of bricks) {
      if (this.isColliding(brick) && brick !== this) {
        brick.isDeleted = true;
        this.speed = - this.speed;
      }
    }
  }
}
