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
