class Square {
    state = 1;

    constructor(app, PIXI, color, location) {
        gridState[location] = this.state;

        this.location = location;
        this.obj = new PIXI.Graphics()
            .rect(0, 0, SQUARE_SIZE, SQUARE_SIZE)
            .fill(color);

        app.stage.addChild(this.obj);

        this.obj.x = (this.location % GRID_SIZE) * SQUARE_SIZE;
        this.obj.y = (Math.floor(this.location / GRID_SIZE)) * SQUARE_SIZE;
    }

    move(location) {
        gridState[this.location] = 0;

        const prevLocation = this.location;

        this.location = location;
        this.obj.x = (location % GRID_SIZE) * SQUARE_SIZE;
        this.obj.y = (Math.floor(location / GRID_SIZE)) * SQUARE_SIZE;

        gridState[location] = this.state;

        return prevLocation;
    }
}