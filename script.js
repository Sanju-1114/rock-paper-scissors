
document.querySelectorAll('.redirect-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        switch (index) {
            case 0:
                window.location.href = '/Game/TicTacToe/tic-tac-toe.html';
                break;
            case 1:
                window.location.href = '/Game/RockPaperScissors/rock-paper-scissors.html';
                break; 
            case 2:
                window.location.href = '/Game/FlipCoinToss/flip-coin-toss.html';
                break;
            case 3:
                window.location.href = '/Game/Sudoku/sudoku.html';
                break;
            case 4:
                window.location.href = '/Game/SnakeGame/snake.html';
                break;
            case 5:
                window.location.href = '/Game/TypingTest/typing.html';
                break;
            case 6:
                window.location.href = '/Game/2048/twoThousandFourtyEight.html';
                break;
            case 7:
                window.location.href = '/Game/DotAndBoxes/dot-and-boxes.html';
                break;
            case 8:
                window.location.href = '/Game/Ludo/ludo.html';
                break;
        }
    });
});

