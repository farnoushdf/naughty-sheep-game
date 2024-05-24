window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const startAgainButton = document.getElementById("start-again-button");
    

    let ourGame = new Game();

    startButton.addEventListener("click", () => {
        ourGame.start();
    });
    restartButton.addEventListener("click", () => {
        location.reload();
    })
    startAgainButton.addEventListener("click", () => {
      location.reload();
    })

    document.addEventListener("keydown", (event) => {
        console.log("a key was pressed", event);
        if (event.code === "ArrowRight") {
          //then we move our player to the right
          ourGame.player.directionX = 5;
        } else if (event.code === "ArrowLeft") {
          //then we move our player to the left
          ourGame.player.directionX = -5;
        } else if (event.code === "ArrowUp") {
          //then we move our player to the up
          ourGame.player.directionY = -5;
        } else if (event.code === "ArrowDown") {
          //then we move our player to the down
          ourGame.player.directionY = 5;
        }
      });
      document.addEventListener("keyup", () => {
        ourGame.player.directionX = 0;
        ourGame.player.directionY = 0;
      });

}