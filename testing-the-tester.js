var gameBoard = []
var player = 1

function isGameOver() {
  if(whoWon()) {
    return true
  }
  return false
}

function whoWon() {
  return 0
}

function playTurn() {

}

function restart() {
  gameBoard = []
  player = 1

}
