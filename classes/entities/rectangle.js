import Entity from "./entity";

export default class Rectangle extends Entity {
  constructor(game, x, y, width, height, color) {
    super(game, x, y, width, height);
    this.ctx = game.ctx;
    this.color = color;
    this.isDeleted = false;
  }
  draw() {
    if (!this.isDeleted) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
  }
}
