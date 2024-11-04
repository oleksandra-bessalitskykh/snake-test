const form = document.getElementById("modes");
const best = document.getElementById("best");
const score = document.getElementById("score");
const menuButton = document.getElementById("menuButton");
const playButton = document.getElementById("playButton");
const exitButton = document.getElementById("exitButton");
const message = document.getElementById("message");

function resetGame() {
    pause = true;
    message.style.display = "block";
}

document.addEventListener("keydown", function (event) {
    event.preventDefault();
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            direction !== 1 && (direction = -1);
            break;
        case "ArrowRight":
            direction !== -1 && (direction = 1);
            break;
        case "ArrowUp":
            direction !== GRID_SIZE && (direction = -GRID_SIZE);
            break;
        case "ArrowDown":
            direction !== -GRID_SIZE && (direction = GRID_SIZE);
            break;
    }
});

const game = async () => {
    const app = new PIXI.Application();
    await app.init({width: FIELD_SIZE, height: FIELD_SIZE, background: '#575757'});

    document.getElementById("game-container").appendChild(app.canvas);

    let deltaTime = 0;
    let food = new Food(app, PIXI);
    let snake = new Snake(app, PIXI, food);

    menuButton.addEventListener('click', function handleClick() {
        menuButton.style.display = "none";
        playButton.style.display = "block";
        exitButton.style.display = "block";
        form.style.display = "block";
        message.style.display = "none";

        initialize();

        if (scoreValue > bestValue) {
            bestValue = scoreValue;
            best.innerText = bestValue;
        }

        scoreValue = 0;
        score.innerText = '0';

        app.destroy(true, true);
        menuButton.removeEventListener('click', handleClick);
    });

    app.ticker.add((time) => {

        if (pause) return;

        deltaTime += time.deltaMS;

        if (deltaTime < speed) return;

        snake.act();
        deltaTime = 0;
    });
};

playButton.onclick = () => {
    playButton.style.display = "none";
    exitButton.style.display = "none";
    form.style.display = "none";
    menuButton.style.display = "block";
    message.style.display = "none";
    pause = false;
    game();
};
