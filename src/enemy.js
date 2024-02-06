class Enemy { // timerId -> setInterval
    constructor( x, y, parent, player) {
        this.left = x
        this.top = y
        this.parent = parent
        this.player = player
        this.element
        this.timerId 
        this. speed = 20
        this.width = 25
        this.height = 25
        this.direction = 0
        this.colision
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
            this.left += this.speed * this.direction
            this.element.style.left = this.left + 'px' 
            this.checkCollision()
    }

    verticalMove() {
            this.top += this.speed * this.direction
            this.element.style.top = this.top + 'px' 
            this.checkCollision()
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

        if ( distanceY < 0 && moveX ) {
            this.direction = -1
            this.verticalMove()
            moveY = true
            moveX = false
        } else if ( distanceY > 0 && moveX ) {
            this.direction = 1
            this.verticalMove() 
            moveY = true
            moveX = false
        }

        if ( distanceX < 0 && moveY ) {
                this.direction = -1
                this.horizontalMove() 
                moveY = false
                moveX = true
        } else if ( distanceX > 0 && moveY ) {
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
                clearInterval(this.timerId)
                setTimeout(() => {
                setInterval(this.timerId = setInterval(()=>{ this.followPlayer()}, 1000),24)
                }, 2000);
            }
        }
}