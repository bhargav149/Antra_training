// Model - Handles the data logic
class GameModel {
    constructor() {
        this.gameBoard = Array(12).fill().map((_, index) => ({ id: index, hasMole: false }));
        this.intervalId = null;
    }

    spawnMole() {
        const freeBlocks = this.gameBoard.filter(block => !block.hasMole);
        if (freeBlocks.length > 0) {
            const moleIndex = Math.floor(Math.random() * freeBlocks.length);
            this.gameBoard[freeBlocks[moleIndex].id].hasMole = true;
            return freeBlocks[moleIndex].id;
        }
        return null;
    }

    clearMoles() {
        this.gameBoard.forEach(block => block.hasMole = false);
    }

    removeMole(id) {
        this.gameBoard[id].hasMole = false;
    }

    getActiveMolesCount() {
        return this.gameBoard.filter(block => block.hasMole).length;
    }
}

// View - Handles the UI updates
class GameView {
    static displayMole(id) {
        document.getElementById(`block-${id}`).classList.add("mole");
    }

    static hideMole(id) {
        document.getElementById(`block-${id}`).classList.remove("mole");
    }

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
        this.isGameActive = false;
        this.attachEventListeners();
    }

    toggleGame() {
        if (this.isGameActive) {
            clearInterval(this.model.intervalId);
            this.model.clearMoles();
            GameView.clearAllMoles();
            this.isGameActive = false;
        } else {
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

    updateScore() {
        document.getElementById('score-count').innerText = `Your total score is ${this.score}`;
    }

    attachEventListeners() {
        document.querySelectorAll('.block').forEach(block => {
            block.addEventListener('click', () => {
                const id = parseInt(block.id.split('-')[1]);
                if (this.model.gameBoard[id].hasMole) {
                    this.model.removeMole(id);
                    GameView.hideMole(id);
                    this.score += 1; // Increment score
                    this.updateScore(); // Update the score display
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
