import Entity from './classes/entities/entity.js';
import Projectile from './classes/entities/projectile.js';
import Rectangle from './classes/entities/rectangle.js';
import Game from './classes/game.js';
import Shooter from './classes/shooter.js';

const canvas = document.getElementById("testGame");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

//TODO:  move this to initiate game methode
const game = new Game(ctx, canvas.width, canvas.height);
const shooter = new Shooter(game);
const mousePosition = { x: 0, y: 0 };

const entities = [];
const bricks = createBricks();
entities.push(...bricks);
entities.push(shooter)

//TODO: move this to handle events function
addEventListener("mousemove", (e) => {
  mousePosition.x = e.clientX - rect.left;
  mousePosition.y = e.clientY - rect.top;
  shooter.x = mousePosition.x;
});

addEventListener("click", (_) => {
  entities.push(shooter.shoot(mousePosition.x, mousePosition.y));

  var entity = new Entity(game, mousePosition.x, mousePosition.y, 10, 10)
  bricks.forEach((brick) => {
    if (brick.isColliding(
      entity
    )) {
      console.log("IS COLLINDING !!")
      brick.isDeleted = true;
    }
    else { console.log("NOT COLLINDING") }
  })
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  entities.forEach((entity) => entity.draw())
  entities.forEach((entity) => {
    if (entity instanceof Projectile) {
      console.log(entity.x, entity.y)
      entity.checkCollitions(bricks)
    }
  })



  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

//TODO: redo this cleaner
function createBricks() {
  var bricks = [];
  var brickPosition = { x: 10, y: 10 };
  for (let i = 0; i < 10; i++) {
    bricks.push(new Rectangle(game, brickPosition.x, brickPosition.y, 100, 10, "red"))
    brickPosition.x += 110;
  }
  return bricks;
}
//TODO: garbage collect (delete out of bound or deleted entities)
