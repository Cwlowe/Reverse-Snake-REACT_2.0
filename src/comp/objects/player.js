import React from 'react';

let Player = (props) =>{
    const x = props.x;
    const y = props.y;
    const style = {
        height:"20px",
        width:"20px",
        backgroundColor:"grey",
        position: "relative",
        left:x,
        top:y

    }
    return(
        <div style={style} className="player"> </div>
    )
}

export default Player;