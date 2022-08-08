let choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = function () {
    return choices[Math.floor(Math.random() * 3)]
};

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
playerScore.textContent = 0;
computerScore.textContent = 0;

let firstTitle = document.querySelector('.firstTitle');
let secondTitle = document.querySelector('.secondTitle');

const rock = document.querySelector('.rockBox');
const paper = document. querySelector('.paperBox');
const scissors = document.querySelector('.scissorsBox');

rock.addEventListener('click', () => playGame('Rock'));
paper.addEventListener('click', () => playGame('Paper'));
scissors.addEventListener('click', () => playGame('Scissors'));

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    firstTitle.textContent = `The Computer chose ${computerChoice}`;
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            playerScore.textContent++;
            secondTitle.textContent = 'You win this round!';
            gameStatus();
        } else if (computerChoice === 'Paper') {
            computerScore.textContent++;
            secondTitle.textContent = 'The computer wins :('
            gameStatus();
        } else {
            secondTitle.textContent = "It's a tie! No points are added.";
        }
    }   else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            playerScore.textContent++;
            secondTitle.textContent = 'You win this round!';
            gameStatus();
        } else if (computerChoice === 'Scissors') {
            computerScore.textContent++;
            secondTitle.textContent = 'The computer wins :('
            gameStatus();
        } else {
            secondTitle.textContent = "It's a tie! No points are added.";
        }
    }   else {
            if (computerChoice === 'Paper') {
                playerScore.textContent++;
                secondTitle.textContent = 'You win this round!';
                gameStatus();
            } else if (computerChoice === 'Rock') {
                computerScore.textContent++;
                secondTitle.textContent = 'The computer wins :('
                gameStatus();
            } else {
                secondTitle.textContent = "It's a tie! No points are added.";
            }

    }
}

function gameStatus() {
    if (playerScore.textContent >= 5) {
        firstTitle.textContent = 'You win!';
        secondTitle.textContent ='Play again?';
    } else if (computerScore.textContent >=5 ) {
        firstTitle.textContent = 'The computer wins :(';
        secondTitle.textContent ='Play again?';
    }

}
