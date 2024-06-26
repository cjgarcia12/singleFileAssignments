const hands = ['Rock', 'Paper', 'Scissors'];

function getHand() {
    let hand = parseInt(Math.random() * 10) % 3;
    return hands[hand];
}

let players = {
    player1: { name: '', hand: '', points: 0 },
    player2: { name: '', hand: '', points: 0 },
    player3: { name: '', hand: '', points: 0 },
    player4: { name: '', hand: '', points: 0 }
};

let tournamentState = {
    round: 1,
    currentPlayers: ['player1', 'player2'],
    nextPlayers: [],
    playUntil: 3,
    champion: ''
};

function displayPlayerHands() {
    let handsDiv = document.getElementById('playerHands');
    handsDiv.innerHTML = `
        <p>${players.player1.name}: ${players.player1.hand}</p>
        <p>${players.player2.name}: ${players.player2.hand}</p>
        <p>${players.player3.name}: ${players.player3.hand}</p>
        <p>${players.player4.name}: ${players.player4.hand}</p>
    `;
}

function updateScores() {
    let scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = `
        <p>${players.player1.name}: ${players.player1.points}</p>
        <p>${players.player2.name}: ${players.player2.points}</p>
        <p>${players.player3.name}: ${players.player3.points}</p>
        <p>${players.player4.name}: ${players.player4.points}</p>
    `;
}

function pickHand(player) {
    players[player].hand = getHand();
    displayPlayerHands();
    if (players[tournamentState.currentPlayers[0]].hand && players[tournamentState.currentPlayers[1]].hand) {
        document.getElementById('nextRound').disabled = false;
    }
}

function playRound(player1, player2) {
    let player1Play = players[player1].hand;
    let player2Play = players[player2].hand;

    if (player1Play === player2Play) {
        return null;
    } else if (
        (player1Play === 'Rock' && player2Play === 'Paper') ||
        (player1Play === 'Scissors' && player2Play === 'Rock') ||
        (player1Play === 'Paper' && player2Play === 'Scissors')
    ) {
        return players[player2].name;
    } else {
        return players[player1].name;
    }
}

function playNextRound() {
    const [player1, player2] = tournamentState.currentPlayers;
    let winner = playRound(player1, player2);
    if (winner === players[player1].name) {
        players[player1].points++;
    } else if (winner === players[player2].name) {
        players[player2].points++;
    }
    displayCurrentRound();
    updateScores();
    players[player1].hand = '';
    players[player2].hand = '';
    document.getElementById('nextRound').disabled = true;

    if (players[player1].points >= tournamentState.playUntil || players[player2].points >= tournamentState.playUntil) {
        if (players[player1].points > players[player2].points) {
            tournamentState.nextPlayers.push(player1);
        } else {
            tournamentState.nextPlayers.push(player2);
        }

        if (tournamentState.nextPlayers.length === 2) {
            tournamentState.currentPlayers = tournamentState.nextPlayers;
            tournamentState.nextPlayers = [];
        } else {
            if (tournamentState.currentPlayers[0] === 'player1' || tournamentState.currentPlayers[0] === 'player2') {
                tournamentState.currentPlayers = ['player3', 'player4'];
            } else {
                tournamentState.currentPlayers = tournamentState.nextPlayers;
            }
        }

        if (tournamentState.currentPlayers.length === 1) {
            tournamentState.champion = tournamentState.currentPlayers[0];
            document.getElementById('results').innerHTML = `${players[tournamentState.champion].name} is the world champion!`;
        }
    }
}

function displayCurrentRound() {
    let currentRoundDiv = document.getElementById('currentRound');
    currentRoundDiv.innerHTML = `
        <p>Round ${tournamentState.round}: ${players[tournamentState.currentPlayers[0]].name} vs. ${players[tournamentState.currentPlayers[1]].name}</p>
    `;
    tournamentState.round++;
}

document.getElementById('startTournament').addEventListener('click', () => {
    players.player1.name = document.getElementById('player1Name').value;
    players.player2.name = document.getElementById('player2Name').value;
    players.player3.name = document.getElementById('player3Name').value;
    players.player4.name = document.getElementById('player4Name').value;

    tournamentState.round = 1;
    tournamentState.currentPlayers = ['player1', 'player2'];
    tournamentState.nextPlayers = [];
    tournamentState.champion = '';
    document.getElementById('results').innerHTML = '';

    displayCurrentRound();
    updateScores();
    displayPlayerHands();
});

document.getElementById('nextRound').addEventListener('click', playNextRound);

document.getElementById('player1Pick').addEventListener('click', () => pickHand(tournamentState.currentPlayers[0]));
document.getElementById('player2Pick').addEventListener('click', () => pickHand(tournamentState.currentPlayers[1]));

document.getElementById('restart').addEventListener('click', () => {
    window.location.reload();
});
