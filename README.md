# Tic-Tac-Toe

project link : https://avadhootk599-crypto.github.io/tic-tac-toe/

A browser-based Tic-Tac-Toe game built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. Two players share the same device, take turns marking the board, and the game tracks scores across rounds.

## Features

- Classic 3x3 Tic-Tac-Toe gameplay for two local players
- Score tracking across rounds (persists until reset)
- Turn indicator highlighting the active player
- "Play Again" to start a new round while keeping scores
- "Reset" to clear scores and player names entirely
- Hand-drawn, paper-and-pencil visual theme

## Tech Stack

- HTML5
- CSS3 (custom paper/pencil styling, no framework)
- Vanilla JavaScript (factory functions / module pattern — no libraries)

## Project Structure

```
.
├── index.html    # Page structure
├── style.css     # Paper/pencil themed styling
└── script.js     # Game logic (Gameboard, Player, GameController, DisplayController)
```

## How to Play

1. Open `index.html` in a browser.
2. Click **Start Game** to begin.
3. Players take turns clicking a cell to place their mark (X or O).
4. The active player is highlighted on the scorecard.
5. When a player gets three in a row, their score increases.
6. Click **Play Again** to start a new round, or **Reset** to clear scores.

## Status

Work in progress — currently debugging some logic issues in `script.js` (board rendering, win detection) as part of the learning process.

## Author

avadhootk599-crypto
