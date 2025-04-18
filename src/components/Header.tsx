import React from "react";
import Timer from './Timer';
import './static/Header.css';
import { useGameState } from "../GameStateContext";

const Header: React.FC = () => {
  const { showTimer, timerKey, timerPaused } = useGameState();

  return (
    <header className="header-container">
      <a href="/index.html">
        Polyomino
      </a>
      {/* Left side (Timer) */}
      <div className="timer-container">
          {showTimer && <Timer key={timerKey} paused={timerPaused} />}
        </div>
      <button className="help-btn">
        Help
      </button>
    </header>
  );
};

export default Header;