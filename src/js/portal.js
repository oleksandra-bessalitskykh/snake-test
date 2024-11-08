class Portal {
    constructor(app) {
        this.from = new Square(app, ORANGE_COLOR, getRandomLocation(), 2);
        this.to = new Square(app, BLUE_COLOR, getRandomLocation(), 2);
    }

    move(snake) {

        // if (snake.location === this.from.location) {
        //     snake.location = this.to.location;
        // }
        //
        // if (snake.location === this.to.location) {
        //     snake.location = this.from.location;
        // }

        this.from.move(getRandomLocation());
        this.to.move(getRandomLocation());
    }
}