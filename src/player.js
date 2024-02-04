class Player {
    constructor( x, y, element, enemy ) {
        this.top = y                
        this.left = x
        this.element = element
        this.enemy = enemy
        this.directionX = 0
        this.directionY = 0
        this.speed = 15
        this.width = 50
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
            this.checkCollision()
        }
        // Vertical movement if the player
        if ( nextPositionY >= 0 && nextPositionY <= 550 ) {
            this.top += this.speed * this.directionY
            this.element.style.top = this.top +'px' 
            this.checkCollision()
        }
            
     }  

     checkCollision(){
        if( this.left < (this.enemy.left + this.enemy.width) &&
            (this.left + this.width) > this.enemy.left &&  
            this.top < (this.enemy.top + this.enemy.height) &&
            (this.top + this.height) > this.enemy.top){
              console.log('Ouch!!')
            }
      }
}