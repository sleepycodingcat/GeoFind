/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Title page", "./Stage/costumes/Title page.svg", {
        x: 241,
        y: 252.70334,
      }),
      new Costume("Main page", "./Stage/costumes/Main page.svg", {
        x: 241,
        y: 252.70334000000003,
      }),
    ];

    this.sounds = [
      new Sound(
        "8-bit-arcade-mode-158814",
        "./Stage/sounds/8-bit-arcade-mode-158814.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver
      ),
    ];

    this.vars.question = "Q1";
    this.vars.correct = "i2";
  }

  *whenGreenFlagClicked() {
    this.vars.question = 0;
    this.costume = "Title page";
    this.vars.correct = 0;
    while (true) {
      yield* this.playSoundUntilDone("8-bit-arcade-mode-158814");
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.costume = "Main page";
    this.vars.correct = "i2";
  }

  *whenIReceiveGameOver() {
    this.costume = "Title page";
  }
}
