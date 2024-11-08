class Food extends Square {
    state = 2;

    constructor(app) {
        super(app, GREEN_COLOR, getRandomLocation());
        gridState[this.location] = 2;
    }

    move(snake) {
        super.move(getRandomLocation());
    }
}


