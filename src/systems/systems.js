                                                                                                                                    

export const EntitiesSystem = (entities,{input}) => {
    const {payload} = input.find(x=>x.name === "onKeyPress") || {};
    
    const Enemy = entities["enemy"];

    let num = Math.floor(Math.random() * 4);
    
    switch(num){
        case 0: Enemy.y -= Enemy.speed; break;
        case 1: Enemy.x -= Enemy.speed; break;
        case 2: Enemy.y += Enemy.speed; break;
        case 3: Enemy.x += Enemy.speed; break;
        default: break; 
    }
    
    if(payload){
        const Player = entities["player"];
        console.log(`Player x: ${Player.x}, Player y: ${Player.y} `)
        switch(payload.which){
            case 115: Player.y += Player.speed; break;
            case 100: Player.x += Player.speed; break;
            case 119: Player.y -= Player.speed; break;
            case 97: Player.x -= Player.speed; break;
            default: console.log("default");
        }
    }

    return entities;
};
