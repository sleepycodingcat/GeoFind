/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Health extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("4", "./Health/costumes/4.svg", {
        x: 77.41448257061745,
        y: 11.749741152138455,
      }),
      new Costume("3", "./Health/costumes/3.svg", {
        x: 77.41448272741746,
        y: 11.749748769738403,
      }),
      new Costume("2", "./Health/costumes/2.svg", {
        x: 77.41448500000001,
        y: 11.749740000000003,
      }),
      new Costume("1", "./Health/costumes/1.svg", {
        x: 77.41447970440004,
        y: 11.749744853999943,
      }),
      new Costume("0", "./Health/costumes/0.svg", {
        x: 77.41447910600004,
        y: 11.749746221999914,
      }),
    ];

    this.sounds = [new Sound("pop", "./Health/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: () => this.toNumber(this.stage.vars.Timer) + 0.01 },
        this.whengreaterthan
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-123, 146);
    this.costume = 4;
    while (true) {
      if (this.toNumber(this.stage.vars.health) === 3) {
        this.costume = 3;
      }
      if (this.toNumber(this.stage.vars.health) === 2) {
        this.costume = 2;
      }
      if (this.toNumber(this.stage.vars.health) === 1) {
        this.costume = 1;
      }
      if (this.toNumber(this.stage.vars.health) === 0) {
        this.costume = this.stage.vars.health;
        yield* this.wait(0.1);
        this.broadcast("Game over");
        this.stage.vars.gameover = "yes";
      }
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.Timer = this.timer;
      yield;
    }
  }

  *whengreaterthan() {
    this.stage.vars.health = 4;
  }
}
