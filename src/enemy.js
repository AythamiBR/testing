class Enemy { // timerId -> setInterval
    constructor( x, y, parent, element, player) {
        this.left = x
        this.top = y
        this.parent = parent
        this. element = element
        this.player = player
        this. speed = 20
        this.width = 25
        this.height = 25
        this.direction = 0 //Initial movement for the right
        //this.maxX = this.left + 250
        // this.minX = this.left - 250
        // this.maxY = this.top + 250
        // this.minY = this.top - 250
        /*****************************************/
        
    }

    generateEnemy() {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.top = this.top + 'px'
        enemy.style.left = this.left + 'px'
        this.parent.appendChild(enemy)
        this.element = enemy
    }

    horizontalMove() {
        let nextPositionX = this.left + this.speed * this.direction //Calculate next position 
        if ( nextPositionX >= 775 ||  nextPositionX <= 0 ) {
            this.direction *= -1 //Change the direction 
        } else if ( nextPositionX <= 775 && nextPositionX >= 0 ) {
            this.left += this.speed * this.direction
            this.element.style.left = this.left + 'px' 
            this.checkCollision()
        }
    }

    verticalMove() {
        let nextPositionY = this.top + this.speed * this.direction
        if ( nextPositionY >= 575 || nextPositionY <= 0 ) {
            this.direction *= -1 
        } else if ( nextPositionY <= 575 && nextPositionY >= 0 ) {
            this.top += this.speed * this.direction
            this.element.style.top = this.top + 'px' 
            this.checkCollision()
        }
    }

    calculateDistanceX() {
        let positionXPlayer = this.player.left
        let positionXEnemy = this.left
        return positionXPlayer - positionXEnemy
        // let distance = Math.sqrt(Math.pow(Math.abs(distanceX),2 ) + Math.pow(Math.abs(distanceY), 2 ))
    }

    calculateDistanceY() {
        let positionYPlayer = this.player.top
        let positionYEnemy =  this.top
        return positionYPlayer - positionYEnemy

    }
    
    followPlayer() {
        let distanceY = this.calculateDistanceY()
        let distanceX = this.calculateDistanceX()
        let moveY = false
        let moveX = true

        if ( distanceY < 0 && moveX === true ) {
            this.direction = -1
            this.verticalMove()
            moveY = true
            moveX = false
        }
        if ( distanceY > 0 && moveX === true ) {
            this.direction = 1
            this.verticalMove() 
            moveY = true
            moveX = false
        }

        if ( distanceX < 0 && moveY === true ) {
                this.direction = -1
                this.horizontalMove() 
                moveY = false
                moveX = true
        }
        if ( distanceX > 0 && moveY === true ) {
            this.direction = 1
            this.horizontalMove()
            moveY = false
            moveX = true
        }
        
    }



    checkCollision(){
        if( this.left < (this.player.left + this.player.width) &&
            (this.left + this.width) > this.player.left &&  
            this.top < (this.player.top + this.player.height) &&
            (this.top + this.height) > this.player.top){
              console.log('Ouch!!')
            }
     }
}