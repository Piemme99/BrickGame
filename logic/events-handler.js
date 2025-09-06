
const mousePosition = { x: 0, y: 0 };

export function handleEvents(game, canvas) {
  const rect = canvas.getBoundingClientRect();
  addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX - rect.left;
    mousePosition.y = e.clientY - rect.top;
    game.paddle.x = mousePosition.x;
  });

  addEventListener("click", (_) => {
    game.entities.push(game.paddle.shoot(mousePosition.x, mousePosition.y));
  });
}
