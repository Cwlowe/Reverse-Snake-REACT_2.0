import React from 'react';

let Player = () =>{
    const size = 20;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    const style = {
        height:"20px",
        width:"20px",
        backgroundColor:"black",
        position: "absolute",
        left:x,
        top:y

    }
    return(
        <div style={style} className="player"> </div>
    )
}

export default Player;