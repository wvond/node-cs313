function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCPUChoice() {
    let num = getRandomInt(0, 2);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getWinner(player, cpu, username) {
    let winner = "cpu";

    if (player == cpu) {
        winner = "draw";
    } else if ((player == "rock" && cpu == "scissors")
        || (player == "scissors" && cpu == "paper")
        || (player == "paper" && cpu == "rock")) {
        winner = username;
    }

    return winner;
}

function playGame(req, res) {
    console.log("Playing the game from a different file");

    let player = req.query.player_choice;
    let username = req.query.username;

    let cpu = getCPUChoice();

    let winner = getWinner(player, cpu, username);

    let stuff = {player: player, cpu: cpu, winner: winner};

    res.render('results', stuff);
}

module.exports = {playGame: playGame};