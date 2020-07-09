import React ,{useState}from 'react'
import { connect } from 'react-redux'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import '../styles/keys.css'
import { UPDATE_CHORD, PLAY_NOTE } from '../store/actions/types'




function Keys(props) {
    
    let octaveController = props.octaveM;
    let pianoKeys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"];
    let allowRepeat = true;
    const keyboard = "awsedftgyhujkolp;";
    let [keyBuffer,setBuffer] = useState(props.notes);
    let [pressedKey,setPressedKey] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false]);

    
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
            console.log('wrong');
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
        <div className="playArea" onKeyDown={(e)=>keyDown(e)} onKeyUp={(e)=>keyUp(e)} tabIndex="0">
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
                    </div>
                    <div className="black-key">
                        <img className="Db" id={pressedKey[1]?"pressedKey" : "note"} src={Black} alt="Db" onClick={()=>playN('Db'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img className="D" id={pressedKey[2]?"pressedKey" : "note"} src={White} alt="D" onClick={()=>playN("D" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img className="Eb" id={pressedKey[3]?"pressedKey" : "note"} src={Black} alt="Eb" onClick={()=>playN('Eb'+ octaveController[0])}></img>
                    </div>
                    <div  className="white-key">
                        <img className="E" id={pressedKey[4]?"pressedKey" : "note"} src={White} alt="E" onClick={()=>playN("E" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img className="F" id={pressedKey[5]?"pressedKey" : "note"} src={White} alt="F" onClick={()=>playN("F" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img className="Gb" id={pressedKey[6]?"pressedKey" : "note"} src={Black} alt="Gb" onClick={()=>playN('Gb'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img className="G" id={pressedKey[7]?"pressedKey" : "note"} src={White} alt="G" onClick={()=>playN("G" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img className="Ab" id={pressedKey[8]?"pressedKey" : "note"} src={Black} alt="Ab" onClick={()=>playN('Ab'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img className="A" id={pressedKey[9]?"pressedKey" : "note"} src={White} alt="A" onClick={()=>playN("A" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img className="Bb" id={pressedKey[10]?"pressedKey" : "note"} src={Black} alt="Bb" onClick={()=>playN('Bb'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img className="B" id={pressedKey[11]?"pressedKey" : "note"} src={White} alt="B" onClick={()=>playN("B" + octaveController[0])}></img>
                    </div>
                </div>
                <div className="Keys">
                    <div className="white-key">
                        <img id={pressedKey[12]?"pressedKey" : "note"} src={White} alt="C" onClick={()=>playN("C" + octaveController[2])}></img>
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
    isKeyPressed:tonalState.isKeyPressed
})

const mapDispatchToProps = (dispatch) => ({
    updateChord:(buffer) => dispatch({type:UPDATE_CHORD,payload:buffer}),
    playNote:(e) => dispatch({type:PLAY_NOTE,payload:e})
})



export default connect(mapStateToProps,mapDispatchToProps)(Keys)