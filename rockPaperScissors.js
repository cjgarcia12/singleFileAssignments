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
        getHand: getHand,
        points: 0
    },
    player2: {
        name: 'player 2',
        getHand: getHand,
        points: 0
    }
}

function playRound(player1, player2) {
    players.player1.name = player1;
    players.player2.name = player2;
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
        console.log(`${players.player2.name} wins!!`);
        return players.player2.name;
    } else {

        console.log(`${players.player1.name} played ${player1Play}`);
        console.log(`${players.player2.name} played ${player2Play}`);
        console.log(`${players.player1.name} wins!!`)
        return players.player1.name;
    }
}

const playGame = (player1, player2, playerUntil) => {
    let roundNum = 1;
    players.player1.points = 0;
    players.player2.points = 0;
    while(players.player1.points < playerUntil && players.player2.points < playerUntil) {
        console.log(`---THIS IS ROUND ${roundNum++}---`)
        let winner = playRound(player1, player2);
        if (winner === players.player1.name) {
            players.player1.points++
        } else if(winner === players.player2.name) {
            players.player2.points++
        }
    }
    if (players.player1.points < players.player2.points) {
        return players.player2.name;
    } else if (players.player1.points > players.player2.points) {
        return players.player1.name;
    } 
}

const playTournament = (player1, player2, player3, player4, playerUntil) => {
    let winner1 = playGame(player1,player2,playerUntil);
    let winner2 = playGame(player3,player4,playerUntil);

    let champion = playGame(winner1,winner2,playerUntil);

    return champion;
}


let test1 = 'Christian';
let test2 = 'Peyton';
let test3 = 'Sydney';
let test4 = 'Carlos';
// playRound();
// console.log(playGame(test1, test2, 5));

console.log(`${playTournament(test1, test2, test3, test4, 3)} is the world champion!`);