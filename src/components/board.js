import React from 'react';
import './board.css';
import Enemy from './enemy';

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
            <div style= {styles}>
                <Enemy/>
            </div>
        );
    }
}

export default Board;