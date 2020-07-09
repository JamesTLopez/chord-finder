import {UPDATE_KEY,UPDATE_KEY_CHORD,UPDATE_OCTAVE,UPDATE_SCALE,UPDATE_SCALE_TYPE,UPDATE_CHORD,PLAY_NOTE} from '../actions/types'
import { Chord,Note} from "@tonaljs/tonal";
import Audio from '../../audio/C.ogg'
import {Howl} from 'howler'

let SoundEngine = new Howl({
    src:[Audio],
    onload(){
        console.log("Loaded")
    },
    onloaderror(e,msg){
        console.log('' + msg + e)
    }
})


const initState = {
    key:'C',
    keyChords:["Cmaj7", "Dm7", "Em7", "Fmaj7", "G7", "Am7", "Bm7b5"],
    scale:'C Major',
    scaleType:'Major',
    octave:'2',
    octaveM:[2,3,4],
    chord:[],
    notes:[],
    SoundEngine:SoundEngine
};





export default (state = initState, action) =>{
    switch(action.type){
        case UPDATE_KEY:
            const key = action.payload;
            return{
                ...state,
                key
            }
        case UPDATE_KEY_CHORD:
            const keyChords = action.payload;
            return{
                ...state,
                keyChords
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
        case UPDATE_CHORD:
            const notes = action.payload;
            const chord = Chord.detect(action.payload);
     
            return{
                ...state,
                chord,
                notes
            }
        case PLAY_NOTE:
            let playedNotes = action.payload; 
            const noteLength = 1997;
            let tIndex = 0;
            let midiInfo = Note.midi(playedNotes);

            for(let i = 24; i<=96; i++){
                state.SoundEngine['_sprite'][i] = [tIndex,noteLength];
                tIndex += noteLength;
 
            }

            if(Array.isArray(playedNotes)){
                playedNotes.forEach(element => {
                    let midiInfo = Note.midi(element + state.octaveM[1]);
                    console.log(element);
                    state.SoundEngine.play(midiInfo.toString());
                });
                return{...state};
            }

           
            state.SoundEngine.play(midiInfo.toString());
            return {...state}; 
            
        default:
            return state;
    }
}
