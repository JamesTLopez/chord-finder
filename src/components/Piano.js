import React from 'react'
import Visualizer  from './Visualizer'
import Keyboard from './Keys'
import TonalController from './TonalController'
import '../styles/piano.css'


export default function Piano() {
    return (
        <div className="container">
            <header><h1>Chord Finder</h1></header>
            <Visualizer/>
            <Keyboard/>
            <TonalController/>
        </div> 
    )
}
