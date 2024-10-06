import { scaleFactor, speed } from "./constants";

export function createPlayer(k, speed) {
  k.loadSprite("person", "public/person.png");

  const player = k.add([
    k.pos(k.width() / 2, (k.height() * 5) / 6),
    k.sprite("person"),
    k.area(),
    k.anchor("center"),
    k.body(),
    {
      speed,
      direction: "down",
      isInDialogue: false,
    },
    "player",
  ]);

  // Player controls
  k.onKeyDown("left", () => {
    player.flipX = true;
    player.move(-speed, 0);
    if (player.pos.x < 0) {
      player.pos.x = 0;
    }
  });

  k.onKeyDown("right", () => {
    player.flipX = false;
    player.move(speed, 0);
    if (player.pos.x > k.width() + 10) {
      player.pos.x = k.width() + 10;
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
    if (player.pos.y > 1100) {
      player.pos.y = 1100;
    }
  });

  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 125;

    if (mouseAngle > lowerBound && mouseAngle < upperBound) {
      if (player.pos.y < 0) {
        player.pos.y = 0;
      }
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound) {
      if (player.pos.y > 1100) {
        player.pos.y = 1100;
      }
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      if (player.pos.x > k.width() + 10) {
        player.pos.x = k.width() + 10;
      }
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      if (player.pos.x < 0) {
        player.pos.x = 0;
      }
      return;
    }
  });

  k.onMouseRelease(() => {
    return;
  });

  return player;
}
