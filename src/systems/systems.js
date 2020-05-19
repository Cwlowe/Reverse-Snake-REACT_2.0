
const MovePlayer = (entities,{input}) => {
    const {payload} = input.find(x=>x.name === "onMouseDown") || {};

    if(payload){
        const Player = entities["Player"];

        Player.x = payload.pageX;
        Player.y = payload.pageY;
        console.log(Player);

    }

    return entities;
};
export {MovePlayer};