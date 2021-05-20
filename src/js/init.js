import { EMPTY_GRID, RANDOM_THRESHOLD } from './constants';
import { toShape1, toShape2, toShape3 } from './shapes';
import { coordToIx } from './gridUtil';

export const toRandomActive = (p,thresh) => () => p.random() > thresh;
export const toSpecificActive = (startIxs) => (_, ix) => startIxs.includes(ix);

// Three initializations:
// 1. True random
// 2. Custom cells
// 3. Custom locations of shapes

// 1. 
export const toInitialState = (p) => EMPTY_GRID.map(toRandomActive(p,RANDOM_THRESHOLD));

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
// export const toInitialState = (p) => EMPTY_GRID.map(toSpecificActive(startIxs));

// 3.
// const startShapes = [
//   toShape1([6, 6]),
//   toShape1([1, 6]),
//   toShape1([15, 4]),
//   toShape1([17, 18]),
//   toShape2([50, 50]),
//   toShape2([40, 15]),
//   toShape2([50, 50]),
//   toShape3([14, 22]),
// ];
// const startShapeIxs = startShapes.flat().map(coordToIx);
// export const toInitialState = (p) => EMPTY_GRID.map(toSpecificActive(startShapeIxs));