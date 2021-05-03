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
    var playerScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let min = Math.ceil(0)
        let max = Math.floor(2)
        let num = Math.floor(Math.random() * (max - min + 1)) + min;

        let choices = ['ROCK', 'PAPER', 'SCISSORS']
        computerSelection = choices[num];

        let playerSelection = prompt().toUpperCase()

        console.log("user: " + playerSelection)
        console.log("computer: " + computerSelection)
        alert("user: " + playerSelection + "\ncomputer: " + computerSelection)

        //let result = computerPlay(playerSelection, computerSelection)
        //console.log(result)
        
        result = computerPlay(playerSelection, computerSelection)
        alert(result)

        if (result.includes("USER"))
            playerScore += 1
        else if (result.includes("COMPUTER"))
            computerScore += 1

        console.log(result + '\n')
        console.log('')
    }
    console.log("User score: " + playerScore + "\nComputer score: " + computerScore)
    
    if (playerScore > computerScore)
        console.log("You win!")
    else if (computerScore == playerScore)
        console.log("TIE")
    else
        console.log("Computer wins!")
}


game();