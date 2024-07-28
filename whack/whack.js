// Model - Handles the data logic
class GameModel {
    constructor() {
        this.gameBoard = Array(12).fill().map((_, index) => ({ id: index, hasMole: false }));
        this.intervalId = null;
    }

    // Spawns a mole on a random free block
    spawnMole() {
        const freeBlocks = this.gameBoard.filter(block => !block.hasMole);
        if (freeBlocks.length > 0) {
            const moleIndex = Math.floor(Math.random() * freeBlocks.length);
            this.gameBoard[freeBlocks[moleIndex].id].hasMole = true;
            return freeBlocks[moleIndex].id;
        }
        return null;
    }

    // Clears all moles from the game board
    clearMoles() {
        this.gameBoard.forEach(block => block.hasMole = false);
    }

    // Removes a mole from the game board based on its id
    removeMole(id) {
        this.gameBoard[id].hasMole = false;
    }

    // Returns the count of active moles on the game board
    getActiveMolesCount() {
        return this.gameBoard.filter(block => block.hasMole).length;
    }
}

// View - Handles the UI updates
class GameView {
    // Displays a mole on the specified block
    static displayMole(id) {
        document.getElementById(`block-${id}`).classList.add("mole");
    }

    // Hides a mole from the specified block
    static hideMole(id) {
        document.getElementById(`block-${id}`).classList.remove("mole");
    }

    // Clears all moles from the UI
    static clearAllMoles() {
        document.querySelectorAll('.mole').forEach(elem => elem.classList.remove('mole'));
    }
}

// Controller - Connects the model and view
class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.score = 0; // Initialize score
        this.timer = 30; // Initialize timer
        this.isGameActive = false;
        this.attachEventListeners();
    }

    // Resets the game state
    resetGame() {
        this.score = 0; // Reset score
        this.timer = 30; // Reset timer
        this.model.clearMoles(); // Clear any moles from the board
        GameView.clearAllMoles(); // Update the view to reflect no moles
        document.getElementById('score-count').innerText = `Your total score is ${this.score}`;
        document.getElementById('time-left').innerText = `Time Left: ${this.timer}`;
    }

    // Starts the game timer
    startTimer() {
        this.timerId = setInterval(() => {
            this.timer -= 1;
            document.getElementById('time-left').innerText = `Time Left: ${this.timer}`;
            if (this.timer <= 0) {
                this.stopGame(true);
            }
        }, 1000);
    }

    // Toggles the game state between active and inactive
    toggleGame() {
        if (this.isGameActive) {
            this.stopGame(false);
        } else {
            this.resetGame(); // Reset the game before starting
            this.startTimer();
            this.model.intervalId = setInterval(() => {
                if (this.model.getActiveMolesCount() < 3) {
                    const id = this.model.spawnMole();
                    if (id !== null) {
                        GameView.displayMole(id);
                    }
                }
            }, 1000);
            this.isGameActive = true;
        }
    }

    // Stops the game and displays a game over message if specified
    stopGame(isGameOver) {
        clearInterval(this.model.intervalId);
        clearInterval(this.timerId);
        this.isGameActive = false;
        if (isGameOver) {
            alert("Time is Over!");
        }
    }

    // Updates the score in the UI
    updateScore() {
        document.getElementById('score-count').innerText = `Your total score is ${this.score}`;
    }

    // Attaches event listeners to the game blocks
    attachEventListeners() {
        document.querySelectorAll('.block').forEach(block => {
            block.addEventListener('click', () => {
                const id = parseInt(block.id.split('-')[1]);
                if (this.model.gameBoard[id].hasMole) {
                    this.model.removeMole(id);
                    GameView.hideMole(id);
                    this.score += 1;
                    this.updateScore();
                }
            });
        });
    }
}


// Setup when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    const gameModel = new GameModel();
    const gameController = new GameController(gameModel, GameView);
    window.gameController = gameController; // Make gameController accessible globally if needed
});
