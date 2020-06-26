import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {GET_TONAL_STATE} from '../store/actions/types'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/tonalController.css'


function TonalController(props) {
    const [key,setKey] = useState(props.keys);
    const [scale,setScale] = useState(props.scale);
    const [octive,setOctive] = useState(props.octive);
    const stes = props.getTonalState();


    const Notes = ['C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab','A','A#/Bb','B'];
    const Scale = ["Major","Minor","Diminished","Augmented"];
    const Octives = [1,2,3,4,5,6,7];


    useEffect(()=>{
        console.log(stes);
        console.log('Rendered: ' + key);
        console.log('Rendered: ' + scale);
        console.log('Rendered: ' + octive);
    })

    const handleKeyChange = (e) =>{
        setKey(e.target.value);
    }

    const handleChordChange = (e) =>{
        setScale(e.target.value);
    }

    const handleOctiveChange = (e) =>{
        setOctive(e.target.value);
    }

    return (
        
        <div className="tonal-controller">
            <div className="tonal-main-container">
                <div className="Key-controller">
                    <Select id="form-control"onChange={handleKeyChange}>
                        {Notes.map((not,i)=>
                            <MenuItem key={i} value={not}>{not}</MenuItem>
                        )}
                    </Select>
                    <label id="Labels"> Scale:</label>
                    <select onChange={handleChordChange}>
                        {Scale.map((scal,i) =>
                            <option key={i} value={scal}>{scal}</option>
                        )}
                    </select>
                </div>
                <div className="Octive-controller">
                    <label id="Labels"> Octive:</label>
                    <select onChange={handleOctiveChange}>
                        {Octives.map((oct,i) =>
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

const mapStateToProps = (state) => ({
    keys:state.tonalState.key,
    scale:state.tonalState.scale,
    octive:state.tonalState.octive
})

const mapDispatchToProps = dispatch => {
    return {
        getTonalState: () => dispatch({type:GET_TONAL_STATE})
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(TonalController)