class Enemy { // timerId -> setInterval
    constructor( x, y, parent, element) {
        this.left = x
        this.top = y
        this.parent = parent
        this. element = element
        this. speed = 10
        this.width = 25
        this.height = 25
        this.direction = 1 //Initial movement for the right
        this.maxX = this.left + 250
        this.minX = this.left - 250
        this.maxY = this.top + 250
        this.minY = this.top - 250
    }

    generateEnemy() {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.top = this.top + 'px'
        enemy.style.left = this.left + 'px'
        this.parent.appendChild(enemy)
        this.element = enemy
    }

    horizonatlMove() {
        if ( this.maxX < 775 && this.minX > 0 ) {
           if ( this.left >= this.maxX || this.left <= this.minX ) {
                this.direction *= -1   // Change direction of movement
            }
            
            this.left += this.speed * this.direction
            this.element.style.left = this.left + 'px' 
        }
    }

    verticalMove() {
        if ( this.maxY < 575 && this.minY > 0 ) {
           if ( this.top >= this.maxY || this.top <= this.minY ) {
                this.direction *= -1 
            }
            
            this.top += this.speed * this.direction
            this.element.style.top = this.top + 'px' 
        }
    }
    
}