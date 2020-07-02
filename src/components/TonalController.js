import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {GET_TONAL_STATE,
    GET_CHORD_NAMES,UPDATE_KEY,UPDATE_OCTAVE,UPDATE_SCALE} from '../store/actions/types'
// import { ChordType } from "@tonaljs/tonal";
import '../styles/tonalController.css'


function TonalController(props) {
    const [key,setKey] = useState(props.keys);
    const [scale,setScale] = useState(props.scale);
    const [octave,setOctave] = useState(props.octave);
  


    const Notes = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    const Scale = ["Major","Minor","Diminished","Augmented"];
    const Octaves = [1,2,3,4,5];

    // const allChords = ChordType.all();
    // const allChordNames = allChords.map(chordName => {
    //     return chordName.aliases[0];
    // })


    useEffect(()=>{
    })

    const handleKeyChange = (e) =>{
        setKey(e.target.value);
        props.updateKey(e.target.value);

    }

    const handleScaleChange = (e) =>{
        setScale(e.target.value);
        props.updateScale(e.target.value);

    }

    const handleOctaveChange = (e) =>{
        setOctave(e.target.value);
        props.updateOctave(e.target.value);

    }

    return (
        
        <div className="tonal-controller">
            <div className="tonal-main-container">
                <div className="Key-controller">
                    <select id="form-control" onChange={handleKeyChange} value={key}>
                        {Notes.map((not,i)=>
                            <option key={i} value={not}>{not}</option>
                        )}
                    </select>
                    <label id="Labels"> Scale:</label>
                    <select onChange={handleScaleChange} value={scale}>
                        {Scale.map((scal,i) =>
                            <option key={i} value={scal}>{scal}</option>
                        )}
                    </select>
                </div>
                <div className="Octive-controller">
                    <label id="Labels"> Octive:</label>
                    <select onChange={handleOctaveChange} value={octave}>
                        {Octaves.map((oct,i) =>
                            <option key={i} value={oct}>{oct}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="chordDisplay-main-container">
                <h1 className="">Player</h1>
            </div>
        </div>
    )
}

TonalController.propTypes = {
    getTonalState: PropTypes.func.isRequired
}

const mapStateToProps = ({tonalState}) => ({
    keys:tonalState.key,
    scale:tonalState.scale,
    octave:tonalState.octave
})

const mapDispatchToProps = (dispatch) => ({
    getTonalState: () => dispatch({type:GET_TONAL_STATE}),
    getChordNames: () => dispatch({type:GET_CHORD_NAMES}),
    updateKey: (key) => dispatch({type:UPDATE_KEY,payload:key}),
    updateScale:(scale) => dispatch({type:UPDATE_SCALE,payload:scale}),
    updateOctave:(octave) => dispatch({type:UPDATE_OCTAVE,payload:octave})
  })

export default connect(mapStateToProps,mapDispatchToProps)(TonalController)