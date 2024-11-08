function initialize() {
    direction = -1;
    gridState.fill(0);
    gridState[250] = 1;
    gridState[251] = 1;
    gridState[252] = 1;
    gridState[253] = 1;
    speed = 200;
}

function checkBorder(nextLocation, location) {
    return (
        nextLocation >= 0
        && nextLocation < GRID_SIZE * GRID_SIZE
        && (Math.floor(location / GRID_SIZE) === Math.floor(nextLocation / GRID_SIZE)
        || location % GRID_SIZE === nextLocation % GRID_SIZE)
    );
}

function getRandomLocation () {
    const availableLocations = locations.filter((item, index) => !gridState[index]);

    return availableLocations[Math.floor(Math.random()*availableLocations.length)];
}