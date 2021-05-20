import {
  NUM_CELLS,
  CELL_WIDTH,
  CELL_HEIGHT,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
} from './constants';

// Takes an array of lineCoord tuples
// e.g. [[0,0,20,20], [50,10,200,180]] draws two lines
export const drawLines = (p, lineCoords) => {
  lineCoords.forEach((lineCoord) => {
    p.line(...lineCoord);
  });
};

/* GRID HELPERS */
export const toVerticalLineCoords = () => {
  return Array.from({ length: NUM_CELLS }).map((_, ix) => {
    const currentX = ix * CELL_WIDTH;
    return [currentX, 0, currentX, CANVAS_HEIGHT];
  });
};

export const toHorizontalLineCoords = () => {
  return Array.from({ length: NUM_CELLS }).map((_, ix) => {
    const currentY = ix * CELL_HEIGHT;
    return [0, currentY, CANVAS_WIDTH, currentY];
  });
};

export const drawGrid = (p) => {
  drawLines(p, toVerticalLineCoords());
  drawLines(p, toHorizontalLineCoords());
};