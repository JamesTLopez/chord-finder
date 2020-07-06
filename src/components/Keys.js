import React ,{useEffect}from 'react'
import { connect } from 'react-redux'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import '../styles/keys.css'
import { Note } from "@tonaljs/tonal";
import { UPDATE_CHORD } from '../store/actions/types'




function Keys(props) {
    
    let octaveController = props.octaveM;
    let pianoKeys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    let pianoWhite = ["C","D","E","F","G","A","B"];
    let allowRepeat = true;
    let keyboard = "awsedftgyhujk";
    let keyBuffer = [];
    let keyDisplay = [];
    let count = 0;
    let ChordPlayed = [];

    useEffect(() => {
        let octaveController = props.octaveM;
        console.log(octaveController)
    },[props.octaveM]);

    // window.addEventListener('keyup',(e) => {
    
        // props.updateChord(keyBuffer);
        // keyBuffer = []
        // allowRepeat = true;
   
    //     count = 0;
    // },false)


    // window.addEventListener('keydown',(e)=>{

        // //Prevents repeat of multiple notes
        // if(e.repeat != undefined){
        //     allowRepeat = !e.repeat;
        // }
        // if(!allowRepeat) return;
        // allowRepeat = false;

        

        // let st = keyboard.indexOf(e.key);
        // if(st !== -1){
        //     let note = pianoKeys[st] + octaveController[0];
        //     playC(note);
        //     keyBuffer.push(pianoKeys[st]);
            
        // }
        // else{
        //     console.log('wrong');
        // }

    // },false)


  
    
    let playC = (e) => {
        let midiInfo = Note.midi(e);
   
        const noteLength = 2000;
        let tIndex = 0;
        for(let i = 24; i<=96; i++){
            props.SoundEngine['_sprite'][i] = [tIndex,noteLength];
            tIndex += noteLength;
        }
        props.SoundEngine.play(midiInfo.toString());       
    }

    let keyDown = (e) =>{
        //Prevents repeat of multiple notes
        if(e.repeat != undefined){
            allowRepeat = !e.repeat;
        }
        if(!allowRepeat) return;
        allowRepeat = false;

        

        let st = keyboard.indexOf(e.key);
        if(st !== -1){
            let note = pianoKeys[st] + octaveController[0];
            playC(note);
            keyBuffer.push(pianoKeys[st]);
            
        }
        else{
            console.log('wrong');
        }
    }

    let keyUp = (e) =>{
        props.updateChord(keyBuffer);
        keyBuffer = []
        allowRepeat = true;
    }

    
    return (
        <div className="playArea" onKeyDown={(e)=>keyDown(e)} onKeyUp={()=>keyUp()} tabIndex="0">
            <div className="keys">
                <div className="whitekeys">
                {pianoWhite.map((not,i) =>
                    <div key={i} className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC(not + octaveController[0])}></img>
                    </div>
                )}
                {pianoWhite.map((not,i) =>
                    <div key={i} className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC(not + octaveController[1])}></img>
                    </div>
                )}
                {pianoWhite.map((not,i) =>
                    <div key={i} className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC(not + octaveController[2])}></img>
                    </div>
                )}
            
                   
                </div>
                <div className="blackkeys">
                    <div className="black-group-1">
                        <div className="black-key-g1-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Db'+ octaveController[0])}></img>
                        </div>
                        <div className="black-key-g1-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Eb'+ octaveController[0])}></img>
                        </div>
                    </div>
                    <div className="black-group-2">
                        <div className="black-key-g2-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Gb'+ octaveController[0])}></img>
                        </div>
                        <div className="black-key-g2-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Ab'+ octaveController[0])}></img>
                        </div>
                        <div className="black-key-g2-3">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Bb'+ octaveController[0])}></img>
                        </div>
                    </div>
                    
                    <div className="black-group-3">
                        <div className="black-key-g1-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Db'+ octaveController[1])}></img>
                        </div>
                        <div className="black-key-g1-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Eb'+ octaveController[1])}></img>
                        </div>
                    </div>
                    <div className="black-group-4">
                        <div className="black-key-g2-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Gb'+ octaveController[1])}></img>
                        </div>
                        <div className="black-key-g2-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Ab'+ octaveController[1])}></img>
                        </div>
                        <div className="black-key-g2-3">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Bb'+ octaveController[1])}></img>
                        </div>
                    </div>
                    <div className="black-group-5">
                        <div className="black-key-g1-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Db'+ octaveController[2])}></img>
                        </div>
                        <div className="black-key-g1-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Eb'+ octaveController[2])}></img>
                        </div>
                    </div>
                    <div className="black-group-6">
                        <div className="black-key-g2-1">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Gb'+ octaveController[2])}></img>
                        </div>
                        <div className="black-key-g2-2">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Ab'+ octaveController[2])}></img>
                        </div>
                        <div className="black-key-g2-3">
                            <img src={Black} alt="C Chord" onClick={()=>playC('Bb'+ octaveController[2])}></img>
                        </div>
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
    chord:tonalState.chord
})

const mapDispatchToProps = (dispatch) => ({
    updateChord:(buffer) => dispatch({type:UPDATE_CHORD,payload:buffer})
})



export default connect(mapStateToProps,mapDispatchToProps)(Keys)