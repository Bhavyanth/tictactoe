import React from 'react';

const StatusMsg = ({ winner, current }) => {
    const noMovesLeft = current.board.every((element)=> element != null)
    return (
    <div className="status-message">
        {/* this must always return a boolean value, put it as !!0 or winner.length > 0*/}
        {/* {winner && `Winner is ${winner}`} => replacing this with react fragement to apply styles */}
        {winner && 
        // Due to first rule in component, it must always return single element, hence <>
        <>
        Winner is {' '}
        <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
        </span>
        </>}
        {/* Game won and no moves */}
        {!winner && !noMovesLeft && 
        <>
        Next Player is {' '}<span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
            </span>
        </>
        }
        {/* Game tied with no moves left */}
        {!winner && noMovesLeft && 
        <>
            <span className="text-green">X</span> and{' '}
            <span className="text-orange">O</span> tied
        </>}
        </div>
    );
};
export default StatusMsg;