import Brick from "../entities/Brick";
import Paddle from "../entities/Paddle";
import { paddleMode } from "../enums/paddleMode";


export default class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.paddle = new Paddle(this, width / 2, height - 10, paddleMode.SHOOT);
    this.entities = [];
  }
  init() {
    const bricks = createBricks(this)

    this.entities = [this.paddle, ...bricks]
  }
}
//TODO: move this
function createBricks(game) {
  var bricks = [];
  var brickPosition = { x: 10, y: 10 };
  for (let i = 0; i < 10; i++) {
    bricks.push(new Brick(game, brickPosition.x, brickPosition.y, 100, 10, "red"))
    brickPosition.x += 110;
  }
  return bricks;
}
