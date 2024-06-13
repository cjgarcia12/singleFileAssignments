const hands = ['Rock' , 'paper', 'Scissors']; 

function getHand() {
    let hand = parseInt(Math.random()*10)%3;
    if (hand === 0) {
        return hands[0];
    } else if (hand === 1) { 
        return hands[1];
    } else  if (hand === 2) {
        return hands[2];
    } 
}

let players = {
    player1: {
        name: 'player 1',
        return: getHand()
    },
    player2: {
        name: 'player 2',
        return: getHand()
    }
}

function playRound() {
    if (players.player1.return === players.player2.return) {

        console.log(`${players.player1.name} played ${players.player1.return}`);
        console.log(`${players.player2.name} played ${players.player2.return}`);
        console.log('It is a Tie!');
        return null;

    } else if (

        (players.player1.return === 'Rock' && players.player2.return === 'Paper') || 
        (players.player1.return === 'Scissors' && players.player2.return === 'Rock') ||
        (players.player1.return === 'Paper' && players.player2.return === 'Scissors')
    ) {

        console.log(`${players.player1.name} played ${players.player1.return}`);
        console.log(`${players.player2.name} played ${players.player2.return}`);
        console.log('Player 2 Wins!!')
        return players.player2.name;
    } else {

        console.log(`${players.player1.name} played ${players.player1.return}`);
        console.log(`${players.player2.name} played ${players.player2.return}`);
        console.log('Player 1 Wins!!')
        return players.player1.name;
    }
}

playRound();