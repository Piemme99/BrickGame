import Brick from "../entities/Brick";
import Paddle from "../entities/Paddle";


export default class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.paddle = new Paddle(ctx, width / 2, height - 10);
    this.entities = [];
  }
  init() {
    const bricks = createBricks(this.ctx)

    this.entities = [this.paddle, ...bricks]
  }
}
//TODO: move this
function createBricks(ctx) {
  var bricks = [];
  var brickPosition = { x: 10, y: 10 };
  for (let i = 0; i < 10; i++) {
    bricks.push(new Brick(ctx, brickPosition.x, brickPosition.y, 100, 10, "red"))
    brickPosition.x += 110;
  }
  return bricks;
}
