// Create a player object and a score variable
var player = {
    x: 0, // player's x coordinate
    y: 0 // player's y coordinate
};
var score = 0;

// Add the player object to the game board
var gameBoard = document.getElementById("game-board");
var playerElement = document.createElement("div");
playerElement.classList.add("player");
playerElement.style.top = player.y + "px";
playerElement.style.left = player.x + "px";
gameBoard.appendChild(playerElement);

// Add the end goal to the game board
var endGoalElement = document.createElement("div");
endGoalElement.classList.add("end-goal");
gameBoard.appendChild(endGoalElement);

// Add the score element to the game board
var scoreElement = document.querySelector(".score");

// Add event listeners for keyboard input
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" || event.key === "w") {
        // Move the player up
        player.y -= 20;
        playerElement.style.top = player.y + "px";
    } else if (event.key === "ArrowRight" || event.key === "d") {
        // Move the player right
        player.x += 20;
        playerElement.style.left = player.x + "px";
    } else if (event.key === "ArrowDown" || event.key === "s") {
        // Move the player down
        player.y += 20;
        playerElement.style.top = player.y + "px";
    } else if (event.key === "ArrowLeft" || event.key === "a") {
        // Move the player left
        player.x -= 20;
        playerElement.style.left = player.x + "px";
    }

    // Check if the player has reached the end goal
    if (player.x === 380 && player.y === 180) {
        score += 10; // increase score by 10
        scoreElement.textContent = "Score: " + score; // update score display
        alert("Congratulations, you have won!");
    }

    // Check if the player has collided with a wall
    var playerRect = playerElement.getBoundingClientRect();
    var walls = document.querySelectorAll(".wall");
    for (var i = 0; i < walls.length; i++) {
        var wallRect = walls[i].getBoundingClientRect();
        if (isCollision(player

