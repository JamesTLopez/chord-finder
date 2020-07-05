import React ,{useEffect}from 'react'
import { connect } from 'react-redux'
import {Howl} from 'howler'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import Audio from '../audio/C.ogg'
import '../styles/keys.css'
import { Note } from "@tonaljs/tonal";




function Keys(props) {
    
    let octaveController = props.octaveM;
    let pianoKeys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    let pianoWhite = ["C","D","E","F","G","A","B"];
    let allowRepeat = true;
    let keyboard = "awsedftgyhujk";
    let keyBuffer = [];
    let keyDisplay = [];

    let down = false;

    useEffect(() => {
        let octaveController = props.octaveM;
        console.log(octaveController)
    },[props.octaveM]);

    window.addEventListener('keyup',(e) => {
        // keyDisplay = keyDisplay;
        // keyBuffer = []
        // console.log(keyBuffer)
        // console.log(keyDisplay)
    
    },false)


    window.addEventListener('keydown',(e)=>{
        if(e.repeat != undefined){
            allowRepeat = !e.repeat;
        }
        let st = keyboard.indexOf(e.key);
        if(st !== -1){
            let note = pianoKeys[st] + octaveController[0];
            playC(note);
            keyBuffer.push(note);
            keyDisplay = [];
       
        }
        else{
            console.log('wrong');
        }

    },false)


    let SoundEngine = new Howl({
        src:[Audio],
        onload(){
            console.log("Loaded")
        },
        onloaderror(e,msg){
            console.log('' + msg + e)
        }

    })
   
    
    let playC = (e) => {
        let midiInfo = Note.midi(e);
        const noteLength = 2000;
        let tIndex = 0;
        for(let i = 24; i<=96; i++){
            SoundEngine['_sprite'][i] = [tIndex,noteLength];
            tIndex += noteLength;
        }
        SoundEngine.play(midiInfo.toString());
    }



    
    return (
        <div className="playArea">
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
    octaveM:tonalState.octaveM
})



export default connect(mapStateToProps,null)(Keys)