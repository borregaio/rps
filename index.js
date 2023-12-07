

var user = 0;
var computer = 0;
var draw = 0;


function play() {

    var game = ["rock", "paper", "scissors"];

    var computerChoice = game[Math.floor(Math.random() * game.length)];

    var userChoice = prompt("Choose rock, paper or scissors");

    if (userChoice === "rock") {
        alert("You chose rock");
        alert("Computer chose " + computerChoice);
        if (computerChoice === "paper") {
            alert("You lose");
            computer++
        } else if (computerChoice === "scissors") {
            alert("You win");
            user++
        } else {
            alert("It's a tie!")
            draw++
        }
    }

    if (userChoice === "paper") {
        alert("You chose paper");
        alert("Computer chose " + computerChoice);
        if (computerChoice === "rock") {
            alert("You win");
            user++
        } else if (computerChoice === "scissors") {
            alert("You lose");
            computer++
        } else {
            alert("It's a tie!")
            draw++
        }
    }

    if (userChoice === "scissors") {
        alert("You chose scissors");
        alert("Computer chose " + computerChoice);
        if (computerChoice === "rock") {
            alert("You lose");
            computer++
        } else if (computerChoice === "paper") {
            alert("You win");
            user++
        } else {
            alert("It's a tie!");
            draw++
        }
    }

    alert("User score: " + user + " / Computer score: " + computer + " / Draw: " + draw);
    console.log("User score: " + user);
    console.log("Computer score: " + computer);
    console.log("Draw: " + draw);

}

for (let i = 0; i < 3; i++) {
    play();
}

if (user > computer) {
    alert("You win the game!");
} else if (computer > user) {
    alert("You lose the game!");
} else {
    alert("It's a tie!");
}

user = 0;
computer = 0;
draw = 0;

