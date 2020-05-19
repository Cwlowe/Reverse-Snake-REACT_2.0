import React from 'react';
import './board.css';
// import Enemy from './enemy';
import {GameEngine} from "react-game-engine";
import Player from './player';
import {MovePlayer} from "../systems/systems";

class Board extends React.Component{  
    
    render(){
        const styles = {
            height:"60vh",
            width: "80vh",
            color: "white",
            margin: 'auto',
            border: '2px solid white'
        }
        return(
            <GameEngine 
            style= {styles}
            systems={[MovePlayer]}
            entities={{
                Player:{x:50,y:50, renderer:<Player />}
            }}>
            </GameEngine>
        );
    }
}

export default Board;