export const ANIMATION_SPEED = 250; // ms
export const ANIMATION_STEPS = 64;
export const PAUSE_TIME_BETWEEN_MOVES = 100; // ms

export const CELL_WIDTH_IN_PIXELS = 25;
export const NUMBER_OF_CELLS_IN_VIEWPORT_X = 25; // Has to be odd to center the player
export const NUMBER_OF_CELLS_IN_VIEWPORT_Y = 21; // Has to be odd to center the player
export const VIEWPORT_WIDTH_IN_PIXELS = NUMBER_OF_CELLS_IN_VIEWPORT_X * CELL_WIDTH_IN_PIXELS + 1;
export const VIEWPORT_HEIGHT_IN_PIXELS = NUMBER_OF_CELLS_IN_VIEWPORT_Y * CELL_WIDTH_IN_PIXELS + 1;

export const GRID_WIDTH = 60; // number of cells
export const GRID_HEIGHT = 38; // number of cells

// Circles on grid look nicer with N.5 radius.
// See: https://www.redblobgames.com/grids/circle-drawing/#aesthetics
export const MAX_CLEAR_VISIBILITY = 6.5;
export const MAX_VISIBILITY = 8.5;

export const INITIAL_MAX_HP = 30;
