
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