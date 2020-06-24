import React from 'react'
import {Howl} from 'howler'
import White from "../images/Whitekey.png"
import Black from "../images/blackkey.png"
import C from '../audio/C.ogg'



export default function Keys() {

    const Notes = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B'];
    const Octives = [1,2,3,4,5,6,7];

    
    let SoundEngine = new Howl({
        src:[C],
        onload(){
            console.log("Loaded")
        },
        onloaderror(e,msg){
            console.log('' + msg + e)
        }

    })
   
    
    let playC = (e) => {
        
        const noteLength = 2000;
        let tIndex = 0;
        for(let i = 24; i<=96; i++){
            SoundEngine['_sprite'][i] = [tIndex,noteLength];
            tIndex += noteLength;
        }
        SoundEngine.play(e)
        
    }
    
    return (
        <div className="playArea">
            <div className="Keyboard">
                <div className="keys">
                    <div className="whitekeys">
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('24')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('26')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('28')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('29')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('31')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('33')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('35')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('24')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('26')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('28')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('29')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('31')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('33')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('35')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('24')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('26')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('28')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('29')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('31')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('33')}></img>
                        </div>
                        <div className="white-key">
                            <img src={White} alt="C Chord" onClick={()=>playC('35')}></img>
                        </div>
                        
                        
                    </div>
                    <div className="blackkeys">
                        <div className="black-group-1">
                            <div className="black-key-g1-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('25')}></img>
                            </div>
                            <div className="black-key-g1-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('27')}></img>
                            </div>
                        </div>
                        <div className="black-group-2">
                            <div className="black-key-g2-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('30')}></img>
                            </div>
                            <div className="black-key-g2-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('32')}></img>
                            </div>
                            <div className="black-key-g2-3">
                                <img src={Black} alt="C Chord" onClick={()=>playC('34')}></img>
                            </div>
                        </div>
                        
                        <div className="black-group-3">
                            <div className="black-key-g1-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('25')}></img>
                            </div>
                            <div className="black-key-g1-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('27')}></img>
                            </div>
                        </div>
                        <div className="black-group-4">
                            <div className="black-key-g2-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('30')}></img>
                            </div>
                            <div className="black-key-g2-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('32')}></img>
                            </div>
                            <div className="black-key-g2-3">
                                <img src={Black} alt="C Chord" onClick={()=>playC('34')}></img>
                            </div>
                        </div>
                        <div className="black-group-5">
                            <div className="black-key-g1-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('25')}></img>
                            </div>
                            <div className="black-key-g1-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('27')}></img>
                            </div>
                        </div>
                        <div className="black-group-6">
                            <div className="black-key-g2-1">
                                <img src={Black} alt="C Chord" onClick={()=>playC('30')}></img>
                            </div>
                            <div className="black-key-g2-2">
                                <img src={Black} alt="C Chord" onClick={()=>playC('32')}></img>
                            </div>
                            <div className="black-key-g2-3">
                                <img src={Black} alt="C Chord" onClick={()=>playC('34')}></img>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
