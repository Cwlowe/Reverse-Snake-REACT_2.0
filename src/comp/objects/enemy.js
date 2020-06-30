import React from 'react';

const enemy = ( props ) =>{
    let x = props.x;
    let y = props.y;
   
    const style = {
    height:"20px",
    width:"20px",
    backgroundColor:"red",
    position: "relative",
    left:x,
    top:y
}

return(

    <div style={style} className="enemy">&nbsp;</div>    
)}

export default enemy; 