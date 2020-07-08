import React ,{useEffect,useState}from 'react'
import { connect } from 'react-redux'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import '../styles/keys.css'
import { Note } from "@tonaljs/tonal";
import { UPDATE_CHORD } from '../store/actions/types'




function Keys(props) {
    
    let octaveController = props.octaveM;
    let pianoKeys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"];
    let allowRepeat = true;
    const keyboard = "awsedftgyhujkolp;";
    
    let [keyBuffer,setBuffer] = useState(props.notes);

  
    
    let playC = (e) => {
        let midiInfo = Note.midi(e);
   
        const noteLength = 1997;
        let tIndex = 0;
        for(let i = 24; i<=96; i++){
            props.SoundEngine['_sprite'][i] = [tIndex,noteLength];
            tIndex += noteLength;
        }
        props.SoundEngine.play(midiInfo.toString());       
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
            if(st === 12){
                
                let note = "C" + (octaveController[0] + 1);
                playC(note);
                keyBuffer.push(pianoKeys[st]);
                props.updateChord(keyBuffer);
                return;
            }
            let note = pianoKeys[st] + octaveController[0];
    
            playC(note);
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
        setBuffer(keyBuffer.filter(not => not !== note));
        
        // props.updateChord(keyBuffer);
        // allowRepeat = false;
        // keyDisplay = keyBuffer;
        // props.updateChord(keyDisplay);
        // keyBuffer = [];
        // allowRepeat = true;
    }

    
    return (
        <div className="playArea" onKeyDown={(e)=>keyDown(e)} onKeyUp={(e)=>keyUp(e)} tabIndex="0">
            <div className="keyboard-container">
                <div className="Keys">
                    <div className="white-key">
                        <img src={White} alt="C" onClick={()=>playC("C" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Db" onClick={()=>playC('Db'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="D" onClick={()=>playC("D" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Eb" onClick={()=>playC('Eb'+ octaveController[0])}></img>
                    </div>
                    <div  className="white-key">
                        <img src={White} alt="E" onClick={()=>playC("E" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="F" onClick={()=>playC("F" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Gb" onClick={()=>playC('Gb'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="G" onClick={()=>playC("G" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Ab" onClick={()=>playC('Ab'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="A" onClick={()=>playC("A" + octaveController[0])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Bb" onClick={()=>playC('Bb'+ octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="B" onClick={()=>playC("B" + octaveController[0])}></img>
                    </div>
                </div>
                <div className="Keys">
                    <div className="white-key">
                        <img src={White} alt="C" onClick={()=>playC("C" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Db" onClick={()=>playC('Db'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="D" onClick={()=>playC("D" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Eb" onClick={()=>playC('Eb'+ octaveController[1])}></img>
                    </div>
                    <div  className="white-key">
                        <img src={White} alt="E" onClick={()=>playC("E" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="F" onClick={()=>playC("F" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Gb" onClick={()=>playC('Gb'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="G" onClick={()=>playC("G" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Ab" onClick={()=>playC('Ab'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="A" onClick={()=>playC("A" + octaveController[1])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Bb" onClick={()=>playC('Bb'+ octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="B" onClick={()=>playC("B" + octaveController[1])}></img>
                    </div>
                </div>
                <div className="Keys">
                    <div className="white-key">
                        <img src={White} alt="C" onClick={()=>playC("C" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Db" onClick={()=>playC('Db'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="D" onClick={()=>playC("D" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Eb" onClick={()=>playC('Eb'+ octaveController[2])}></img>
                    </div>
                    <div  className="white-key">
                        <img src={White} alt="E" onClick={()=>playC("E" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="F" onClick={()=>playC("F" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Gb" onClick={()=>playC('Gb'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="G" onClick={()=>playC("G" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Ab" onClick={()=>playC('Ab'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="A" onClick={()=>playC("A" + octaveController[2])}></img>
                    </div>
                    <div className="black-key">
                        <img src={Black} alt="Bb" onClick={()=>playC('Bb'+ octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="B" onClick={()=>playC("B" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C" onClick={()=>playC("C" + (octaveController[2] + 1))}></img>
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
    notes:tonalState.notes
})

const mapDispatchToProps = (dispatch) => ({
    updateChord:(buffer) => dispatch({type:UPDATE_CHORD,payload:buffer})
})



export default connect(mapStateToProps,mapDispatchToProps)(Keys)