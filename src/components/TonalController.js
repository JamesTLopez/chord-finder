import React from 'react'
import { connect } from 'react-redux'
import {UPDATE_KEY,
    UPDATE_OCTAVE,
    UPDATE_SCALE,
    UPDATE_SCALE_TYPE} from '../store/actions/types'
import '../styles/tonalController.css'


function TonalController(props) {
    const Notes = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    const Scale = ["Major","Minor","Diminished","Augmented"];
    const Octaves = [1,2,3,4,5];



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
                <h1 className="">{props.scale}</h1>
            </div>
        </div>
    )
}


const mapStateToProps = ({tonalState}) => ({
    keys:tonalState.key,
    scale:tonalState.scale,
    scaleType:tonalState.scaleType,
    octave:tonalState.octave,
    chord:tonalState.chord
})

const mapDispatchToProps = (dispatch) => ({
    updateKey: (key) => dispatch({type:UPDATE_KEY,payload:key}),
    updateScale:(key,scale) => dispatch({type:UPDATE_SCALE,payloadK:key,payloadS:scale}),
    updateScaleType:(scale) => dispatch({type:UPDATE_SCALE_TYPE,payload:scale}),
    updateOctave:(octave) => dispatch({type:UPDATE_OCTAVE,payload:octave})
  })

export default connect(mapStateToProps,mapDispatchToProps)(TonalController)