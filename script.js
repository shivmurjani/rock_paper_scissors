
function getuserChoice(){
    let choice = prompt("Enter your move. ROCK/PAPER/SCISSORS").toLowerCase();
    while(x!== "rock"&&x!=="paper"&&x!=="scissor"){
        alert("invalid input, try again");
        x = getuserChoice();
    }
    return choice;
}

function getcomputerChoice(){
    const choices = ["rock","paper","scissor"];
    botchoice = choices[Math.floor(Math.random()*3)];
    return botchoice;
}
