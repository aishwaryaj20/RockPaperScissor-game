

let userscore=0;
let compscore=0;

const choices = document.querySelectorAll('.choice');
const userscorepara =document.querySelector('#us');
const compscorepara = document.querySelector('#cs');


const gencompChoice = () => {
    const option = ['rock','paper','scissors']
    const randomindex= Math.floor(Math.random()*3)
return option[randomindex]

}


const showWinner = (userwin,userChoice,compChoice) => {
if(userwin)
{
    userscore++;
    userscorepara.innerText=userscore;
    // console.log('You win')
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

}

else 
{
    compscore++;
    compscorepara.innerText=compscore;
    console.log('You lose')
    msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}

const drawgame =() =>{
    console.log('game draw')
    msg.innerText = "Game was Draw.";
  msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
console.log("user choice=", userChoice)
//compu choice:
const compChoice = gencompChoice();
console.log("computer choice=",compChoice)

if(userChoice === compChoice)
{
    drawgame()
}
else {
    let userwin = true;

    if(userChoice === 'rock') //comp can paper,scissor
    {
        userwin = compChoice === 'paper' ? false : true;
    
}else if(userChoice === 'paper') { //comp can rock,scissor
    userwin = compChoice === 'scissor' ? false : true;
}
else {
    userwin = compChoice=== 'rock' ? false : true;
}
showWinner(userwin,compChoice,userChoice)
}
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        //console.log("1st click",userChoice)
   playGame(userChoice)
});
});
