/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Input1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Q1", "./Input1/costumes/Q1.svg", { x: 98.5, y: 41 }),
      new Costume("Q2", "./Input1/costumes/Q2.svg", { x: 98.5, y: 41 }),
      new Costume("Q3", "./Input1/costumes/Q3.svg", { x: 98.5, y: 41 }),
      new Costume("Q4", "./Input1/costumes/Q4.svg", { x: 98.5, y: 41 }),
      new Costume("Q5", "./Input1/costumes/Q5.svg", { x: 98.5, y: 41 }),
    ];

    this.sounds = [new Sound("Click", "./Input1/sounds/Click.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "Q2" }, this.whenIReceiveQ2),
      new Trigger(Trigger.BROADCAST, { name: "blink" }, this.whenIReceiveBlink),
      new Trigger(Trigger.BROADCAST, { name: "Q3" }, this.whenIReceiveQ3),
      new Trigger(Trigger.BROADCAST, { name: "4" }, this.whenIReceive4),
      new Trigger(Trigger.BROADCAST, { name: "Q5" }, this.whenIReceiveQ5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-111, -32);
    while (true) {
      this.costume = this.stage.vars.question;
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.visible = true;
    while (true) {
      if (
        this.toString(this.stage.vars.question) === "Q1" &&
        this.mouse.down &&
        this.touching("mouse")
      ) {
        this.broadcast("wrong");
        this.broadcast("blink");
        yield* this.wait(1);
        this.stage.vars.question = "Q2";
        this.broadcast("Q2");
      }
      yield;
    }
  }

  *whenIReceiveQ2() {
    while (true) {
      if (
        this.toString(this.stage.vars.question) === "Q2" &&
        this.mouse.down &&
        this.touching("mouse")
      ) {
        this.broadcast("wrong");
        this.broadcast("blink");
        yield* this.wait(1);
        this.stage.vars.question = "Q3";
        this.broadcast("Q3");
      }
      yield;
    }
  }

  *whenIReceiveBlink() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveQ3() {
    while (true) {
      if (
        this.toString(this.stage.vars.question) === "Q3" &&
        this.mouse.down &&
        this.touching("mouse")
      ) {
        this.broadcast("right");
        this.broadcast("blink");
        yield* this.wait(1);
        this.stage.vars.question = "Q4";
        this.broadcast("4");
      }
      yield;
    }
  }

  *whenIReceive4() {
    while (true) {
      if (
        this.toString(this.stage.vars.question) === "Q4" &&
        this.mouse.down &&
        this.touching("mouse")
      ) {
        this.broadcast("wrong");
        this.broadcast("blink");
        yield* this.wait(1);
        this.stage.vars.question = "Q5";
        this.broadcast("Q5");
      }
      yield;
    }
  }

  *whenIReceiveQ5() {
    while (true) {
      if (
        this.toString(this.stage.vars.question) === "Q5" &&
        this.mouse.down &&
        this.touching("mouse")
      ) {
        this.broadcast("wrong");
        this.broadcast("blink");
        yield* this.wait(1);
        this.stage.vars.question = "";
        this.broadcast("Game over");
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
