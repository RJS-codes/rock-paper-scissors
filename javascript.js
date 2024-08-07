//Computer choice
function getComputerChoice() {
    
    let x = Math.floor(Math.random() * 3) + 1;
    if(x === 1) {
        result = "rock"
    } else if (x === 2) {
        result = "paper"
    } else {
        result = "scissors"
    }
    return result
}
console.log(getComputerChoice())
