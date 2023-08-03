
function getuserChoice(){
    let choice = prompt("Enter your move. ROCK/PAPER/SCISSORS").toLowerCase();
    while(choice!== "rock"&&choice!=="paper"&&choice!=="scissor"){
        alert("invalid input, try again");
        return getuserChoice(); //recursively calls until input is valid
    }
    return choice;//returns valid input
}

function getcomputerChoice(){
    const choices = ["rock","paper","scissor"];
    let botchoice = choices[Math.floor(Math.random()*3)];
    return botchoice; //random choice is returned
}

//deciding winner
// function compareChoice(choice_a,choice_b){
//     //draw condition 
//     if(choice_a == choice_b){
//         return ["ITS A DRAW-","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
//     }
//     else if (choice_a == "rock" && choice_b == "paper"){
//         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
//     }
//     else if (choice_a == "paper" && choice_b == "scissor"){
//         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
//     }
//     else if (choice_a == "scissor" && choice_b == "rock"){
//         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
//     }
//     else{
//         return ["YOU WIN!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];;
//     }
// }


//deciding winner USING A matrix!
function giveResult(choice_a,choice_b){
    const choices = {rock:0,paper:1,scissor:2};
    const resultMatrix= [[0,-1,1],[1,0,-1],[-1,1,0]]; //9 possible outcomes
    const userChoice = choices[choice_a];
    const cpuChoice = choices[choice_b];

    //CONDITIONS TO DECIDE----- VICTORY == 1, LOSS == -1, TIE == 0
    if(resultMatrix[userChoice][cpuChoice]==0){
        return "ITS A TIE";
    }
    else if(resultMatrix[userChoice][cpuChoice]==1){
        return "YOU WIN!!";
    }
    else{
        return "YOU LOSE :(";
    }

}

