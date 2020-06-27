import React from 'react';
import Board from './comp/board/board';
import './App.css';
import ScoreBoard from './comp/score/scoreBoard';

function App() {
  
  return (
    
    <div className="App">
      <ScoreBoard></ScoreBoard>
      <Board/>      
    </div>
  );
}

export default App;
