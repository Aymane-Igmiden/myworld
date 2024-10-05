export function addDialog(k, options = {}) {
  const h = options.height || 160;
  const pad = options.padding || 16;
  const bgColor = options.bgColor || [0, 0, 0];
  const continueText = options.continueText || "Continue";

  const bg = k.add([
    k.pos(0, height() - h),
    k.rect(width(), h),
    k.color(...bgColor),
    k.z(100),
  ]);

  const txt = k.add([
    k.text("", { width: k.width() }),
    k.pos(0 + pad, k.height() - h + pad),
    k.z(100),
  ]);

  const continueLabel = k.add([
    k.text(continueText, { width: k.width() }),
    k.pos(k.width() - 12 * pad, k.height() - h + pad),
    k.z(100),
  ]);

  const clickArea = k.add([
    k.rect(k.width(), k.height()),
    k.color(0, 0, 0, 0),
    k.area(),
    { z: -1 },
  ]);

  clickArea.hidden = true;
  bg.hidden = true;
  txt.hidden = true;
  continueLabel.hidden = true;

  clickArea.onClick(() => {
    if (!clickArea.hidden && options.onContinue) {
      options.onContinue();
    } else {
      txt.text = "test"; // Default action if not specified
    }
  });

  k.onKeyPress("escape", () => {
    txt.text = "";
    bg.hidden = true;
    txt.hidden = true;
    continueLabel.hidden = true;
    clickArea.hidden = true;
  });

  return {
    say(message) {
      txt.text = message;
      bg.hidden = false;
      txt.hidden = false;
      continueLabel.hidden = false;
      clickArea.hidden = false;
    },
    dismiss() {
      if (!this.active()) {
        return;
      }
      txt.text = "";
      bg.hidden = true;
      txt.hidden = true;
      continueLabel.hidden = true;
      clickArea.hidden = true;
    },
    active() {
      return !bg.hidden;
    },
    destroy() {
      txt.text = "";
      bg.destroy();
      txt.destroy();
      continueLabel.destroy();
      clickArea.destroy();
    },
  };
}
