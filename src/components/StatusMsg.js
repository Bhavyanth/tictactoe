import React from 'react';

const StatusMsg = ({ winner, current }) => {
    const noMovesLeft = current.board.every((element)=> element != null)
    return (
    <h2>
        {/* this must always return a boolean value, put it as !!0 or winner.length > 0*/}
        {winner && `Winner is ${winner}`}
        {/* Game won and no moves */}
        {!winner && !noMovesLeft && `Next Player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && !noMovesLeft && `X and O tied`}
        </h2>
    );
};
export default StatusMsg;