import React from 'react';

export default function SnakeEyes({eye, onRoll}){
           
    return (
        <button className="snakeEye"  onClick={onRoll} disabled={eye===1}>{eye}</button>
 
    )
}