function getComputerChoice() {

    let cs = Math.floor(Math.random() * 3);

    if (cs == 0) {

        return "rock";

    }
    
    if (cs == 1) {

        return "paper";

    }

    if (cs == 2) {

        return "scissors";

    }

}

function playRound(playerSelection, computerSelection) {

    let ps = playerSelection.toLowerCase();

    if (ps == computerSelection){

        return "It's a tie!";

    }
    else if(ps == "rock" && computerSelection == "paper"){

        return "Computer has won the round!";

    }
    else if(ps == "rock" && computerSelection == "scissors"){

        return "Player has won the round!";

    }
    else if(ps == "paper" ** computerSelection == "rock"){
        return "Player has won the round!";
    }
    else if(ps == "paper" && computerSelection == "scissors"){

        return "Computer has won the round!";

    }
    else if(ps == "scissors" && computerSelection == "rock"){
        return "Computer has won the round!";
    }
    else if(ps == "scissors" && computerSelection == "paper"){
        return "Player has won the round!";
    }

}

function game(){

    for(let i = 0 ; i < 5 ; i++) {

        let playerInput = prompt("Rock, Paper, or Scissors?");

        console.log(playRound(playerInput, getComputerChoice()));

    }

}

game();