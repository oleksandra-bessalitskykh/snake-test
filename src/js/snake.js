class Snake {
    constructor(app, PIXI, food) {
        this.food = food;
        this.app = app;
        this.location = START_SNAKE_POSITION;

        gridState[this.location] = 1;

        this.obj = new PIXI.Graphics()
            .rect(0, 0, SQUARE_SIZE, SQUARE_SIZE)
            .fill(YELLOW_COLOR);

        app.stage.addChild(this.obj);

        this.obj.x = (this.location % GRID_SIZE) * SQUARE_SIZE;
        this.obj.y = (Math.floor(this.location / GRID_SIZE)) * SQUARE_SIZE;

        this.tail = [
            new Square(app, PIXI, WHITE_COLOR, TAIL_START_LOCATIONS[0]),
            new Square(app, PIXI, WHITE_COLOR, TAIL_START_LOCATIONS[1]),
            new Square(app, PIXI, WHITE_COLOR, TAIL_START_LOCATIONS[2]),
        ];
    }

    act() {
        const nextLocation = this.location + direction;
        const prevLocation = this.location;

        if (gridState[nextLocation] === 1) this.selfCollision();

        if (checkBorder(nextLocation, this.location)) {
            this.location += direction;

            this.obj.x = (this.location % GRID_SIZE) * SQUARE_SIZE;
            this.obj.y = (Math.floor(this.location / GRID_SIZE)) * SQUARE_SIZE;

            const tailEnd = this.tail.reduce((location, tailItem) => tailItem.move(location), prevLocation);

            gridState[tailEnd] = 0;

            console.log(gridState[this.location]);

            if (gridState[this.location] === 2) {
                this.food.move(getRandomLocation());
                this.tail.push(new Square(this.app, PIXI, WHITE_COLOR, tailEnd));

                scoreValue += 1;
                score.innerText = scoreValue;
            }

            gridState[this.location] = 1;

        } else {
            wall(this.app);
        }
    }

    selfCollision() {
      if (true) {
          wall(this.app);
      }
    }
}