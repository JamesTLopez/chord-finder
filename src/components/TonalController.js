import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {GET_TONAL_STATE} from '../store/actions/types'
import '../styles/tonalController.css'

function TonalController(props) {
    const [key,setKey] = useState(props.tonal.key);
    const [chord,setChord] = useState(props.tonal.chord);
    const [octive,setOctive] = useState(props.tonal.octive);

    useEffect(()=>{
        console.log('Rendered: ' + key);
        console.log('Rendered: ' + chord);
        console.log('Rendered: ' + octive);
    })

    const handleKeyChange = (e) =>{
        console.log('Key:' +e.target.value);
    }

    const handleChordChange = (e) =>{
        console.log('Chord: ' + e.target.value);
    }

    const handleOctiveChange = (e) =>{
        console.log('Octive: ' + e.target.value);
    }

    return (
        <div className="tonal-controller">
            <div className="tonal-main-container">
                <div className="Key-controller">
                    <label id="Labels"> Key:</label>
                    <select onChange={handleKeyChange}>
                        <option value="C">C</option>
                        <option value="C#/Db">C#/Db</option>
                        <option value="D">D</option>
                        <option value="D#/Eb">D#/Eb</option>
                        <option value="F">F</option>
                        <option value="F#">F#</option>
                        <option value="G">G</option>
                        <option value="G#/Ab">G#/Ab</option>
                        <option value="A">A</option>
                        <option value="A#/Bb">A#/Bb</option>
                        <option value="B">B</option>
                    </select>
                    <label id="Labels"> Chords:</label>
                    <select onChange={handleChordChange}>
                        <option value="Major">Major</option>
                        <option value="Minor">Minor</option>
                        <option value="Diminished">Diminished</option>
                        <option value="Augmented">Augmented</option>
                
                    </select>
                </div>
                <div className="Octive-controller">
                    <label id="Labels"> Octive:</label>
                    <select onChange={handleOctiveChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
            </div>
            <div className="chord-display">
                <h1 className="">chord</h1>
            </div>
        </div>
    )
}

TonalController.propTypes = {
    
}

const mapStateToProps = (state) => ({
    tonal:state.tonalState
})

const mapDispatchToProps = (dispatch) => ({
    getTonalControllerState: () => dispatch({type:GET_TONAL_STATE})
})

export default connect(mapStateToProps,mapDispatchToProps)(TonalController)