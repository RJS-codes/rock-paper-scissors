    let humanScore = 0;
    let computerScore = 0;

for (let i = 1; i <= 5; i++) {
    function getComputerChoice() {
        const weaponChoices = ["rock", "paper" ,"scissors"]
        let x = Math.floor(Math.random() * weaponChoices.length);
        return weaponChoices[x]
    }

    function getHumanChoice() {
        let askHuman = prompt('Rock Paper or Scissors?').toLowerCase();
        const validChoices = ['rock', 'paper', 'scissors'];
            while (!validChoices.includes(askHuman)) {
                askHuman = prompt('Invalid choice. Please choose Rock, Paper, or Scissors.').toLowerCase();
            }
            return askHuman;
    }

    function playRound(humanChoice, computerChoice) {
        const w = 'You Won!'
        const l = 'You lost'
        const d = "It's a draw"
        if (humanChoice === computerChoice) {
            return d
        } else if(humanChoice == 'rock') {
            if (computerChoice == 'scissors') {
                ++humanScore
                return w; 
            }else  { //paper
                ++computerScore
                return l;
            }
        } else if(humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                ++humanScore
                return w;
            }else { //scissor
                ++computerScore
                return l;
            }
        } else if(humanChoice == 'scissors') {
            if(computerChoice == 'paper') {
                ++humanScore
                return w;
            }else { //rock
                ++computerScore
                return l;
            }
        }
    }
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}
