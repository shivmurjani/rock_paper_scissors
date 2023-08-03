
function getuserChoice(){
    let choice = prompt("Enter your move. ROCK/PAPER/SCISSORS").toLowerCase();
    while(choice!== "rock"&&choice!=="paper"&&choice!=="scissor"){
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

function compareChoice(choice_a,choice_b){
    //draw condition 
    if(choice_a == choice_b){
        return ["ITS A DRAW-","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
    }
    else if (choice_a == "rock" && choice_b == "paper"){
        return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
    }
    else if (choice_a == "paper" && choice_b == "scissor"){
        return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
    }
    else if (choice_a == "scissor" && choice_b == "rock"){
        return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
    }
    else{
        return ["YOU WIN!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];;
    }
}

for(let i=0;i<5;i++){
    let x = getuserChoice();
    let y = getcomputerChoice();
    alert(compareChoice(x,y));
}

