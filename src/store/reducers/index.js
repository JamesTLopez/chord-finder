import {combineReducers} from 'redux'
import tonalReducer from './tonalReducer'

export default combineReducers({
    tonal: tonalReducer
});