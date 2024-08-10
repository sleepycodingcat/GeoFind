/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class System extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./System/costumes/costume1.svg", {
        x: 136.59799389044446,
        y: 68.31558895111084,
      }),
      new Costume("costume2", "./System/costumes/costume2.svg", {
        x: 118.68154802624701,
        y: 68.31571604988098,
      }),
      new Costume("costume3", "./System/costumes/costume3.svg", {
        x: 151.1047151740495,
        y: -105.85110161852356,
      }),
      new Costume("costume4", "./System/costumes/costume4.svg", {
        x: 107.48999501056372,
        y: -108.53091305919969,
      }),
    ];

    this.sounds = [
      new Sound("right", "./System/sounds/right.wav"),
      new Sound("disconnect", "./System/sounds/disconnect.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "wrong" }, this.whenIReceiveWrong),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
    ];

    this.vars.gravity = -140;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 140);
    this.visible = false;
    this.vars.gravity = 0;
  }

  *whenIReceiveWrong() {
    this.vars.gravity = 0;
    this.goto(0, 140);
    this.costume = "costume1";
    yield* this.startSound("disconnect");
    this.visible = true;
    while (
      !(
        this.toNumber(this.vars.gravity) === -140 ||
        this.compare(this.vars.gravity, -140) < 0
      )
    ) {
      this.vars.gravity -= 2;
      this.y += this.toNumber(this.vars.gravity);
      yield;
    }
    this.visible = false;
    this.goto(0, 140);
    this.stage.vars.health--;
  }

  *whenIReceiveRight() {
    this.vars.gravity = 0;
    this.costume = "costume2";
    yield* this.startSound("right");
    this.visible = true;
    while (
      !(
        this.toNumber(this.vars.gravity) === -140 ||
        this.compare(this.vars.gravity, -140) < 0
      )
    ) {
      this.vars.gravity -= 2;
      this.y += this.toNumber(this.vars.gravity);
      yield;
    }
    this.visible = false;
    this.goto(0, 140);
  }

  *whenIReceiveGameOver() {
    if (this.toString(this.stage.vars.gameover) === "yes") {
      this.costume = "costume4";
      this.visible = true;
    } else {
      this.costume = "costume3";
      this.visible = true;
    }
  }
}
