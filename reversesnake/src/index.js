import React from "react";
import ReactDOM from "react-dom";
import {GameEngine} from "react-game-engine";
import { Box } from "./renderers.js";
import { MoveBox } from "./systems.js";

function App(){
    return(
        <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 200,  y: 200, renderer: <Box />}
        }}>
 
      </GameEngine>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))
