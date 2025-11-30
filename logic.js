let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const genChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idxChoice = Math.floor(Math.random() * 3);
    return options[idxChoice];
}

const draw = () => {
    console.log("Game is Draw");
    msg.innerText = `Match Draw!, User Chose ${userChoice}`;
    msg.style.backgroundColor = "gray";
}


const winner = (userWin) => {
    if(userWin){
        console.log("You Win")
        msg.innerText = "You Win"
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }else{
        console.log("You Lose")
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}

const game = (userChoice) => {
    console.log("users choice is",userChoice);
    const compChoise = genChoice();
    console.log("Computer choice is",compChoise);

    if(compChoise === userChoice){
        draw();
    }else{

        let userWin = true;

        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoise === "paper" ? false : true ;
        }else
        if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoise === "scissor" ? false : true ;
        }else
        {
            //paper,rock
            userWin = compChoise === "paper" ? true : false ;
        }
        winner(userWin);
    }
    
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        game(userChoice);
    })
})