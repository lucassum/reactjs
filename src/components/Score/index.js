import React from "react";
import "./score.css";
const Score = ({ value }) =>
    <div className="score">
        <h2 className="title" >Placar</h2>
        <div className="values">
            <div>
                {value[0]}
            </div>
            <div>
                {value[1]}
            </div>
        </div>
    </div>

export default Score