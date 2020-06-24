import React from 'react'
import Visualizer  from './Visualizer'
import Keyboard from './Keyboard/Keys'
import ToneController from './tonalControler'
import '../styles/piano.css'


export default function Piano() {
    return (
        <div className="container">
            <Visualizer/>
            <Keyboard/>
            <ToneController/>
        </div> 
    )
}
