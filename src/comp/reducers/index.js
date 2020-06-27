import counterReducer from './counter';
import {combineReducer} from 'redux';

const allReducer = combineReducer({
    counter: counterReducer,
})

export default allReducer;