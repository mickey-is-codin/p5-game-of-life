import {
  FRAMERATE,
  TIMESTEP,
} from './constants';

export const isInitialFrame = (frameCount) => frameCount === 1;
export const needsNewDraw = (count) => {
  return count % (FRAMERATE * TIMESTEP) === 0;
};