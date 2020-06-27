import React from 'react';
import './board.css';
// import Enemy from './enemy';
import {GameEngine} from "react-game-engine";
import Player from '../objects/player';
import {MovePlayer} from "../../systems/systems";

class Board extends React.Component{  
    constructor(prop){
        super(prop);
        this.state = {
            player:{
                x: 350, 
                y: 350
            }
        };
    }
    
    render(){
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
                    x:this.state.player.x,
                    y:this.state.player.y,
                    renderer:<Player/>
                }
            }}>
            </GameEngine>
        );
    }
}

export default Board;