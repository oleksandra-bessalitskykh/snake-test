class Wall extends Square {
    state = 1;

    constructor(app) {
        super(app, BROWN_COLOR, getRandomLocation());
        gridState[this.location] = 1;
    }
}
