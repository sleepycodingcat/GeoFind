/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Layer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Layer/costumes/costume1.svg", {
        x: 303.50000000000017,
        y: 97.26158142089841,
      }),
    ];

    this.sounds = [new Sound("pop", "./Layer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "wrong" }, this.whenIReceiveWrong),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
    this.moveBehind();
    this.effects.ghost = 50;
  }

  *whenIReceiveNewGame() {
    this.visible = true;
  }

  *whenIReceiveWrong() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveRight() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }
}
