export default class Entity {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  isColliding(entity) {
    var leftCollides = this.x - this.width / 2 < entity.x + entity.width / 2
    var rightCollides = this.x + this.width / 2 > entity.x - entity.width / 2
    var upCollides = this.y - this.height / 2 < entity.y + entity.height / 2
    var downCollides = this.y + this.height / 2 > entity.y - entity.height / 2
    return (
      leftCollides && rightCollides && upCollides && downCollides
    );
  }
}
