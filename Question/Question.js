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
        x: 163.12037116409306,
        y: 82.35912962678402,
      }),
      new Costume("Q2", "./Question/costumes/Q2.svg", {
        x: 141.870370388031,
        y: 80.702746555723,
      }),
      new Costume("Q3", "./Question/costumes/Q3.svg", {
        x: 156.87037038803095,
        y: 85.1670322700081,
      }),
      new Costume("Q4", "./Question/costumes/Q4.svg", {
        x: 185.62037038803095,
        y: 85.86284507789004,
      }),
      new Costume("Q5", "./Question/costumes/Q5.svg", {
        x: 171.870370388031,
        y: 82.38378103848098,
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
    this.visible = false;
    this.goto(0, 0);
    while (true) {
      this.costume = this.stage.vars.question;
      yield;
    }
  }

  *whenIReceiveNewGame() {
    this.costume = "Q1";
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
