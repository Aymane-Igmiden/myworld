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

  watchTower.onCollide("watchTower", () => {
    debug.log("hit watchTower");
  });

  watchTower.onCollideUpdate(() => {
    // Logic for when the player is colliding with the turret
  });

  watchTower.onCollideEnd(() => {
    debug.log("leave watchTower");
  });

  return watchTower;
}
