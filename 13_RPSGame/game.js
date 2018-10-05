// My Rock, Paper, Scissors Game created through the Northcoders Introduction to Programming evening sessions

console.log('Hello you!')
alert('Welcome to an exciting game of rock paper scissors...')
const name = prompt('What is your name?')
const wantsToPlay = confirm('Do you wanna play a game? A game of Rock, Paper, Scissors ' + name + '?');
if (wantsToPlay) {
    console.log('Great! Let us begin!');
    const playerChoice = prompt(name + ' What is your choice - rock, paper or scissors?').toLowerCase();
    console.log('You chose ' + playerChoice);
    let randomNumber = Math.random();
    let computerChoice = 'rock';
    if (randomNumber < 0.34) {
        computerChoice = 'paper'
    } 
    else if (randomNumber < 0.67) {
        computerChoice = 'scissors';
    }
console.log ('Computer chose ' + computerChoice);

    if (computerChoice === playerChoice) {
        console.log(name + '! Wow, its a draw!');
    } 
    else if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissors' || computerChoice === 'scissors' && playerChoice === 'rock') {
             {
                console.log(name + ' WINS! Yaaaas!'); 
            }   
        } 
        else {
                console.log('Boooo sorry u a loser ' + name);
            } 
            }
       
 else {
            console.log(name + ' - you chose something random, please refresh and pick again!');
        }
    }  
else {
    console.log('You are super boring!');
}
