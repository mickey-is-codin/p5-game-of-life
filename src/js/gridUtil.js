import {
  NUM_CELLS,
  CELL_WIDTH,
  CELL_HEIGHT,
} from './constants';

export const coordToIx = ([x, y]) => x + NUM_CELLS * y;
export const ixToCoord = (ix) => ([
  ix % NUM_CELLS,
  Math.floor(ix / NUM_CELLS)
]);

export const toActiveIxs = (grid) => grid.reduce((activeIxs, x, ix) => {
  return x ? [...activeIxs, ix] : activeIxs;
}, []);

export const toActiveCoords = (state) => {
  const activeIxs = toActiveIxs(state);
  return activeIxs.map(ixToCoord);
};

export const fillGridSquare = (p) => ([x, y]) => {
  const startX = CELL_WIDTH * x;
  const startY = CELL_HEIGHT * y;
  p.fill(0);
  p.rect(startX, startY, CELL_WIDTH, CELL_HEIGHT);
};

export const fillGridSquares = (p, coords) => coords.forEach(fillGridSquare(p));

export const toNeumannNeighborIxs = (ix) => {
  const [x, y] = ixToCoord(ix);
  const north = coordToIx([x, y + 1]);
  const east = coordToIx([x + 1, y]);
  const south = coordToIx([x, y - 1]);
  const west = coordToIx([x - 1, y]);
  return [
    north,
    east,
    south,
    west,
  ];
};

export const toMooreNeighborIxs = (ix) => {
  const [x, y] = ixToCoord(ix);
  const north = coordToIx([x, y + 1]);
  const northeast = coordToIx([x + 1, y + 1]);
  const east = coordToIx([x + 1, y]);
  const southeast = coordToIx([x + 1, y - 1]);
  const south = coordToIx([x, y - 1]);
  const southwest = coordToIx([x - 1, y - 1]);
  const west = coordToIx([x - 1, y]);
  const northwest = coordToIx([x - 1, y + 1]);
  return [
    north,
    northeast,
    east,
    southeast,
    south,
    southwest,
    northwest,
    west,
  ];
};