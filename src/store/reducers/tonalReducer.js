import {GET_TONAL_STATE,
        GET_CHORD_NAMES,UPDATE_KEY,UPDATE_OCTAVE,UPDATE_SCALE,UPDATE_SCALE_TYPE} from '../actions/types'
import { ChordType } from "@tonaljs/tonal";

const allChords = ChordType.all();
const allChordNames = allChords.map(chordName => {
    return chordName.aliases[0];
})


const initState = {
    key:'C',
    scale:'C Major',
    scaleType:'Major',
    octave:'2',
    octaveM:[2,3,4],
};



export default (state = initState, action) =>{
    switch(action.type){
        case GET_TONAL_STATE:
            return{
                ...state
            }
        case GET_CHORD_NAMES:
            return{
                allChordNames
            }
        case UPDATE_KEY:
            const key = action.payload;
            return{
                ...state,
                key
            }
        case UPDATE_SCALE:
            const keys = action.payloadK;
            const newScale = action.payloadS;
            const scale = keys + " " + newScale;
            return{
                ...state,
                scale
            }
        case UPDATE_SCALE_TYPE:
            const scaleType = action.payload;
            return{
                ...state,
                scaleType
            }
        case UPDATE_OCTAVE:
            const octave = action.payload;
            let octaveM = [];

            if(octave === "1"){
                octaveM = [1,2,3];
            }else if( octave === "2"){
                octaveM = [2,3,4];
            }else if( octave === "3"){
                octaveM = [3,4,5];
            }else if( octave === "4"){
                octaveM = [4,5,6];
            }else if( octave === "5"){
                octaveM = [5,6,7];
            }

            return{
                ...state,
                octave,
                octaveM
            }

        default:
            return state;
    }
}
