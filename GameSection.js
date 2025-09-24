import React, { useState } from 'react';
import { Gamepad2, Trophy, Zap } from 'lucide-react';
import TicTacToe from './TicTacToe';

const GameSection = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <section id="game" className="game-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">BONUS FEATURE</span>
          <h2 className="section-title">CHALLENGE TIME</h2>
          <p className="section-description">
            Think you can beat a data scientist at strategy? Try your luck!
          </p>
        </div>
        
        <div className="game-intro">
          <div className="game-card">
            <div className="game-icon">
              <Gamepad2 size={48} />
            </div>
            
            <div className="game-content">
              <h3 className="game-title">Tic-Tac-Toe Challenge</h3>
              <p className="game-description">
                Ready for a fun challenge? I've programmed this tic-tac-toe game with a 
                "strategic underperformance" algorithm - a real concept in game theory where 
                optimal play isn't always the best strategy. Can you figure out the pattern?
              </p>
              
              <div className="game-features">
                <div className="feature">
                  <Trophy className="feature-icon" />
                  <span>You always have a chance to win!</span>
                </div>
                <div className="feature">
                  <Zap className="feature-icon" />
                  <span>Data science meets game theory</span>
                </div>
              </div>
              
              <button 
                className="play-game-btn"
                onClick={() => setShowGame(true)}
              >
                <Gamepad2 size={20} />
                START GAME
              </button>
            </div>
          </div>
          
          <div className="game-stats">
            <div className="stat-card">
              <h4>Fun Fact</h4>
              <p>
                This AI uses machine learning principles to create an engaging experience 
                rather than trying to win every time. It's designed to be fun and 
                demonstrate strategic thinking!
              </p>
            </div>
          </div>
        </div>
        
        {showGame && (
          <TicTacToe onClose={() => setShowGame(false)} />
        )}
      </div>
    </section>
  );
};

export default GameSection;