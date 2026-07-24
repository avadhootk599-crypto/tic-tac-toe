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
