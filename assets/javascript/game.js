var wins = 0;
var loses = 0;
var guessRemain = 9;
var guesses = [];
var userGuess = "a";
var compGuess = "a";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 'v', "w", "x", "y", "z"];

function reset() {
    compGuess = alphabet[Math.floor(Math.random() * 26)];
    console.log(compGuess);
    guessRemain = 9;
    guesses = [];
    var html =
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + loses + "</p>" +
        "<p>Guesses Left: " + guessRemain + "</p>" +
        "<p>Your guesses so far: " + guesses + "</p>";
    return document.getElementById("game").innerHTML = html;
}

reset();

document.onkeyup = function (event) {
    userGuess = event.key;
    guesses.push(userGuess);
    guessRemain--;
    if (userGuess === compGuess) {
        wins++;
        reset();
    }
    else if (guessRemain === 0) {
        loses++;
        reset();
    }
    var html =
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + loses + "</p>" +
        "<p>Guesses Left: " + guessRemain + "</p>" +
        "<p>Your guesses so far: " + guesses + "</p>";
    document.getElementById("game").innerHTML = html;

}

// function reset() {
//     var wins = 0;
//     var loses = 0;
//     var guessRemain = 9;
//     var guesses = [];
//     var html =
//         "<p>Guess what letter I'm thinking of</p>" +
//         "<p>Wins: " + wins + "</p>" +
//         "<p>Loses: " + loses + "</p>" +
//         "<p>Guesses Left: " + guessRemain + "</p>" +
//         "<p>Your guesses so far: " + guesses + "</p>";
//     document.getElementById("game").innerHTML = html;

// }