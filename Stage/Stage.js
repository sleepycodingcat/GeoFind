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
        x: 244.06666056315106,
        y: 252.70334000000005,
      }),
      new Costume("Main page", "./Stage/costumes/Main page.svg", {
        x: 241,
        y: 252.70334000000005,
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

    this.vars.question = 0;
    this.vars.health = 4;
    this.vars.Timer = 51.117;
    this.vars.gameover = "no";
    this.vars.score = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.question = 0;
    this.vars.health = 4;
    this.vars.gameover = "no";
    this.vars.score = 0;
    this.costume = "Title page";
    while (true) {
      yield* this.playSoundUntilDone("8-bit-arcade-mode-158814");
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.costume = "Main page";
  }

  *whenIReceiveGameOver() {
    this.costume = "Title page";
  }
}
