import React from 'react';
import './board.css';
// external files
import { GameEngine } from "react-game-engine";
import { useSelector } from 'react-redux';
// custom files
import { EntitiesSystem } from "../../systems/systems";
// import { getLocation } from "../actions";

const Board = () =>{  
    const Entities = useSelector(state=> state.entities);
    const styles = {
        height:"700px",
        width: "700px",
        color: "white",
        margin: 'auto',
        outline: '2px solid white'
    }
    
    return(
        <GameEngine className="board"
        style= {styles}
        systems={[EntitiesSystem]}
        entities={Entities}>
        </GameEngine>
    );
}

export default Board;