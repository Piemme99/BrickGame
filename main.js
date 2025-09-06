import Ball from './entities/Ball.js';
import { handleEvents } from './logic/events-handler.js';
import Game from './logic/Game.js';

const canvas = document.getElementById("testGame");
const ctx = canvas.getContext("2d");

const game = new Game(ctx, canvas.width, canvas.height);

game.init()
handleEvents(game, canvas);


function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.entities.forEach((entity) => entity.draw())
  game.entities.forEach((entity) => {
    if (entity instanceof Ball) {
      entity.checkCollitions(game.entities)
    }
  })
  window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);

//TODO: garbage collect (delete out of bound or deleted entities)
