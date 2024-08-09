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
    ];

    this.sounds = [
      new Sound("pop", "./System/sounds/pop.wav"),
      new Sound("Magic Spell", "./System/sounds/Magic Spell.wav"),
      new Sound("Disconnect", "./System/sounds/Disconnect.wav"),
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
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveWrong() {
    this.costume = "costume1";
    yield* this.startSound("Disconnect");
    this.visible = true;
    yield* this.wait(1);
    this.visible = false;
  }

  *whenIReceiveRight() {
    this.costume = "costume2";
    yield* this.startSound("Magic Spell");
    this.visible = true;
    yield* this.wait(1);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    this.costume = "costume3";
    this.visible = true;
  }
}
