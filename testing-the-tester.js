var gameBoard = []
var player = 1

function isGameOver() {
  if(whoWon()) {
    return true
  }
  return false
}

function whoWon() {
  if ( //player 1 wins
    (gameBoard[0] === 0 && gameBoard[2] === 1 && gameBoard[4] === 2) ||
    (gameBoard[0] === 3 && gameBoard[2] === 4 && gameBoard[4] === 5) ||
    (gameBoard[0] === 6 && gameBoard[2] === 7 && gameBoard[4] === 8) ||
    (gameBoard[0] === 0 && gameBoard[2] === 3 && gameBoard[4] === 6) ||
    (gameBoard[0] === 1 && gameBoard[2] === 4 && gameBoard[4] === 7) ||
    (gameBoard[0] === 2 && gameBoard[2] === 5 && gameBoard[4] === 8) ||
    (gameBoard[0] === 0 && gameBoard[2] === 4 && gameBoard[4] === 8) ||
    (gameBoard[0] === 2 && gameBoard[2] === 4 && gameBoard[4] === 6)
  ) {return 1}
  else if ( //player 2 wins
    (gameBoard[1] === 0 && gameBoard[3] === 1 && gameBoard[5] === 2) ||
    (gameBoard[1] === 3 && gameBoard[3] === 4 && gameBoard[5] === 5) ||
    (gameBoard[1] === 6 && gameBoard[3] === 7 && gameBoard[5] === 8) ||
    (gameBoard[1] === 0 && gameBoard[3] === 3 && gameBoard[5] === 6) ||
    (gameBoard[1] === 1 && gameBoard[3] === 4 && gameBoard[5] === 7) ||
    (gameBoard[1] === 2 && gameBoard[3] === 5 && gameBoard[5] === 8) ||
    (gameBoard[1] === 0 && gameBoard[3] === 4 && gameBoard[5] === 8) ||
    (gameBoard[1] === 2 && gameBoard[3] === 4 && gameBoard[5] === 6)
  ) {return 2}
  else if (gameBoard.length >= 9) {return 3}
  else {return 0}
}

function playTurn(index) {
  if (isGameOver() || gameBoard.includes(index)) {
    return false
  } else {
    gameBoard.push(index)
    console.log(gameBoard)
    return true
  }
}

function restart() {
  gameBoard = []
  player = 1
}
