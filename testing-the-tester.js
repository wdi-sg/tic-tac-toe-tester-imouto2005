$(document).ready(function() {
  var gameBoard = []
  var player = 1
  document.getElementById('player-message').textContent = "It is Player 1's turn!"

  function switchPlayer() {
    if (player === 1) {
      document.getElementById('player-message').textContent = "It is Player 2's turn!"
      player = 2
    } else {
      document.getElementById('player-message').textContent = "It is Player 1's turn!"
      player = 1
    }
  }

  $("td").click(function() {
    if (player === 1) {
      $(this).append("X");
      console.log('player1');
    } else {
      $(this).append("O");
    }
    var id = $(this).attr('id');
    playTurn(id);
  });

  function isGameOver() {
    console.log('isGaeOver')
    if (whoWon() === 1 || whoWon() === 2) {
      console.log('game Over')
      return true
    }
    console.log('game go on')
    return false
  }

  function whoWon() {
    console.log('checking')
    if ( //player 1 wins
      ($('#0').text() === "X" && $('#1').text() === "X" && $('#2').text() === "X") ||
      ($('#3').text() === "X" && $('#4').text() === "X" && $('#5').text() === "X") ||
      ($('#6').text() === "X" && $('#7').text() === "X" && $('#8').text() === "X") ||
      ($('#0').text() === "X" && $('#3').text() === "X" && $('#6').text() === "X") ||
      ($('#1').text() === "X" && $('#4').text() === "X" && $('#7').text() === "X") ||
      ($('#2').text() === "X" && $('#5').text() === "X" && $('#8').text() === "X") ||
      ($('#0').text() === "X" && $('#4').text() === "X" && $('#8').text() === "X") ||
      ($('#2').text() === "X" && $('#4').text() === "X" && $('#6').text() === "X")
    ) {
      document.getElementById('player-message').textContent = "PLAYER 1 WINS!"
      return 1
    } else if ( // player 2 wins
      ($('#0').text() === "O" && $('#1').text() === "O" && $('#2').text() === "O") ||
      ($('#3').text() === "O" && $('#4').text() === "O" && $('#5').text() === "O") ||
      ($('#6').text() === "O" && $('#7').text() === "O" && $('#8').text() === "O") ||
      ($('#0').text() === "O" && $('#3').text() === "O" && $('#6').text() === "O") ||
      ($('#1').text() === "O" && $('#4').text() === "O" && $('#7').text() === "O") ||
      ($('#2').text() === "O" && $('#5').text() === "O" && $('#8').text() === "O") ||
      ($('#0').text() === "O" && $('#4').text() === "O" && $('#8').text() === "O") ||
      ($('#2').text() === "O" && $('#4').text() === "O" && $('#6').text() === "O")
    ) {
      document.getElementById('player-message').textContent = "PLAYER 2 WINS!"
      return 2
    } else if (Object.keys(gameBoard).length === 9) {
      console.log(gameBoard)
      document.getElementById('player-message').textContent = "It's a draw!"
      return 3
    } else {
      return 0
    }
  }

  function playTurn(index) {
    gameBoard.push(index)
    if (isGameOver() || !$('td:empty')) {
      // something here to prevent clicking on a td
      // i tried a few ways but none of them worked :(
      return false
    } else {
      switchPlayer()
      console.log(gameBoard)
      console.log(player)
      return true
    }
  }

  function restart() {
    gameBoard = []
    player = 1
    $("td").empty();
    document.getElementById('player-message').textContent = "It is Player 1's turn!"
  }

  reset.onclick = restart;
});
