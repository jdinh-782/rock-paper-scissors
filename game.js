function computerPlay(playerSelection, computerSelection)
{
    //tie if strings are the same
    if (playerSelection == computerSelection)
        return "TIE"

    //if user picks ROCK
    else if (playerSelection == "ROCK")
    {
        //user wins
        if (computerSelection == "SCISSORS")
            return "ROCK BEATS SCISSORS (USER WINS)"
        
        //computer wins
        else if (computerSelection == "PAPER")
            return "PAPER BEATS ROCK (COMPUTER WINS)"
    }

    //if user picks PAPER
    else if (playerSelection == "PAPER")
    {
        //user wins
        if (computerSelection == "ROCK")
            return "PAPER BEATS ROCK (USER WINS)"

        //computer wins
        else if (computerSelection == "SCISSORS")
            return "SCISSORS BEATS PAPER (COMPUTER WINS)"
    }

    //if user picks SCISSORS
    else if (playerSelection == "SCISSORS")
    {
        //user wins
        if (computerSelection == "PAPER")
            return "SCISSORS BEATS PAPER (USER WINS)"
        
        //computer wins
        else if (computerSelection == "ROCK")
            return "ROCK BEATS SCISSORS (COMPUTER WINS)"
    }
    return "NULL"
}


function game()
{
    let gameStr = "";
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 1; i++)
    {
        let min = Math.ceil(0)
        let max = Math.floor(2)
        let num = Math.floor(Math.random() * (max - min + 1)) + min;

        let choices = ['ROCK', 'PAPER', 'SCISSORS']
        computerSelection = choices[num];

        let playerSelection = prompt("ROCK, PAPER, SCISSORS").toUpperCase()

        console.log("user: " + playerSelection)
        console.log("computer: " + computerSelection)
        let message = "user: " + playerSelection + "\ncomputer: " + computerSelection;

        alert(message);
        gameStr += message + '\n';

        //let result = computerPlay(playerSelection, computerSelection)
        //console.log(result)
        
        result = computerPlay(playerSelection, computerSelection)
        alert(result)

        gameStr += result + '\n\n';

        if (result.includes("USER"))
            playerScore += 1
        else if (result.includes("COMPUTER"))
            computerScore += 1

        console.log(result + '\n')
        console.log('')
    }
    let scoreOutput = ("User score: " + playerScore + "\nComputer score: " + computerScore)
    console.log(scoreOutput)
    alert(scoreOutput)

    gameStr += scoreOutput + '\n\n';

    let winner = "";

    if (playerScore > computerScore)
        winner = "You win!"
    else if (computerScore == playerScore)
        winner = "TIE"
    else
        winner = "Computer wins!"

    console.log(winner)
    alert(winner)

    gameStr += winner;
    console.log('')
    console.log(gameStr)
    
    return gameStr;
}


const buttonChoices = document.querySelectorAll("button");
buttonChoices.forEach((button) =>
{
    button.addEventListener('click', () => {console.log(button.id);
    });
});

//gane();