import React from 'react'
import { connect } from 'react-redux'
import {Howl} from 'howler'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import Audio from '../audio/C.ogg'
import '../styles/keys.css'
import { Note } from "@tonaljs/tonal";




function Keys(props) {
    
    let octaveController = props.octaveM;
    let keyboard = "awsedftgyhujk";
    let keyBuffer = [];

    window.addEventListener('keyup',(e) => {
        console.log(keyBuffer)
        keyBuffer = [];
    })


    window.addEventListener('keydown',(e)=>{
        if( -1 < keyboard.search(e.key)){
            switch(e.key){
                case 'a':
                    let note = "C" + octaveController[0];
                    playC("C" + octaveController[0]);
                    keyBuffer.push(octaveController[0]);
                    break;
                case 'w':
                    playC("Db" + octaveController[0]);
                    keyBuffer.push(octaveController[0]);
                    break;
                case 's':
                    playC("D" + octaveController[0]);
                    break;
                case 'e':
                    playC("Eb" + octaveController[0]);
                    break;
                case 'd':
                    playC("E" + octaveController[0]);
                    break;
                case 'f':
                    playC("F" + octaveController[0]);
                    break;
                case 't':
                    playC("Gb" + octaveController[0]);
                    break;
                case 'g':   
                    playC("G" + octaveController[0]);
                    break;
                case 'y':
                    playC("Ab" + octaveController[0]);
                    break;
                case 'h':
                    playC("A" + octaveController[0]);
                    break;
                case 'u':
                    playC("Bb" + octaveController[0]);
                    break;
                case 'j':
                    playC("B" + octaveController[0]);
                    break;
                case 'k':
                    playC("C" + (octaveController[0] + 1));
                    break;
                default:
                    break;
            }
        }else{
            console.log('wrong');
        }
    })


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
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("C" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("D" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("E" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("F" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("G" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("A" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("B" + octaveController[0])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("C" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("D" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("E" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("F" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("G" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("A" + octaveController[1])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("B" + octaveController[1])}></img>
                    </div>
                   <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("C" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("D" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("E" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("F" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("G" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("A" + octaveController[2])}></img>
                    </div>
                    <div className="white-key">
                        <img src={White} alt="C Chord" onClick={()=>playC("B" + octaveController[2])}></img>
                    </div>
                   
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