

// //get user input
// function getuserChoice(){
//     let choice = prompt("Enter your move.____ROCK/PAPER/SCISSOR_____").toLowerCase();
//     while(choice!== "rock"&&choice!=="paper"&&choice!=="scissor"){
//         alert("invalid input, try again");
//         return getuserChoice(); //recursively calls until input is valid
//     }
//     return choice;//returns valid input
// }
// //get computer input
// function getcomputerChoice(){
//     const choices = ["rock","paper","scissor"];
//     let botchoice = choices[Math.floor(Math.random()*3)];
//     return botchoice; //random choice is returned
// }

// //deciding winner
// // function compareChoice(choice_a,choice_b){
// //     //draw condition 
// //     if(choice_a == choice_b){
// //         return ["ITS A DRAW-","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
// //     }
// //     else if (choice_a == "rock" && choice_b == "paper"){
// //         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
// //     }
// //     else if (choice_a == "paper" && choice_b == "scissor"){
// //         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
// //     }
// //     else if (choice_a == "scissor" && choice_b == "rock"){
// //         return ["CPU WINS!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];
// //     }
// //     else{
// //         return ["YOU WIN!!!","YOUR CHOICE - "+choice_a,"CPU CHOICE - "+choice_b];;
// //     }
// // }


// //deciding winner USING A matrix!
// function getResult(choice_a,choice_b){
//     const choices = {rock:0,paper:1,scissor:2};
//     const resultMatrix= [[0,-1,1],[1,0,-1],[-1,1,0]]; //9 possible outcomes
//     const userChoice = choices[choice_a];
//     const cpuChoice = choices[choice_b];

//     //CONDITIONS TO DECIDE----- VICTORY == 1, LOSS == -1, TIE == 0
//     if(resultMatrix[userChoice][cpuChoice]==0){
//         return 0;
//     }
//     else if(resultMatrix[userChoice][cpuChoice]==1){
//         return 1;
//     }
//     else{
//         return -1;
//     }

// }

// function gameState(){
//     var computerScore = 0;
//     var userScore = 0;
//     alert("Are you ready to play?");
//     var yourName=prompt("Enter your name if you'd like", "BOB");
//     while(computerScore!=5 && userScore!=5){
//         let x = getuserChoice();
//         let y = getcomputerChoice();
//         if(getResult(x,y)==0){
//             alert(`ITS A TIE ${yourName}!`);
//             alert(`YOUR Score is ${userScore} and CPU score is ${computerScore}`);
//         }
//         else if(getResult(x,y)==1){
//             userScore++;
//             alert(`YOU WIN ${yourName}!! ${x} beats ${y}`);
            
//             alert(`YOUR Score is ${userScore} and CPU score is ${computerScore}`);
//         }
//         else{
//             computerScore++;
//             alert(`YOU LOSE ${yourName}!! ${y} beats ${x}`); 
//             alert(`YOUR Score is ${userScore} and CPU score is ${computerScore}`);
//         }
//     }

// }

// gameState();



// function compareInput(e){
//    const turn = this.value; //0 1 2
//    const cpuTurn = getcomputerChoice();// r p c
//    const decision = getResult(turn,cpuTurn); // 0 1 -1
//    const playermove = this.id; //r p c

   
// }






let playerScore = 0;
let cpuScore = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissor = document.querySelector('#scissor');
const display = document.querySelector(".dialogue");
const counter = document.querySelector(".score-tracker");

btnRock.value = 0;
btnPaper.value = 1;
btnScissor.value = 2;

btnRock.addEventListener('click',compareInput);
btnPaper.addEventListener('click',compareInput);
btnScissor.addEventListener('click',compareInput);

function compareInput(e){
    const turn = this.value; //0 1 2
    const cpuTurn = getcomputerChoice();// r p c
    const decision = getResult(turn,cpuTurn); // 0 1 -1
    const playermove = this.id; //r p c
    // updateplayerScore(decision);
    // updatecpuScore(decision);
    console.log(decision,playermove,cpuTurn);
    displayResult(decision,playermove,cpuTurn);
}   


function updateplayerScore(){
    //check if player score is 5, if it is, display winner, reset count to zero
    // if decision is 1, update playerScore
    if(playerScore+1 == 5){
        display.textContent = 'User is the winner, Game Resets!!';
        display.setAttribute('style','color:green; font-size:40px;');
        counter.setAttribute('style','color:green; font-size:70px;');
        counter.textContent = `USER ${playerScore+1}:${cpuScore} CPU`;
        playerScore = 0;
        cpuScore = 0;
        counter.textContent = `USER ${playerScore}:${cpuScore} CPU`;
        
    }
    else{
        playerScore+=1
        counter.textContent = `USER ${playerScore}:${cpuScore} CPU`
        counter.setAttribute('style','color:yellow; font-size:70px');
    }
    
}
function updatecpuScore(){
      //check if cpu score is 5, if it is, display winner, reset count to zero
    // if decision is -1, update cpuScore
    if(cpuScore+1 == 5){
        display.textContent = 'CPU is the winner, Game Resets!';

        counter.textContent = `USER ${playerScore}:${cpuScore+1} CPU`;
        playerScore = 0;
        cpuScore = 0;
        counter.textContent = `GET GOOD LOL`;

    }
    else{
        cpuScore+=1
        counter.textContent = `USER ${playerScore}:${cpuScore} CPU`;
        counter.setAttribute('style','color:red; font-size:70px');
    }
}

function displayResult(decision,playermove,cpuTurn){
    if(decision==0){
        display.textContent=`ITS A TIE !`;
        display.setAttribute('style','color:pink; font-size:40px;');
        counter.setAttribute('style','color:pink; font-size:70px;');
    }
    else if(decision==1){
        display.textContent=`YOU WIN!!! ${playermove} beats ${cpuTurn}`;
        display.setAttribute('style','color:yellow; font-size:35px;');
        updateplayerScore();
    }
    else{
        
        display.textContent=`YOU LOSE!! ${cpuTurn} beats ${playermove}`;
        display.setAttribute('style','color:red; font-size:35px;');
        updatecpuScore();
    }
}

function getcomputerChoice(){
    const choices = ["rock","paper","scissor"];
    let botchoice = choices[Math.floor(Math.random()*3)];
    return botchoice; //random choice is returned
}

function getResult(choice_a,choice_b){
    const choices = {rock:0,paper:1,scissor:2};
    const resultMatrix= [[0,-1,1],[1,0,-1],[-1,1,0]]; //9 possible outcomes
    const userChoice = choice_a;
    const cpuChoice = choices[choice_b];

    //CONDITIONS TO DECIDE----- VICTORY == 1, LOSS == -1, TIE == 0
    if(resultMatrix[userChoice][cpuChoice]==0){
        return 0;
    }
    else if(resultMatrix[userChoice][cpuChoice]==1){
        return 1;
    }
    else{
        return -1;
    }

}






