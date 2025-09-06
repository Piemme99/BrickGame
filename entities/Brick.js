import Entity from "./Entity";

export default class Brick extends Entity {
  constructor(ctx, x, y, width, height, color, isDeleted) {
    super(ctx, x, y, width, height);
    this.ctx = ctx;
    this.color = color;
    this.isDeleted = isDeleted;
  }
  draw() {
    if (!this.isDeleted) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
  }
}
