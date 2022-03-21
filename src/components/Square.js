import React, { useState, useEffect } from 'react';
import './styles/Square.css';

function Square(props) {
    // const [value, setValue] = useState(null);
    
    return (
        // <button className="square" onClick={() => setValue('X')}>
        //     {value}
        // </button>

        // <button onClick={props.onClick}>{props.value}</button>

        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

export default Square;