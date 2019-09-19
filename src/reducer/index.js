import {combineReducers} from 'redux';
import teams from './premierleageue'

const myReducer = combineReducers({
    teams,
})

export default myReducer;