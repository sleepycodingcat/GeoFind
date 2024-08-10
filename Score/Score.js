/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Score extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-0", "./Score/costumes/Glow-0.svg", { x: 29, y: 39 }),
      new Costume("Glow-1", "./Score/costumes/Glow-1.svg", { x: 24, y: 39 }),
      new Costume("Glow-2", "./Score/costumes/Glow-2.svg", { x: 28, y: 41 }),
      new Costume("Glow-3", "./Score/costumes/Glow-3.svg", { x: 33, y: 42 }),
      new Costume("Glow-4", "./Score/costumes/Glow-4.svg", { x: 31, y: 38 }),
      new Costume("Glow-5", "./Score/costumes/Glow-5.svg", { x: 30, y: 38 }),
      new Costume("Glow-6", "./Score/costumes/Glow-6.svg", { x: 30, y: 37 }),
      new Costume("Glow-7", "./Score/costumes/Glow-7.svg", { x: 31, y: 42 }),
      new Costume("Glow-8", "./Score/costumes/Glow-8.svg", { x: 31, y: 37 }),
      new Costume("Glow-9", "./Score/costumes/Glow-9.svg", { x: 28, y: 36 }),
      new Costume("Glow-10", "./Score/costumes/Glow-10.svg", {
        x: 13.625,
        y: 1.5,
      }),
    ];

    this.sounds = [new Sound("pop", "./Score/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(6, 141);
    while (true) {
      yield* this.changeCostumeTo(
        "Glow-" + this.letterOf(this.stage.vars.score, 0)
      );
      this.size += 0.2 * (80 - this.size);
      yield;
    }
  }

  *changeCostumeTo(costume) {
    if (!(this.compare(costume, this.costume.name) === 0)) {
      this.costume = costume;
      this.size = 10;
    }
  }
}
