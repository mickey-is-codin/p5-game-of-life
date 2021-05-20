import { EMPTY_GRID } from './constants';
import { toShape1 } from './shapes';
import { coordToIx } from './gridUtil';

export const toRandomActive = (thresh) => () => random() > thresh;
export const toSpecificActive = (startIxs) => (_, ix) => startIxs.includes(ix);

// Three initializations:
// 1. True random
// 2. Custom cells
// 3. Custom locations of shapes

// 1. 
// export const initialState = EMPTY_GRID.map(toRandomActive(RANDOM_THRESHOLD));

// 2. 
// const startIxs = [
//     [2,2],
//     [2,3],
//     [2,4],
//     [3,3],

//     [7,7],
//     [7,8],
//     [8,7],
//     [8,8],
// ].map(coordToIx);
// export const initialState = EMPTY_GRID.map(toSpecificActive(startIxs));

// 3.
const startShapes = [
  toShape1([6, 6]),
  toShape1([1, 6]),
  toShape1([15, 4]),
  toShape1([17, 18]),
];
const startShapeIxs = startShapes.flat().map(coordToIx);
export const initialState = EMPTY_GRID.map(toSpecificActive(startShapeIxs));