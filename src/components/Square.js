import React from 'react';

const Square = ({value, onClick}) =>{
    //Setting explicitly button type
    return <button type="button" className="square" onClick={onClick}>
                { value }
            </button>;
};

export default Square;