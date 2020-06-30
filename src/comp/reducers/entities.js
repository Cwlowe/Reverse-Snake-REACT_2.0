import Player from '../objects/player';
import Enemy from '../objects/enemy';
import React from 'react';
const Entities = (state = {
    player:{
        x: 350, 
        y: 350,
        speed:8.8,
        renderer: <Player/>
    },
    enemy:{
        x:0,
        y:0,
        speed:2,
        radius:10,
        renderer:<Enemy/>
    },
    enemy1:{
        x:0,
        y:0,
        speed:5,
        renderer:<Enemy/>
    }
}, action) =>{
    switch(action.type){
        default: return state;
    }
}

export default Entities;