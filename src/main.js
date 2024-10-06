import { k } from "./kaboomContext.js";
import { createPlayer } from "./player.js";
import { createWatchTower } from "./watchTower.js";
import { scaleFactor } from "./constants.js";
import { setCamScale } from "./utils.js";

k.loadSprite("map", "bg.png");
k.setBackground(k.Color.fromHex("#000000"));

k.scene("main", async () => {
  const map = k.add([k.sprite("map")], k.pos(0, 0), k.scale(scaleFactor));

  const player = createPlayer(k);
  createWatchTower(k, [player]);

  setCamScale(k);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onUpdate(() => {
    k.camPos(player.worldPos().x, player.worldPos().y - 100);
  });
});

k.go("main");
