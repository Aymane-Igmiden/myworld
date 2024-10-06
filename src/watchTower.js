import { displayDialogue } from "./utils";
import { dialogueData } from "./constants";

export function createWatchTower(k, player) {
  k.loadSprite("turret", "public/turret.png");

  const watchTower = k.add([
    k.sprite("turret"),
    k.pos(k.width() / 10 + 15, k.height() * 4 / 6),
    k.area({ scale: 0.75 }),
    k.anchor("center"),
    k.body({ isStatic: true }),
    "watchTower",
  ]);

  watchTower.onCollide("player", () => {
    player.isInDialogue = true;
    displayDialogue(
      dialogueData.watchTower,
      () => (player.isInDialogue = false)
    );
  });

  return watchTower;
}
