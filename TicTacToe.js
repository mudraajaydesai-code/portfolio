import React, { useState, useEffect } from 'react';
import { X as CloseIcon } from 'lucide-react';

const TicTacToe = ({ onClose }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'draw'
  const [playerScore, setPlayerScore] = useState(0);
  const [rounds, setRounds] = useState(1);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const getAvailableMoves = (board) => {
    return board.map((cell, index) => cell === null ? index : null).filter(val => val !== null);
  };

  // Smart AI that lets player win
  const getAIMove = (board) => {
    const availableMoves = getAvailableMoves(board);
    
    // If it's the first few rounds, play a bit smarter but still lose
    if (rounds <= 2) {
      // Block obvious wins only 30% of the time
      if (Math.random() < 0.3) {
        for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          if (board[a] === 'X' && board[b] === 'X' && board[c] === null) return c;
          if (board[a] === 'X' && board[c] === 'X' && board[b] === null) return b;
          if (board[b] === 'X' && board[c] === 'X' && board[a] === null) return a;
        }
      }
    }
    
    // Otherwise, make random moves (ensuring player wins most of the time)
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };

  const handleCellClick = (index) => {
    if (board[index] || !isPlayerTurn || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus('won');
      setPlayerScore(prev => prev + 1);
      return;
    }

    if (getAvailableMoves(newBoard).length === 0) {
      setGameStatus('draw');
      return;
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && gameStatus === 'playing') {
      const timer = setTimeout(() => {
        const aiMove = getAIMove(board);
        if (aiMove !== undefined) {
          const newBoard = [...board];
          newBoard[aiMove] = 'O';
          setBoard(newBoard);
          
          const winner = checkWinner(newBoard);
          if (winner) {
            setGameStatus('lost'); // This should rarely happen
          } else if (getAvailableMoves(newBoard).length === 0) {
            setGameStatus('draw');
          }
        }
        setIsPlayerTurn(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, gameStatus]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('playing');
    setRounds(prev => prev + 1);
  };

  const resetAll = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameStatus('playing');
    setPlayerScore(0);
    setRounds(1);
  };

  return (
    <div className="tictactoe-modal">
      <div className="tictactoe-content">
        <div className="game-header">
          <div className="game-title">
            <h3>🎮 SECRET TIC-TAC-TOE</h3>
            <p>You found the hidden game! (Psst... you might be lucky today 😉)</p>
          </div>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon size={24} />
          </button>
        </div>

        <div className="game-stats">
          <div className="stat">
            <span className="stat-label">YOUR WINS</span>
            <span className="stat-value">{playerScore}</span>
          </div>
          <div className="stat">
            <span className="stat-label">ROUND</span>
            <span className="stat-value">{rounds}</span>
          </div>
        </div>

        <div className="game-board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`game-cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'player' : ''} ${cell === 'O' ? 'ai' : ''}`}
              onClick={() => handleCellClick(index)}
              disabled={cell !== null || gameStatus !== 'playing' || !isPlayerTurn}
            >
              {cell}
            </button>
          ))}
        </div>

        <div className="game-status">
          {gameStatus === 'playing' && (
            <p className={isPlayerTurn ? 'player-turn' : 'ai-turn'}>
              {isPlayerTurn ? "Your turn (X)" : "AI thinking..."}
            </p>
          )}
          {gameStatus === 'won' && (
            <div className="win-message">
              <h4>🎉 Congratulations! You Won!</h4>
              <p>Great strategy! Want to play again?</p>
            </div>
          )}
          {gameStatus === 'lost' && (
            <div className="lose-message">
              <h4>😅 AI Got Lucky!</h4>
              <p>That was unexpected! Try again?</p>
            </div>
          )}
          {gameStatus === 'draw' && (
            <div className="draw-message">
              <h4>🤝 It's a Draw!</h4>
              <p>Well played! Another round?</p>
            </div>
          )}
        </div>

        <div className="game-controls">
          {gameStatus !== 'playing' && (
            <button className="play-again-btn" onClick={resetGame}>
              PLAY AGAIN
            </button>
          )}
          <button className="reset-btn" onClick={resetAll}>
            RESET SCORE
          </button>
        </div>

        <div className="game-footer">
          <p className="easter-egg-text">
            🎯 <strong>Data Analytics Fun Fact:</strong> This AI uses a "strategic underperformance" algorithm 
            - a real concept in game theory where optimal play isn't always the best strategy! 📊
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;