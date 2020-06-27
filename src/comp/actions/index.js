export const increment = (x) =>{
    return{
        type: 'INCREMENT',
        payload: x
    };
};

export const restart = () =>{
    return{
        type: 'RESTART',
    };
};

export const getLocation = () =>{
    return{
        type: 'GET_LOCATION'
    };
};