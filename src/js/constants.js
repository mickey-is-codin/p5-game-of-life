export const FRAMERATE = 30;
export const TIMESTEP = .2; // s
export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = CANVAS_WIDTH;

export const CELL_WIDTH = 6;
export const CELL_HEIGHT = CELL_WIDTH;
export const NUM_CELLS = CANVAS_WIDTH / CELL_WIDTH;
export const GRID_SIZE = NUM_CELLS * NUM_CELLS;

export const EMPTY_GRID = Array.from({ length: GRID_SIZE });

export const RANDOM_THRESHOLD = 0.7;