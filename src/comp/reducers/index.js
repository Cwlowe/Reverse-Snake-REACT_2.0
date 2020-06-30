import counterReducer from './counter';
import PlayerLOC from './playerLoc';
import entities from './entities';
import {combineReducers} from 'redux';


const allReducer = combineReducers({
    counter: counterReducer,
    entities
})

export default allReducer;