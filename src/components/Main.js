import React, { useState } from "react";
import "../main.css";
import Square from "./Square/index.js";
import Score from "./Score/index.js";



function Main () {
    const [squareState, setSquareState] = useState(Array(9).fill(null))
    const reset = () => { setSquareState(Array(9).fill(null)) }
    const [xTurn, setXTurn] = useState(true)
    const [score, setScore] = useState([0, 0])
    function calculateWinner (squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (i) => {
        if (squareState[i]) return;
        const temp = [...squareState]
        temp[i] = xTurn ? 'X' : 'O'
        setSquareState(temp)
        if (calculateWinner(temp)) {
            alert(`${xTurn ? 'X' : 'O'} é o vencedor!`)
            const temp = [...score]
            temp[xTurn ? 0 : 1] += 1
            setScore(temp)
            reset()
        }
        setXTurn(!xTurn)

    }
    const squares = []
    for (let index = 0; index < 9; index++) {
        squares.push(
            <Square value={squareState[index]} onClick={() => handleClick(index)} />
        )
    }


    return (
        <main>
            <div className="container">
                {squares}
            </div>
            <Score value={score} />
        </main>
    )
}

export default Main