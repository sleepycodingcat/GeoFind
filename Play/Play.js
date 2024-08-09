/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Logo", "./Play/costumes/Logo.svg", {
        x: 84.11456524435766,
        y: 34.56597335876464,
      }),
    ];

    this.sounds = [new Sound("click", "./Play/sounds/click.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -115);
    yield* this.wait(0.5);
    this.goto(0, -115);
    this.effects.ghost = 100;
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.effects.ghost -= 5;
      this.size = 100 + 10 * Math.sin(this.degToRad(this.timer * 180));
      if (this.touching("mouse")) {
        this.effects.brightness = 15;
      } else {
        this.effects.brightness = 0;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.startSound("click");
    this.effects.brightness = 100;
    this.stage.vars.question = "Q1";
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 10; i++) {
      this.effects.brightness -= 10;
      yield;
    }
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.moveBehind();
    this.broadcast("New Game");
  }
}
