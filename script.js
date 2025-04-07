document.getElementById('stone').addEventListener('click', () => game('stone'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document.getElementById('scissors').addEventListener('click', () => game('scissors'));

function game(userChoice)
{
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').innerText = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;

    const result = getResult(userChoice, computerChoice);
    document.getElementById('result').innerText = `Result: ${result}`;
}

function getResult(user, computer)
{
    if (user === computer)
    {
        return "It's a tie";
    }

    else if ((user === 'stone' && computer === 'scissors') || (user === 'paper' && computer === 'stone') || (user === 'scissors' && computer === 'paper'))
    {
        return "You win!";
    }

    else
    {
        return "You lose!";
    }
}