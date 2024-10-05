export function createPlayer(k, speed) {
  k.loadSprite("bean", "sprites/person.png");

  const player = k.add([
    k.pos(k.center()),
    k.sprite("bean"),
    k.area(),
    k.anchor("center"),
    k.body(),
  ]);

  // Player controls
  k.onKeyDown("left", () => {
    player.move(-speed, 0);
    if (player.pos.x < 0) {
        player.pos.x = 0;
      }
  });

  k.onKeyDown("right", () => {
    player.move(speed, 0);
    if (player.pos.x > k.width()) {
        player.pos.x = k.width();
    }
  });

  k.onKeyDown("up", () => {
    player.move(0, -speed);
    if (player.pos.y < 0) {
        player.pos.y = 0;
    }
  });

  k.onKeyDown("down", () => {
    player.move(0, speed);
    if (player.pos.y > k.height()) {
        player.pos.y = k.height();
    }
  });

  return player;
}
