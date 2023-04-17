import React, { useState } from 'react';
import './Tictactoe.css';

function Tictactoe() {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  function checkTheWinner(gameState) {
    const winningConditions = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal
      [2, 4, 6], // Diagonal
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return (
          <p> les {gameState[a] === 'X' ? 'croix' : 'ronds'} ont gagné !</p>
        );
      }
    }

    return false;
  }

  const gagnant = checkTheWinner(gameState, player);

  const handleClick = (index) => {
    if (winner || gameState[index]) {
      return;
    }
    const newGameState = [...gameState];
    newGameState[index] = player;
    setGameState(newGameState);
    setPlayer(player === 'X' ? 'O' : 'X');
    setWinner(checkTheWinner(newGameState, player));
  };

  const renderSquare = (index) => {
    return (
      <button
        className='square'
        onClick={() => {
          handleClick(index);
          checkTheWinner(gameState, player);
        }}
      >
        {gameState[index]}
      </button>
    );
  };

  return (
    <div className='board'>
      <div className='row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {gagnant && <p>{gagnant}</p>}
    </div>
  );
}

export default Tictactoe;
