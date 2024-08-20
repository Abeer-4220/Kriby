import { saveSystem } from "./save";
import { computeRank } from "./utils";

export async function makeScoreBox(k, pos, score) {
  saveSystem.load();

  if (score > saveSystem.data.maxScore) {
    saveSystem.data.maxScore = score;
    await saveSystem.save();
  }

  const container = k.make([
    k.rect(600, 500),
    k.pos(600, 400),
    k.color(k.Color.fromHex("#d7f2f7")),
    k.area(),
    k.anchor("center"),
    k.outline(4, k.Color.fromHex("#14638e")),
  ]);

  container.add([
    k.text(`Best score : ${saveSystem.data.maxScore}`),
    k.color(k.Color.fromHex("#14638e")),
    k.area(),
    k.pos(-150, -170),
  ]);

  container.add([
    k.text(`Current score : ${score}`),
    k.color(k.Color.fromHex("#0e2b69")),
    k.area(),
    k.pos(-170, -120),
  ]);

  container.add([
    k.text(`Current rank : ${computeRank(score)}`),
    k.color(k.Color.fromHex("#0e2b69")),
    k.area(),
    k.pos(-220, 50),
  ]);

  container.add([
    k.text(`Best rank : ${computeRank(saveSystem.data.maxScore)}`),
    k.color(k.Color.fromHex("#14638e")),
    k.area(),
    k.pos(-180, 0),
  ]);

  const restartBtn = container.add([
    k.rect(200, 50, { radius: 3 }),
    k.color(k.Color.fromHex("#14638e")),
    k.area(),
    k.anchor("center"),
    k.pos(0, 170),
  ]);

  restartBtn.add([
    k.text("Play again", { size: 24 }),
    k.color(k.Color.fromHex("#d7f2f7")),
    k.area(),
    k.anchor("center"),
  ]);

  function goToGame() {
    k.play("confirm");
    k.go("main");
  }

  restartBtn.onClick(() => goToGame(k));

  k.onKeyPress("enter", () => goToGame(k));

  k.onGamepadButtonPress("south", () => goToGame(k));

  return container;
}

export async function makeScoreCard(k, pos, score) {

  const container = k.make([
    k.rect(600, 500),
    k.pos(600, 400),
    k.color(k.Color.fromHex("#d7f2f7")),
    k.area(),
    k.anchor("center"),
    k.outline(4, k.Color.fromHex("#14638e")),
  ]);

  container.add([
    k.text(`Best score : ${saveSystem.data.maxScore}`),
    k.color(k.Color.fromHex("#14638e")),
    k.area(),
    k.pos(-150, -170),
  ]);

  container.add([
    k.text(`Current score : ${score}`),
    k.color(k.Color.fromHex("#0e2b69")),
    k.area(),
    k.pos(-170, -120),
  ]);
  return container;
}