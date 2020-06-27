import counterReducer from './counter';
import PlayerLOC from './playerLoc';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    counter: counterReducer,
    location: PlayerLOC
})

export default allReducer;