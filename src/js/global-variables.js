const FIELD_SIZE = 600;
const GRID_SIZE = 20;
const SQUARE_SIZE = FIELD_SIZE / GRID_SIZE;
const START_SNAKE_POSITION = 250;
let speed = 200;
let direction = -1;
const gridState = Array(GRID_SIZE * GRID_SIZE).fill(0);
const locations = gridState.map((value, index) => index);
let pause = true;
let bestValue = 0;
let scoreValue = 0;
const TAIL_START_LOCATIONS = [251, 252, 253];

const GREEN_COLOR = '#00bb00';
const WHITE_COLOR = '#ffffff';
const YELLOW_COLOR = '#fcba03';
const BROWN_COLOR = '#a96a0e';
const GRAY_COLOR = '#575757';
const ORANGE_COLOR = '#FF6600';
const BLUE_COLOR = '#6599FF';

let gameMode = 'classic';
