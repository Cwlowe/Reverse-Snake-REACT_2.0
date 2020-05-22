import React from 'react';
import './board.css';
// import Enemy from './enemy';
import {GameEngine} from "react-game-engine";
import Player from './player';
import {MovePlayer} from "../systems/systems";

class Board extends React.Component{  
    constructor(prop){
        super(prop);
        this.state = {
            player:{
                x: 0, 
                y:0
            }
        };
    }
    
    render(){
        console.log(window.screenX, window.screenY)
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