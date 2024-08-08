    //Score
    let humanScore = 0;
    let computerScore = 0;
for (let i = 1; i < 5; i++) {
   //Computer choice
    function getComputerChoice() {
        
        let x = Math.floor(Math.random() * 3) + 1;
        const cChose = 'Computer: '
        if(x === 1) {
            return 'rock'
        } else if (x === 2) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }
    //Human Choice
    function getHumanChoice() {
        let askHuman = prompt('Rock Paper or Scissors?');
        return askHuman
    }

    //Play single round

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
        } else if(humanChoice == 'scissor') {
            if(computerChoice == 'paper') {
                ++humanScore
                return w;
            }else { //rock
                ++computerScore
                return l;
            }
        }
    if( d ) {
        continue
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
