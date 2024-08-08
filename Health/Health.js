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
      new Costume("Full", "./Health/costumes/Full.svg", {
        x: 77.41448257061745,
        y: 11.749741152138455,
      }),
      new Costume("13", "./Health/costumes/13.svg", {
        x: 77.41448595621745,
        y: 11.74974192373844,
      }),
      new Costume("12", "./Health/costumes/12.svg", {
        x: 77.41448110941747,
        y: 11.749744462938423,
      }),
      new Costume("11", "./Health/costumes/11.svg", {
        x: 77.41448272741746,
        y: 11.749748769738403,
      }),
      new Costume("10", "./Health/costumes/10.svg", {
        x: 77.41448611301746,
        y: 11.7497483793384,
      }),
      new Costume("9", "./Health/costumes/9.svg", {
        x: 77.41448303381748,
        y: 11.749746221338398,
      }),
      new Costume("8", "./Health/costumes/8.svg", {
        x: 77.41448500000001,
        y: 11.749740000000003,
      }),
      new Costume("7", "./Health/costumes/7.svg", {
        x: 77.41448015320003,
        y: 11.749740771599988,
      }),
      new Costume("6", "./Health/costumes/6.svg", {
        x: 77.41448000360003,
        y: 11.749741543199974,
      }),
      new Costume("5", "./Health/costumes/5.svg", {
        x: 77.41447985400004,
        y: 11.74974231479996,
      }),
      new Costume("4", "./Health/costumes/4.svg", {
        x: 77.41447970440004,
        y: 11.749744853999943,
      }),
      new Costume("3", "./Health/costumes/3.svg", {
        x: 77.41447955480004,
        y: 11.749749160799922,
      }),
      new Costume("2", "./Health/costumes/2.svg", {
        x: 77.41447940520004,
        y: 11.749748770399918,
      }),
      new Costume("1", "./Health/costumes/1.svg", {
        x: 77.41447925560004,
        y: 11.749748379999915,
      }),
      new Costume("None", "./Health/costumes/None.svg", {
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
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-123, 146);
    this.costume = "Full";
  }

  *whenIReceiveNewGame() {
    this.visible = true;
  }
}
