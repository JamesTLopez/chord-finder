import React,{useState} from 'react'
import { connect } from 'react-redux'
import Visualizer  from './Visualizer'
import Keyboard from './Keys'
import TonalController from './TonalController'
import { UPDATE_CHORD, PLAY_NOTE } from '../store/actions/types'
import '../styles/piano.css'



function Piano(props) {
    let octaveController = props.octaveM;
    let pianoKeys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"];
    let allowRepeat = true;
    const keyboard = "awsedftgyhujkolp;";
    let [keyBuffer,setBuffer] = useState(props.notes);
    let [pressedKey,setPressedKey] = useState(props.pressedKey);


    let playN = (e) => {
        props.playNote(e);     
    }

    let keyDown = (e) =>{
        //Prevents repeat of multiple notes
        if(e.repeat !== undefined){
            allowRepeat = !e.repeat;
        }
        if(!allowRepeat) return;

        allowRepeat = false;
        let st = keyboard.indexOf(e.key);
        if(st !== -1){
            if(st >= 12){ 
                let note = pianoKeys[st] + (octaveController[1] + 1);
                pressedKey[st] = true;
                setPressedKey(pressedKey);
                playN(note);
                keyBuffer.push(pianoKeys[st]);
                props.updateChord(keyBuffer);  
                return;
            }
            let note = pianoKeys[st] + octaveController[1];
            pressedKey[st] = true;
            setPressedKey(pressedKey);
            playN(note);
            keyBuffer.push(pianoKeys[st]);
            props.updateChord(keyBuffer);
        }
        else{
            console.log('wrong key');
        }
    }

    let keyUp = (e) =>{
        let st = keyboard.indexOf(e.key);
        let note  = pianoKeys[st];
        pressedKey[st] = false;
        setPressedKey(pressedKey);
        setBuffer(keyBuffer.filter(not => not !== note));
    }


    return (
        <div className="container" onKeyDown={(e)=>keyDown(e)} onKeyUp={(e)=>keyUp(e)} tabIndex="0">
            <header>Chord Finder</header>
            <div className="content-container">
                <Visualizer/>
                <Keyboard />
                <div>
                    
                </div>
            </div>
            <TonalController/>
        </div> 
    )

    
}
const mapStateToProps = ({tonalState}) => ({
    keys:tonalState.key,
    scale:tonalState.scale,
    octave:tonalState.octave,
    octaveM:tonalState.octaveM,
    chord:tonalState.chord,
    notes:tonalState.notes,
    pressedKey:tonalState.pressedKey
})

const mapDispatchToProps = (dispatch) => ({
    updateChord:(buffer) => dispatch({type:UPDATE_CHORD,payload:buffer}),
    playNote:(e) => dispatch({type:PLAY_NOTE,payload:e})

})

export default connect(mapStateToProps,mapDispatchToProps)(Piano)