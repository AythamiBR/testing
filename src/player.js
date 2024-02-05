class Player {
    constructor( x, y, element ) {  //The enemy is needed in the constructor to be able to access its properties and detect the collision
        this.top = y                
        this.left = x
        this.element = element
        //this.enemy = enemy
        this.directionX = 0
        this.directionY = 0
        this.speed = 15
        this.width = 50     //Need the width and height of element for collision detection
        this.height = 50
        //Initial player´s position
        this.positionX = this.element.style.left = `${this.left}px`
        this.positionY = this.element.style.top = `${this.top}px`
    }
        
      movePlayer( ) {
        // Horizontal movement of the player
        let nextPositionX = this.left + this.speed * this.directionX
        let nextPositionY = this.top + this.speed * this.directionY 
        if ( nextPositionX >= 0 && nextPositionX <= 750 ) {
            this.left += this.speed * this.directionX
            this.element.style.left = this.left +'px'
            //this.checkCollision()
        }
        // Vertical movement if the player
        if ( nextPositionY >= 0 && nextPositionY <= 550 ) {
            this.top += this.speed * this.directionY
            this.element.style.top = this.top +'px' 
            //this.checkCollision()
        }
            
     }  
}