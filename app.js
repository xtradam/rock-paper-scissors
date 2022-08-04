let choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = function () {
    return choices[Math.floor(Math.random() * 3)]
};

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
playerScore.textContent = 0;
computerScore.textContent = 0;

const rock = document.querySelector('.rockBox');

rock.addEventListener('click', () => playGame('Rock'));

function playGame(playerChoice) {
    let computerChoice = getComputerChoice();
    
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            playerScore.textContent++;
        } else if (computerChoice === 'Paper') {
            computerScore.textContent++;
        } else {
            console.log('its a tie!');
        }
    };
}

