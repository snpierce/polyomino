import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="home-container">
      {started ? (
        <Home />
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>Welcome to Polyomino!</h1>
          <h3>Rearrange tiles so every row and column forms a word.</h3>
          <button onClick={() => setStarted(true)}>Play</button>
        </div>
      )}
    </div>
  );
};

export default App;
