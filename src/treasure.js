class Treasure {
    constructor ( x, y, parent ) {
        this.left = x
        this.top = y
        this.parent = parent
    }

    generateTreasure() {
        let treasure = document.createElement('div')
        treasure.classList.add('treasure')
        treasure.style.top = this.top + 'px'
        treasure.style.left = this.left + 'px'
        this.parent.appendChild(treasure)
    }
}