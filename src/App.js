import React, { useState } from 'react';
import './styles/root.scss'; // Declaring globally
import Board from './components/Board';
import History from './components/History';
import StatusMsg from './components/StatusMsg';
import { calcWinner } from './helpers';

const App = () => {
  // Deleting from board and adding in app so that state is available at top level
  // const [board, setBoard] = useState(Array(9).fill(null)); // will return the state and the updated state (value)
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext:true },
  ]);
  const [curMove, setCurMove] = useState(0);
  //for game state
  const current = history[curMove];

  //const [isXNext, setIsXNext] = useState(false); // after player's turn
  const winner = calcWinner(current.board);
  //Handling in StatusMsg.js
  // const message = winner 
  //       ? `Winner is ${winner}` 
  //       : `Next player is ${current.isXNext ? 'X' : '0'}`;
  const handleClick = position =>{ 
      //adding not to override existing value
      if (current.board[position || winner]) {
          return;
      }
      //prev is the callback function of the previous state
          setHistory(prev=> {
            const last = prev[prev.length -1 ]; // gives last element 
              const newBoard = last.board.map((square, pos) => {
                  if(pos === position){
                      return last.isXNext ? 'X' : '0';
                  }
                      return square;
              });
              return prev.concat({ board: newBoard, isXNext: !last.isXNext});
          });
          setCurMove(prev => prev +1 ); //changing player's turn
  };

  const moveTo = move =>{
    setCurMove(move);
  }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMsg winner={winner} current = {current}/>
      <Board board={current.board} handleClick={handleClick} />
      <History history={history} moveTo={moveTo} currentMove={curMove} />  
      {/* giving access to state */}
    </div>
  );
};

export default App;