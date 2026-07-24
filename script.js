const GameBoard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getboard = () => board;

  const placemark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };

  const isfull = () => {
    board.every((cell) => cell !== "");
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getboard, placemark, isfull, reset };
})();

const Player = (name, mark) => {
  let score = 0;

  const getmark = () => mark;
  const getscore = () => score;
  const incrementScore = () => {
    score += 1;
  };
  return { getmark, getscore, incrementScore };
};

const gamecontroller = (function () {
  const player = [Player("Player1", "X"), Player("Player2", "O")];
  let activePlayerIndex = 0;
  let gameOver = false;
  let winner = null;

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getActivePlayer = () => player[activePlayerIndex];
  const getPlayers = () => players;
  const isGameOver = () => gameOver;
  const getWinner = () => winner;

  const switchTurn = () => {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
  };

  const checkWinner = () => {
    const board = GameBoard.getboard();
    for ([a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  };

  const playRound = (index) => {
    if (gameOver) return false;

    const placed = GameBoard.placemark(index, getActivePlayer(), getmark());
    if (!placed) return false;

    const winningmark = checkWinner();
    if (winningmark) {
      gameOver = true;
      winner = player.find((p) => p.getmark() === winningmark);
      winner.incrementScore();
    } else if (GameBoard.isfull()) {
      gameOver = true;
      winner = "tie";
    } else {
      switchTurn();
    }

    return true;
  };

  const playAgain = () => {
    activePlayerIndex = 0;
    gameOver = false;
    winner = null;
  };

  const reset = () => {
    player[0] = player(names[0], "X");
    player[1] = player(names[0], "O");
    playAgain();
  };

  return {
    getActivePlayer,
    getPlayers,
    isGameOver,
    getWinner,
    playRound,
    playAgain,
    reset,
  };
})();
