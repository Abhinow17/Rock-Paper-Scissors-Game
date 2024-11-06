let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const userScorepara = document.querySelector("#userscore");
const compScorepara = document.querySelector("#compscore");
//Generate  computer choice
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"] ;
    const randindx = Math.floor(Math.random() * 3) ;
    return options[randindx];
}
const drawGame = () =>{
console.log("game is draw")
document.querySelector("#message").innerText= "game is draw play again" ;
}

const showWinner = () =>{
    
    if(userWin){
        console.log("you win");
        document.querySelector("#message").innerText= "you win" ;
        document.querySelector("#message").style.backgroundColor = "green";
        userscore++;
        userScorepara.innerText = userscore;
    }
    else{
        console.log("you lose");
        document.querySelector("#message").innerText= "you lose" ;
        document.querySelector("#message").style.backgroundColor = "red";
        compscore++;
        compScorepara.innerText = compscore;
    }
}

const playgame = (userChoice)=> {
    console.log("User choice =" ,userChoice)
    //compare with comp choice
    const compChoice = gencompchoice();
    console.log("computer choice =" , compChoice);

    if(userChoice==compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
    }
    if(userChoice=="rock"){
       userWin = compChoice == "paper" ? false : true;    
    }
    else if(userChoice == "paper"){
        userWin = compChoice == "scissors" ? false : true;    
    }
    else if(userChoice == "scissors"){
        userWin = compChoice == "rock" ? false : true;    
    }
    showWinner(userWin);
    }




choices.forEach((choice)=> {
    choice.addEventListener("click" , () =>{;
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);

    })
}
);