export default class Entity {
  constructor(game, x, y, width, height, color) {
    this.game = game;
    this.ctx = game.ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
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
