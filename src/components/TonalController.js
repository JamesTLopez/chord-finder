import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {UPDATE_KEY,
    UPDATE_KEY_CHORD,
    UPDATE_OCTAVE,
    UPDATE_SCALE,
    UPDATE_SCALE_TYPE,
    PLAY_NOTE} from '../store/actions/types'
import '../styles/tonalController.css'
import { Key , Chord} from "@tonaljs/tonal";


function TonalController(props) {
    const Notes = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
    const Scale = ["Major","Minor"];
    const Octaves = [1,2,3,4,5];

    useEffect(()=>{

        if(props.scaleType === "Major"){
            
            props.updatekeyChord(Key.majorKey(props.keys).chords);
        }else if (props.scaleType === "Minor"){
           props.updatekeyChord(Key.minorKey(props.keys).natural.chords);

        }
    },[props.scaleType,props.keys])
  
    const handleKeyChange = (e) =>{
        props.updateKey(e.target.value);
        props.updateScale(e.target.value,props.scaleType);

    }

    const handleScaleChange = (e) =>{
        props.updateScale(props.keys,e.target.value);
        props.updateScaleType(e.target.value);
    }

    const handleOctaveChange = (e) =>{
        props.updateOctave(e.target.value);
    }

    const playChord = (e) => {
        props.playNote(Chord.get(e).notes)
     
    }

    return (
        
        <div className="tonal-controller">
            <div className="tonal-main-container">
                <div className="Key-controller">
                <label id="Labels"> Key:</label>
                    <select id="form-control" onChange={handleKeyChange} value={props.keys}>
                        {Notes.map((not,i)=>
                            <option key={i} value={not}>{not}</option>
                        )}
                    </select>
                    <label id="Labels"> Scale:</label>
                    <select onChange={handleScaleChange} value={props.scaleType}>
                        {Scale.map((scal,i) =>
                            <option key={i} value={scal}>{scal}</option>
                        )}
                    </select>
                </div>
                <div className="Octive-controller">
                    <label id="Labels"> Octive:</label>
                    <select onChange={handleOctaveChange} value={props.octave}>
                        {Octaves.map((oct,i) =>
                            <option key={i} value={oct}>{oct}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="chordDisplay-main-container">
                    {props.keyChords.map((chord,i) => 
                        <button key={i} id="button" value={chord}  onClick={(e) => playChord(e.target.value)}> {chord} </button>
                    )}
            </div>
        </div>
    )
}


const mapStateToProps = ({tonalState}) => ({
    keys:tonalState.key,
    keyChords:tonalState.keyChords,
    scale:tonalState.scale,
    scaleType:tonalState.scaleType,
    octave:tonalState.octave,
    chord:tonalState.chord
})

const mapDispatchToProps = (dispatch) => ({
    updateKey: (key) => dispatch({type:UPDATE_KEY,payload:key}),
    updateScale:(key,scale) => dispatch({type:UPDATE_SCALE,payloadK:key,payloadS:scale}),
    updateScaleType:(scale) => dispatch({type:UPDATE_SCALE_TYPE,payload:scale}),
    updatekeyChord:(e) => dispatch({type:UPDATE_KEY_CHORD,payload:e}),
    updateOctave:(octave) => dispatch({type:UPDATE_OCTAVE,payload:octave}),
    playNote:(e) => dispatch({type:PLAY_NOTE,payload:e})
  })

export default connect(mapStateToProps,mapDispatchToProps)(TonalController)