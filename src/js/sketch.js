import p5 from 'p5';
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  FRAMERATE,
} from './constants';
import { drawGrid } from './baseGrid';
import { toInitialState } from './init';
import { isInitialFrame, needsNewDraw } from './timing';
import { toActiveCoords, fillGridSquares } from './gridUtil';
import { updateState } from './conway';
import '../css/style.scss';

const sketch = (p) => {
  let canvas;
  let state;

  p.setup = () => {
    canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, p.P2D);
    p.frameRate(FRAMERATE);
  };

  p.draw = () => {
    p.background(255);
    drawGrid(p);

    if (isInitialFrame(p.frameCount)) {
      state = toInitialState(p);
    }

    if (needsNewDraw(p.frameCount)) {
      state = updateState(state);
    }

    const activeCoords = toActiveCoords(state);

    fillGridSquares(p, activeCoords);
  };
};

new p5(sketch);

