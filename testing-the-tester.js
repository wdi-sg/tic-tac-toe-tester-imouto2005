$(document).ready(function(){
  var gameBoard = []
  var player = 1
  document.getElementById('player-message').textContent = "It is Player 1's turn!"

  function switchPlayer () {
    if (player === 1) {
      document.getElementById('player-message').textContent = "It is Player 2's turn!"
      player = 2
    } else {
      document.getElementById('player-message').textContent = "It is Player 1's turn!"
      player = 1
    }
  }

  $("td").click(function() {
      if (player === 1) { $(this).append("X");
    console.log('player1'); }
      else { $(this).append("O"); }
      var id = $(this).attr('id');
      playTurn(id);
      // isGameOver()
   });
  //input: nothing
  //output: boolean (t/f) whether the game is over or not
  function isGameOver() {
    console.log('isGaeOver')
    if(whoWon() === 1 || whoWon() === 2) {
      console.log('game Over')
      return true
    }
      console.log('game go on')
    return false
  }

// input: nothing
// output: either 1, 2 or 3
// or 0 if it's the start of the game
function whoWon() {
  console.log('checking')
  if ( //player 1 wins
    (gameBoard[0] === '0' && gameBoard[2] === '1' && gameBoard[4] === '2') ||
    (gameBoard[0] === '3' && gameBoard[2] === '4' && gameBoard[4] === '5') ||
    (gameBoard[0] === '6' && gameBoard[2] === '7' && gameBoard[4] === '8') ||
    (gameBoard[0] === '0' && gameBoard[2] === '3' && gameBoard[4] === '6') ||
    (gameBoard[0] === '1' && gameBoard[2] === '4' && gameBoard[4] === '7') ||
    (gameBoard[0] === '2' && gameBoard[2] === '5' && gameBoard[4] === '8') ||
    (gameBoard[0] === '0' && gameBoard[2] === '4' && gameBoard[4] === '8') ||
    (gameBoard[0] === '2' && gameBoard[2] === '4' && gameBoard[4] === '6')
  ) {
    console.log(' whowon player 1')
    document.getElementById('player-message').textContent = "PLAYER 1 WINS!"
    return 1
  }
  else if ( // player 2 wins
    (gameBoard[1] === '0' && gameBoard[3] === '1' && gameBoard[5] === '2') ||
    (gameBoard[1] === '3' && gameBoard[3] === '4' && gameBoard[5] === '5') ||
    (gameBoard[1] === '6' && gameBoard[3] === '7' && gameBoard[5] === '8') ||
    (gameBoard[1] === '0' && gameBoard[3] === '3' && gameBoard[5] === '6') ||
    (gameBoard[1] === '1' && gameBoard[3] === '4' && gameBoard[5] === '7') ||
    (gameBoard[1] === '2' && gameBoard[3] === '5' && gameBoard[5] === '8') ||
    (gameBoard[1] === '0' && gameBoard[3] === '4' && gameBoard[5] === '8') ||
    (gameBoard[1] === '2' && gameBoard[3] === '4' && gameBoard[5] === '6')
  ) {
    // alert("Player 2 won!")
    document.getElementById('player-message').textContent = "PLAYER 2 WINS!"
    return 2
  }
  else if (gameBoard.length >= 9) {
    document.getElementById('player-message').textContent = "It's a draw!"
    return 3
  }
  else {return 0}
}

// function switchPlayer () {
//   if (player === 1) {
//     player = 2
//   } else {
//     player = 1
//   }
// }

// input: index
// output: boolean (t/f) depending if we can move or fill gameBoard
function playTurn(index) {
  gameBoard.push(index)
  if (isGameOver())  {
    $('td').click(false);
    return false
  } else {
    switchPlayer()
    console.log(gameBoard)
    console.log(player)
    return true
  }
}

// function playTurn(index) {
//   if(gameBoard[index]) { //means that the space on the gameBoard has been filled
//     return false
//   } else {
//     gameBoard[index] = player
//     switchPlayer()
//     console.log(gameBoard)
//     return true
//   }
// }

function restart() {
  gameBoard = []
  player = 1
  $("td").empty();
  document.getElementById('player-message').textContent = "It is Player 1's turn!"
}

reset.onclick = restart;
});
