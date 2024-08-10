import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Play from "./Play/Play.js";
import Health from "./Health/Health.js";
import Question from "./Question/Question.js";
import Input1 from "./Input1/Input1.js";
import Input2 from "./Input2/Input2.js";
import Input3 from "./Input3/Input3.js";
import Input4 from "./Input4/Input4.js";
import Layer from "./Layer/Layer.js";
import System from "./System/System.js";
import Score from "./Score/Score.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Play: new Play({
    x: 0,
    y: -115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 92.137115679,
    visible: true,
    layerOrder: 1,
  }),
  Health: new Health({
    x: -123,
    y: 146,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Question: new Question({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Input1: new Input1({
    x: -111,
    y: -32,
    direction: -112.2050681099231,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  Input2: new Input2({
    x: 111,
    y: -32,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  Input3: new Input3({
    x: -111,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  Input4: new Input4({
    x: 111,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 115.00000000000001,
    visible: false,
    layerOrder: 5,
  }),
  Layer: new Layer({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  System: new System({
    x: 0,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 10,
  }),
  Score: new Score({
    x: 6,
    y: 141,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 79.60000000000002,
    visible: true,
    layerOrder: 9,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
