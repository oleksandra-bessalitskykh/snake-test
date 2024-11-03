class Food extends Square {
    state = 2;

    constructor(app, PIXI) {
        super(app, PIXI, GREEN_COLOR, getRandomLocation());
        gridState[this.location] = 2;
    }
}
