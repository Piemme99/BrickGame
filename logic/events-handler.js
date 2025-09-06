import { paddleMode } from "../enums/paddleMode";

const mousePosition = { x: 0, y: 0 };

export function handleEvents(game, canvas) {
  const rect = canvas.getBoundingClientRect();
  addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX - rect.left;
    mousePosition.y = e.clientY - rect.top;
    if (game.paddle.paddleMode == paddleMode.BOUNCE) {
      game.paddle.x = mousePosition.x;
    }
  });

  addEventListener("click", (_) => {
    const ball = game.paddle.shoot(mousePosition.x, mousePosition.y)
    if (ball != undefined) {
      game.entities.push(ball);
    }
  });
}
