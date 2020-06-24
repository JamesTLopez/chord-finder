import React from 'react'
import Visualizer  from './Visualizer'
import Keyboard from './Keys'
import ToneController from './tonalControler'
import '../styles/piano.css'


export default function Piano() {
    return (
        <div className="container">
            <header><h1>Chord Finder</h1></header>
            <Visualizer/>
            <Keyboard/>
            <ToneController/>
        </div> 
    )
}
