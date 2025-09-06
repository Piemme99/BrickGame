import { paddleMode } from '../enums/paddleMode.js';
import Ball from './Ball.js';
import Entity from './Entity.js';


export default class Paddle extends Entity {
  static HEIGHT = 15;
  static WIDTH = 100;
  static COLOR = "white"
  static MISSILE_RADIUS = 10;
  static MISSILE_SPEED = 5;
  static MISSILE_COLOR = "blue";

  constructor(game, x, y, paddleMode) {
    super(game, x, y, Paddle.WIDTH, Paddle.HEIGHT, Paddle.COLOR)
    this.paddleMode = paddleMode;

  }
  shoot(x, y) {
    let dx = x - this.x;
    let dy = y - this.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    dx /= len;
    dy /= len;
    if (this.paddleMode == paddleMode.SHOOT) {
      this.paddleMode = paddleMode.BOUNCE;
      return new Ball(this.game, this.x, this.y - Paddle.HEIGHT, Paddle.MISSILE_RADIUS, dx * Paddle.MISSILE_SPEED, dy * Paddle.MISSILE_SPEED, Paddle.MISSILE_COLOR)
    }
    return;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
  }
}
