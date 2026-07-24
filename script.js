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

const DisplayController = (function () {
  const boardDiv = document.getElementById("board");
  const p1NameEl = document.getElementById("player1-name");
  const p2NameEl = document.getElementById("player2-name");
  const p1ScoreEl = document.getElementById("player1-score");
  const p2ScoreEl = document.getElementById("player2-score");
  const p1Box = document.getElementById("player1-box");
  const p2Box = document.getElementById("player2-box");

  const startBtn = document.getElementById("start-btn");
  const playAgainBtn = document.getElementById("play-again-btn");
  const resetBtn = document.getElementById("reset-btn");

  const renderBoard = () => {
    boardDiv.innerHTML = "";
    Gameboard.getBoard().forEach((cell, index) => {
      const btn = document.createElement("button");
      btn.classList.add("cell");
      btn.textContent = cell;
      btn.disabled = cell !== "" || GameController.isGameOver();
      btn.addEventListener("click", () => handleCellClick(index));
      boardDiv.appendChild(btn);
    });
  };

  const renderScoreboard = () => {
    const [p1, p2] = gamecontroller.getPlayers();
    p1ScoreEl.textContent = p1.getscore();
    p2ScoreEl.textContent = p2.getscore();

    const active = GameController.getActivePlayer();
    p1Box.classList.toggle(
      "active",
      active === p1 && !GameController.isGameOver(),
    );
    p2Box.classList.toggle(
      "active",
      active === p2 && !GameController.isGameOver(),
    );
  };

  const renderAll = () => {
    renderBoard();
    renderScoreboard();
  };

  const handleCellClick = (index) => {
    const moved = GameController.playRound(index);
    if (moved) renderAll();
  };

  const handleStart = () => {
    gamecontroller.playAgain();
    renderAll();
  };

  const handlePlayAgain = () => {
    gamecontroller.playAgain();
    renderAll();
  };

  const handleReset = () => {
    gamecontroller.reset();
    renderAll();
  };

  const init = () => {
    startBtn.addEventListener("click", handleStart);
    resetBtn.addEventListener("click", handleReset);
    playAgainBtn.addEventListener("click", handlePlayAgain);
    renderAll();
  };

  return { init };
})();

DisplayController.init();
