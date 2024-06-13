const hands = ['Rock' , 'Paper', 'Scissors']; 

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
        getHand: getHand
    },
    player2: {
        name: 'player 2',
        getHand: getHand
    }
}

function playRound() {
    let player1Play = players.player1.getHand();
    let player2Play = players.player2.getHand();

    if (player1Play === player2Play) {

        console.log(`${players.player1.name} played ${player1Play}`);
        console.log(`${players.player2.name} played ${player2Play}`);
        console.log('It is a Tie!');
        return null;

    } else if (

        (player1Play === 'Rock' && player2Play === 'Paper') || 
        (player1Play === 'Scissors' && player2Play === 'Rock') ||
        (player1Play === 'Paper' && player2Play === 'Scissors')
    ) {

        console.log(`${players.player1.name} played ${player1Play}`);
        console.log(`${players.player2.name} played ${player2Play}`);
        console.log('Player 2 Wins!!')
        return players.player2.name;
    } else {

        console.log(`${players.player1.name} played ${player1Play}`);
        console.log(`${players.player2.name} played ${player2Play}`);
        console.log('Player 1 Wins!!')
        return players.player1.name;
    }
    // switch(getHand) {
    //     case (players.player1.return === players.player2.return):
    //         console.log(`${players.player1.name} played ${players.player1.return}`);
    //         console.log(`${players.player2.name} played ${players.player2.return}`);
    //         console.log('It is a Tie!');
    //         return null;
        
    //     case (
    //         (players.player1.return === 'Rock' && players.player2.return === 'Paper') || 
    //         (players.player1.return === 'Scissors' && players.player2.return === 'Rock') ||
    //         (players.player1.return === 'Paper' && players.player2.return === 'Scissors')
    //     ): 
    //         console.log(`${players.player1.name} played ${players.player1.return}`);
    //         console.log(`${players.player2.name} played ${players.player2.return}`);
    //         console.log('Player 2 Wins!!')
    //         return players.player2.name;
    //     default:
    //         console.log(`${players.player1.name} played ${players.player1.return}`);
    //         console.log(`${players.player2.name} played ${players.player2.return}`);
    //         console.log('Player 1 Wins!!')
    //         return players.player1.name;
    
    // }
}


playRound();