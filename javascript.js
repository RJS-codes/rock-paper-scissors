//Computer choice
function getComputerChoice() {
    
    let x = Math.floor(Math.random() * 3) + 1;
    const cChose = "Computer: "
    if(x === 1) {
        result = cChose +"rock"
    } else if (x === 2) {
        result = cChose +"paper"
    } else {
        result = cChose +"scissors"
    }
    return result
}
console.log(getComputerChoice())
//Human Choice
function getHumanChoice() {
    let askHuman = prompt("Rock Paper or Scissors?");
    let hChoice = "You Chose: " + askHuman;
    return hChoice
}
console.log(getHumanChoice())