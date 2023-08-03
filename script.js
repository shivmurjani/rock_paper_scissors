let userChoice;
let computerChoice;

function getuserChoice(){
    let choice = prompt("Enter your move. ROCK/PAPER/SCISSORS").toLowerCase();
    while(x!== "rock"&&x!=="paper"&&x!=="scissor"){
        alert("invalid input, try again");
        x = getuserChoice();
    }
    return choice;
}

function getcomputerChoice(){
    botchoice = Math.floor(Math.random()*4);
    return botchoice;
}
console.log(getcomputerChoice());