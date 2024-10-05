import kaboom from "kaboom";
import { createPlayer } from "./player.js";
import { createWatchTower } from "./watchTower.js";

const k = kaboom();
const speed = 500;


// Add background
k.loadSprite("background", "sprites/bg.png");
k.add([
  k.sprite("background", {
    width: k.width(),
    height: k.height(),
  }),
]);

createPlayer(k, speed);
createWatchTower(k);

// Instructions text
k.add([k.text("Press arrow keys", { width: k.width() / 2 }), k.pos(12, 12)]);
k.add([k.text("Press esc to hide", { width: k.width() / 2 }), k.pos(12, 48)]);

// Enable debugging
debug.inspect = true;