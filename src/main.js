///////////////////// PLAYER ////////////////////////////////////////

const newPlayer = document.getElementById('player')     //Select the element refer to the player
let posX = Math.floor(Math.random() * 750)              //Generate a random position on the canvas
let posY = Math.floor(Math.random() * 550)
const player = new Player ( posX, posY, newPlayer )     //Create an instance of the player object

////////////////////// PLAYER´S CONTROLLERS /////////////////////////

window.addEventListener('keydown', (e) =>{
    switch (e.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            player.directionY = -1
            break
        case 's':
        case 'S':
        case 'ArrowDown':
            player.directionY = 1
            break
        case 'a':
        case 'A':
        case 'ArrowLeft': 
            player.directionX = -1
            break
        case 'd':
        case 'D':
        case 'ArrowRight':
            player.directionX = 1
            break
    }
})

window.addEventListener('keyup', (e)=>{
    if ( e.key === "w" || e.key === "W" || e.key === "Arrowup" ||
        e.key === "s" || e.key === "S" || e.key === "ArrowDown" ) player.directionY = 0
    else if ( e.key === "a" || e.key === "A" || e.key === "ArrowLeft" ||
    e.key === "d" || e.key === "D" || e.key === "ArrowRight" ) player.directionX = 0
})

////////////////////// REPEAT THE MOVEMENT OF PLAYER ////////////////////////////////

//Function controller the movement of character player
//The callback function with arrow refers to the instance function movePlayer()
//Allows access to the function
let timerId = setInterval(() => player.movePlayer(), 30)


////////////////////// ENEMIES /////////////////////////////////////////////////////

const newEnemy =  document.querySelector('.enemy')
const scenery = document.querySelector('#canvas')
const enemy = new Enemy( posX, posY,scenery, newEnemy )