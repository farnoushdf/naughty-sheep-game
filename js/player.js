class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        console.log("player move")
           
        if (this.left <= 0) {
          this.directionX = 1;
      }
      if (this.left > 850) {
          this.directionX = -1;
      }
      // if (this.top < 600) {
      //     this.directionX = 1;
      // } 
      if ( this.top > 780) {
          this.directionY = -1;
      }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
     didCollide(sheep) {
        const playerRec = this.element.getBoundingClientRect();
        const sheepRec = sheep.element.getBoundingClientRect();

        if (
            playerRec.left < sheepRec.right &&
            playerRec.right > sheepRec.left &&
            playerRec.top < sheepRec.bottom &&
            playerRec.bottom > sheepRec.top
          ) {
            return true;
          } else {
            return false;
          }
     }
    
}