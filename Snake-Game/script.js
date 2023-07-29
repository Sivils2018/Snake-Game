//This variable will not be reassigned
const playBoard = document.querySelector(".play-board");

//The word "let" is used to be reassigned variables
let foodX, foodY;
//The snake position will be fixed but can be reassigned
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

//Making the food pop up at random places
const changeFoodPosition = () => {
    //Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}

// e means event
const changeDirection = (e) => {
    //Changing velocity value based on key press
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}


const initGame = () => {
    //Creating the food for the snake
    let htmlMarkup = `<div class="food" style= "grid-area: ${foodY} / ${foodX}"></div>`;
    //Moving the food if the snake eats it & Checks if the snake hit the food
    if (snakeX === foodX && snakeY === foodY) {
        //this just calls the function that moves the food randomly in the grid
        changeFoodPosition();
        //Pushing the food position to snake body array
        snakeBody.push([foodX, foodY]);
    }
       //Updating the snake's head
    snakeX += velocityX;
    snakeY += velocityY;
    //Creating the snake head

    for (let i = 0; i < snakeBody.length; i++){
        //Adding a div for each part of the snake's body
     htmlMarkup += `<div class="head" style= "grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }
    //Creating a food div and inserting it in the playboard element
    playBoard.innerHTML = htmlMarkup;
}



changeFoodPosition();
//move the snake continuously with a single click
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
