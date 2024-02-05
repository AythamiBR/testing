////////////////////// ENEMIES ////////////////////////////////////////

const newEnemy =  document.querySelector('.enemy')
const scenery = document.querySelector('#canvas')
const enemy = new Enemy( 300, 300,scenery, newEnemy )
enemy.generateEnemy()

////////////////////// TREASURE ////////////////////////////////////

const treasureHTML = document.querySelector('.treasure')
const treasure = new Treasure ( 500, 100, scenery)
treasure.generateTreasure()

///////////////////// PLAYER ////////////////////////////////////////

const newPlayer = document.getElementById('player')     //Select the element refer to the player
let posX = Math.floor(Math.random() * 750)              //Generate a random position on the canvas
let posY = Math.floor(Math.random() * 550)
const player = new Player ( posX, posY, newPlayer, enemy )     //Create an instance of the player object

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
    e.key === "d" || e.key === "timerIdEnemy1D" || e.key === "ArrowRight" ) player.directionX = 0
})

////////////////////// REPEAT THE MOVEMENT OF PLAYER ////////////////////////////////

//Function controller the movement of character player
//The callback function with arrow refers to the instance function movePlayer()
//Allows access to the function
let timerIdPlayer = setInterval(() => player.movePlayer(), 30)

// **********  FIX: PROBLEMS WITH THE MOVEMENT IF ENEMEY 2 ***************/

// const enemy2 = new Enemy( 300, 400, scenery, newEnemy )
// enemy2.generateEnemy()

const timerIdEnemy1 = setInterval( () => enemy.verticalMove(), 1000)
// const timerIdEnemy2 = setInterval( () => enemy2.verticalMove(), 1000)


////////////////////// COUNTDOWN //////////////////////////////////////////////////////////
const htmlCountDown = document.getElementById('timer')
const timerId = setInterval( countDown, 1000 )
let minutes  = 1
let seconds = minutes * 60
function countDown () {
    if ( minutes >= 0 && seconds >= 1 ) {
       if ( seconds % 60 === 0 ) minutes--
        seconds--
        htmlCountDown.innerText = `${minutes} : ${seconds%60}`
    if ( seconds % 60 < 10 ) 
        htmlCountDown.innerText = `${minutes} : 0${seconds%60}`
    } else {
        clearInterval(timerId)
        htmlCountDown.innerText = `TIME OVER`
    }
    
}
