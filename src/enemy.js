class Enemy {
    constructor( x, y, parent, element) {
        this.left = x
        this.top = y
        this.parent = parent
        this. element = element
        this. speed = 10
        this.width = 25
        this.height = 25
    }

    generateEnemy() {
        let enemy = document.createElement('div')
        enemy.classList.add('enemy')
        enemy.style.top = this.top + 'px'
        enemy.style.left = this.left + 'px'
        this.parent.appendChild(enemy)
        this.element = enemy
    }
}