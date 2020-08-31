import React ,{useState}from 'react'
import { connect } from 'react-redux'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import '../styles/keys.css'
import { UPDATE_CHORD, PLAY_NOTE ,KEY_UP , KEY_DOWN} from '../store/actions/types'




function Keys(props) {
    
    let octaveController = props.octaveM;
    let [pressedKey] = useState(props.pressedKey);

    
    let playN = (e) => {
        props.playNote(e);     
    }


    return (
        <div className="playArea">
            <div className="keyboard-container">
               
                <div className="Keys">
                    <div className="white-key">
                        <img  src={White} alt="C" onClick={()=>playN("C" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Db" onClick={()=>playN('Db'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="D" onClick={()=>playN("D" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Eb" onClick={()=>playN('Eb'+ octaveController[1])}></img>
                    </div>
                    <div  className="white-key">
                        <img src={White} alt="E" onClick={()=>playN("E" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="F" onClick={()=>playN("F" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Gb" onClick={()=>playN('Gb'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="G" onClick={()=>playN("G" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Ab" onClick={()=>playN('Ab'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="A" onClick={()=>playN("A" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Bb" onClick={()=>playN('Bb'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="B" onClick={()=>playN("B" + octaveController[1])}></img>
                    </div>
                </div>
                <div className="Keys">
                    <div className="white-key">
                        <img className="C" id={pressedKey[0]?"pressedKey" : "note"} src={White} alt="C" onClick={()=>playN("C" + octaveController[0])}></img>
                        <label>
                            A
                        </label>
                    </div>
                    <div className="black-key">
                        <img className="Db" id={pressedKey[1]?"pressedKey" : "note"} src={Black} alt="Db" onClick={()=>playN('Db'+ octaveController[0])}></img>
                        <label>
                            W
                        </label>
                    </div>
                    <div className="white-key">
                        <img className="D" id={pressedKey[2]?"pressedKey" : "note"} src={White} alt="D" onClick={()=>playN("D" + octaveController[0])}></img>
                        <label>
                            S
                        </label>
                    </div>
                    <div className="black-key">
                        <img className="Eb" id={pressedKey[3]?"pressedKey" : "note"} src={Black} alt="Eb" onClick={()=>playN('Eb'+ octaveController[0])}></img>
                        <label>
                            E
                        </label>
                    </div>
                    <div  className="white-key">
                        <img className="E" id={pressedKey[4]?"pressedKey" : "note"} src={White} alt="E" onClick={()=>playN("E" + octaveController[0])}></img>
                        <label>
                            D
                        </label>
                    </div>
                    <div className="white-key">
                        <img className="F" id={pressedKey[5]?"pressedKey" : "note"} src={White} alt="F" onClick={()=>playN("F" + octaveController[0])}></img>
                        <label>
                            F
                        </label>
                        <label>
                            F
                        </label>
                    </div>
                    <div className="black-key">
                        <img className="Gb" id={pressedKey[6]?"pressedKey" : "note"} src={Black} alt="Gb" onClick={()=>playN('Gb'+ octaveController[0])}></img>
                        <label>
                            T
                        </label>
                    </div>
                    <div className="white-key">
                        <img className="G" id={pressedKey[7]?"pressedKey" : "note"} src={White} alt="G" onClick={()=>playN("G" + octaveController[0])}></img>
                        <label>
                            G
                        </label>
                    </div>
                    <div className="black-key">
                        <img className="Ab" id={pressedKey[8]?"pressedKey" : "note"} src={Black} alt="Ab" onClick={()=>playN('Ab'+ octaveController[0])}></img>
                        <label>
                            Y
                        </label>
                    </div>
                    <div className="white-key">
                        <img className="A" id={pressedKey[9]?"pressedKey" : "note"} src={White} alt="A" onClick={()=>playN("A" + octaveController[0])}></img>
                        <label>
                            H
                        </label>
                    </div>
                    <div className="black-key">
                        <img className="Bb" id={pressedKey[10]?"pressedKey" : "note"} src={Black} alt="Bb" onClick={()=>playN('Bb'+ octaveController[0])}></img>
                        <label>
                            U
                        </label>
                    </div>
                    <div className="white-key">
                        <img className="B" id={pressedKey[11]?"pressedKey" : "note"} src={White} alt="B" onClick={()=>playN("B" + octaveController[0])}></img>
                        <label>
                            J
                        </label>
                    </div>
                </div>
                <div className="Keys">
                    <div className="white-key">
                        <img id={pressedKey[12]?"pressedKey" : "note"} src={White} alt="C" onClick={()=>playN("C" + octaveController[2])}></img>
                        <label>
                            K
                        </label>
                    </div>
                    <div className="black-key">
                        <img id={pressedKey[13]?"pressedKey" : "note"} src={Black} alt="Db" onClick={()=>playN('Db'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img id={pressedKey[14]?"pressedKey" : "note"} src={White} alt="D" onClick={()=>playN("D" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img  id={pressedKey[15]?"pressedKey" : "note"}src={Black} alt="Eb" onClick={()=>playN('Eb'+ octaveController[2])}></img>
                    </div>
                    <div  className="white-key">
                        <img id={pressedKey[16]?"pressedKey" : "note"} src={White} alt="E" onClick={()=>playN("E" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="F" onClick={()=>playN("F" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Gb" onClick={()=>playN('Gb'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="G" onClick={()=>playN("G" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Ab" onClick={()=>playN('Ab'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="A" onClick={()=>playN("A" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Bb" onClick={()=>playN('Bb'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="B" onClick={()=>playN("B" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C" onClick={()=>playN("C" + (octaveController[2] + 1))}></img>
                    </div>
                </div>
            
            </div>
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
    playNote:(e) => dispatch({type:PLAY_NOTE,payload:e}),
    keyUp:(e) => dispatch({type:KEY_UP,payload:e}),
    keyDown:(e) => dispatch({type:KEY_DOWN,payload:e})

})



export default connect(mapStateToProps,mapDispatchToProps)(Keys)