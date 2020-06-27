const counterReducer = (state=0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'RESTART':
            state = 0
            return state;
        default: 
            return state;
    }
};

export default counterReducer;