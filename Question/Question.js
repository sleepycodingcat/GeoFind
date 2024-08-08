/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Question extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Q1", "./Question/costumes/Q1.svg", {
        x: 163.12037077606203,
        y: 82.3591241055438,
      }),
    ];

    this.sounds = [new Sound("pop", "./Question/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
  }

  *whenIReceiveNewGame() {
    this.costume = "Q1";
    this.visible = true;
  }
}
