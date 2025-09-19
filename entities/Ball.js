import Entity from "./Entity";

export default class Ball extends Entity {
  constructor(game, x, y, radius, xSpeed, ySpeed, color) {
    // For simplicity, the hitbox of a ball is a square of lenght 2*radius
    super(game, x, y, 2 * radius, 2 * radius, color);
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  draw() {
    this.y += this.ySpeed;
    this.x += this.xSpeed;

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
        this.ySpeed *= -1;
      }
    }
  }
  checkOutOfBounds() {

    if ((this.x < 0) || (this.x > this.game.width)) {
      this.xSpeed = - this.xSpeed;
    }
    if ((this.y < 0) || (this.y > this.game.height)) {
      this.ySpeed = - this.ySpeed;
    }
  }
}
