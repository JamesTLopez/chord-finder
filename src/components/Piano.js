import React from 'react'
import Visualizer  from './Visualizer'
import Keyboard from './Keys'
import TonalController from './TonalController'
import '../styles/piano.css'
import {Howl} from 'howler'
import Audio from '../audio/C.ogg'

let SoundEngine = new Howl({
    src:[Audio],
    onload(){
        console.log("Loaded")
    },
    onloaderror(e,msg){
        console.log('' + msg + e)
    }
})


export default function Piano() {
    return (
        <div className="container">
            <header>Chord Finder</header>
            <Visualizer/>
            <Keyboard SoundEngine={SoundEngine}/>
            <TonalController/>
        </div> 
    )
}
