import {GET_TONAL_STATE} from '../actions/types'

const initState = {
    key:'C',
    chord:'Minor',
    octive:'2'
};

export default (state = initState, action) =>{
    switch(action.type){
        case GET_TONAL_STATE:
            return{
                ...state
            }
        default:
            return state;
    }
}