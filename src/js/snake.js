class Snake {
    constructor(app, food) {
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
            new Square(app, WHITE_COLOR, TAIL_START_LOCATIONS[0]),
            new Square(app, WHITE_COLOR, TAIL_START_LOCATIONS[1]),
            new Square(app, WHITE_COLOR, TAIL_START_LOCATIONS[2]),
        ];
    }

    act() {
        const nextLocation = this.location + direction;
        const prevLocation = this.location;

        if (gridState[nextLocation] === 1) this.selfCollision();

        if (checkBorder(nextLocation, this.location)) {

            if (gameMode === 'portal') {
                if (this.location === this.food.from.location) {
                    this.location = this.food.to.location;
                }

                if (this.location === this.food.to.location) {
                    this.location = this.food.from.location;
                }
            }

            this.location += direction;

            this.obj.x = (this.location % GRID_SIZE) * SQUARE_SIZE;
            this.obj.y = (Math.floor(this.location / GRID_SIZE)) * SQUARE_SIZE;

            const tailEnd = this.tail.reduce((location, tailItem) => tailItem.move(location), prevLocation);

            gridState[tailEnd] = 0;

            if (gridState[this.location] === 2) {
                this.food.move(this);
                this.tail.push(new Square(this.app, WHITE_COLOR, tailEnd));

                scoreValue += 1;
                score.innerText = scoreValue;

                if (gameMode === 'speed') {
                    speed = speed * 0.9;
                }

                if (gameMode === 'walls') {
                    new Wall(this.app);
                }
            }

            gridState[this.location] = 1;

        } else {

            if (gameMode !== 'godMode') {
                resetGame();
            } else {
                this.location = (this.location + direction) - (direction * GRID_SIZE);

                this.obj.x = (this.location % GRID_SIZE) * SQUARE_SIZE;
                this.obj.y = (Math.floor(this.location / GRID_SIZE)) * SQUARE_SIZE;

                const tailEnd = this.tail.reduce((location, tailItem) => tailItem.move(location), prevLocation);

                gridState[tailEnd] = 0;
            }
        }
    }

    selfCollision() {

        if (gameMode !== 'godMode') {
            resetGame();
        }
    }
}