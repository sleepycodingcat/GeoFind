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
        x: 241.00000056315105,
        y: 252.70334000000008,
      }),
      new Costume("Main page", "./Stage/costumes/Main page.svg", {
        x: 241,
        y: 252.70334000000008,
      }),
      new Costume("Game OVer ", "./Stage/costumes/Game OVer .svg", {
        x: 241,
        y: 235.40422,
      }),
      new Costume("Game OVer no hp", "./Stage/costumes/Game OVer no hp.svg", {
        x: 242.50150206465256,
        y: 252.70334000000017,
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game over" },
        this.whenIReceiveGameOver2
      ),
    ];

    this.vars.question = 0;
    this.vars.health = 4;
    this.vars.Timer = 19.207;
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

  *whenIReceiveGameOver2() {
    if (this.toString(this.vars.gameover) === "yes") {
      this.costume = "Game OVer no hp";
    } else {
      this.costume = "Game OVer ";
    }
  }
}
