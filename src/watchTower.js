import { addDialog } from "./utils/dialog.js";

export function createWatchTower(k) {
  k.loadSprite("turret", "sprites/turret.png");

  const watchTower = k.add([
    k.sprite("turret"),
    k.pos(k.width() / 10 + 10, (k.height() * 2) / 5 + 25),
    k.area({ scale: 0.75 }),
    k.anchor("center"),
    k.body({ isStatic: true }),
    "watchTower",
  ]);

  const dialog = addDialog(k, {
    height: 200,
    padding: 20,
    bgColor: [0.1, 0.1, 0.1],
    continueText: "Next",
    onContinue: () => {
      dialog.say("Continue!");
    },
  });

  watchTower.onCollide("player", () => {
    dialog.say("Welcome to my sanctuary!");
  });

  watchTower.onCollideUpdate(() => {
    // Logic for when the player is colliding with the turret
  });

  watchTower.onCollideEnd(() => {
    dialog.dismiss();
  });

  return watchTower;
}
