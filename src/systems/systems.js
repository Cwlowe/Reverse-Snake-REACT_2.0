
export const MovePlayer = (entities,{input}) => {
    const {payload} = input.find(x=>x.name === "onKeyPress") || {};
    
    if(payload){
        const Player = entities["Player"];
        switch(payload.which){
            case 115: Player.y += 5; break;
            case 100: Player.x += 5; break;
            case 119: Player.y -= 5; break;
            case 97: Player.x -= 5; break;
            default: console.log("default");
        }
    }

    return entities;
};

