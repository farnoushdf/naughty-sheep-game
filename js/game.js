class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameWinScreen = document.getElementById("game-win")
        this.gameEndScreen = document.getElementById("game-end");
        this.player = new Player(this.gameScreen, 50, 750, 70, 70, "./Image/dog-shape.png");
        this.width = 1200;
        this.height = 800;
        this.sheep = [new Sheep(this.gameScreen)];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;  
        this.gameLoopFrequency = Math.round(1000/60);
        this.timeRemaining = 120;
        this.timeIntervalId = null;
        this.gameSound = new Audio("./Run-Amok(chosic.com).mp3");
        this.gameSound.volume = 0.1;
        this.gameOverSound = new Audio("./Fluffing-a-Duck(chosic.com).mp3");
        this.gameOverSound.volume = 0.1;
        this.gameWinSound = new Audio("./fm-freemusic-happy-and-joyful-children(chosic.com).mp3");
        this.gameWinSound.volume = 0.1;
    }

    start() {
        
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        for (let i = 0; i < 15; i++) {
            this.sheep.push(new Sheep(this.gameScreen));
        }
    

        this.gameIntervalId = setInterval(() => {
         
           
                this.gameLoop();
                this.gameSound.play();            
            
        }, this.gameLoopFrequency);
        this.timeIntervalId = setInterval(() => {
            this.timeRemaining -= 1;
            if (this.timeRemaining < 0) {
                clearInterval(this.gameIntervalId);
                this.gameOver();
                this.gameSound.pause();
                this.gameSound.currentTime = 0;
            }
            else {
                const minutes = Math.floor(this.timeRemaining / 60).toString().padStart(2, "0");
                const seconds = (this.timeRemaining % 60).toString().padStart(2, "0");
                const timeRemainingContainer = document.getElementById("timeRemaining");
                timeRemainingContainer.innerText = `${minutes}:${seconds}`;
               
            }

        }, 1000);

    }

    gameLoop() {
        console.log("loop")
        this.update();
        // setTimeout( () => {});
        if(this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update() {
        this.player.move();

        this.sheep.forEach((oneSheep, index) => {

            const thereWasCollision = this.player.didCollide(oneSheep);
            /////////////
            /////////////
            if (thereWasCollision) {
                oneSheep.moveWhitOutBoundry();
            } else {
                oneSheep.move();
            }
            ////////////////
            ////////////////
            // oneSheep.move();
            console.log("every sheep move")
            
            
            if (thereWasCollision) {
                oneSheep.moveAfterCollision();
            }
            if (oneSheep.top < 400 && oneSheep.left > 310 && oneSheep.left < 450) {
                this.sheep.splice(index, 1);
                this.score +=1;
                const scoreElement = document.getElementById ("score");
                scoreElement.innerHTML = this.score;
               
            
            }
           
        }) 
        //////////////
        if (this.sheep.length === 0) {
            this.gameWin();
            this.gameSound.pause();
            this.gameSound.currentTime = 0;
        }
        ////////////
    }

    gameWin() {
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "none";
        this.gameWinSound.play();
        this.gameWinScreen.style.display = "block";
    }
     
    gameOver() {
         this.gameScreen.style.display = "none";
         this.gameWinScreen.style.display = "none";
         this.gameOverSound.play();
         this.gameEndScreen.style.display = "block";
         
     }
}