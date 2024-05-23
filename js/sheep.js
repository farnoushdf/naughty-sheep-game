class Sheep {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.positionsLeftArr = [80, 140, 240, 290, 360, 470, 565, 420, 340, 510];
        this.positionsTopArr = [470, 580, 640, 560, 580, 670, 475,420, 440, 510];
        this.randomIndex = Math.floor(Math.random() * this.positionsLeftArr.length);
        this.left = this.positionsLeftArr[this.randomIndex];
        this.top = this.positionsTopArr[this.randomIndex];
        this.width = 60;
        this.height = 60;
        this.element = document.createElement("img");
        this.element.src = "./Image/sheep-shape.png";
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.gameScreen.appendChild(this.element);
        this.directionX = -5;
        this.directionY = -5;

    }

    randomMove() {
        this.left = Math.floor(Math.random() * 10);
        this.top = Math.floor(Math.random() * 10);
        this.updatePosotion();
    }

    move() {
        console.log("sheep move")
        this.left += this.directionX;
        this.top += this.directionY;
        
        if (this.left <= 0) {
            this.directionX = 2;
        }
        if (this.left > 900) {
            this.directionX = -2;
        }
        if (this.top < 500) {
            this.directionY = 2;
        } 
        if ( this.top > 780) {
            this.directionY = -2;
        }
        this.updatePosotion();
    }
    ////////////////////////////////
    moveWhitOutBoundry() {
        console.log("sheep move")
        this.left += this.directionX;
        this.top += this.directionY;
        
        if (this.left <= 200) {
            this.directionX = 2;
        }
        if (this.left > 400) {
            this.directionX = -2;
        }
        if (this.top < 200) {
            this.directionX = 2;
            if (this.top < 300) {
                this.directionX = -2;
            }
        } 
        if ( this.top > 780) {
            this.directionY = -2;
        }
        this.updatePosotion();
    }
    ////////////////////////////////
    updatePosotion() {
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`
    }
    moveAfterCollision(){
        this.top -= 5;
        this.updatePosotion();
     }
}







