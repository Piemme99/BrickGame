import Ball from './Ball.js';
import Entity from './Entity.js';

export default class Paddle extends Entity {
  static HEIGHT = 15;
  static WIDTH = 100;
  static COLOR = "white"
  static MISSILE_RADIUS = 10;
  static MISSILE_SPEED = 5;
  static MISSILE_COLOR = "blue";

  constructor(ctx, x, y) {
    super(ctx, x, y, Paddle.WIDTH, Paddle.HEIGHT, Paddle.COLOR)
  }
  shoot(x) {
    return new Ball(this.ctx, x, this.y - Paddle.HEIGHT, Paddle.MISSILE_RADIUS, 0, Paddle.MISSILE_SPEED, Paddle.MISSILE_COLOR)
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
  }
}
