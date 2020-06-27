import React from 'react';
import './board.css';
// external files
import { GameEngine } from "react-game-engine";
import { useSelector } from 'react-redux';
// custom files
import Player from '../objects/player';
import { MovePlayer } from "../../systems/systems";
// import { getLocation } from "../actions";

const Board = () =>{  
    const Plocation = useSelector(state=> state.location.player);
    
    const styles = {
        height:"700px",
        width: "700px",
        color: "white",
        margin: 'auto',
        border: '2px solid white'
    }
    return(
        <GameEngine 
        style= {styles}
        systems={[MovePlayer]}
        entities={{
            Player:{
                x:Plocation.x,
                y:Plocation.y,
                renderer:<Player/>
            }
        }}>
        </GameEngine>
    );
}

export default Board;