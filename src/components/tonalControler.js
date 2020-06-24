import React from 'react'
import '../styles/tonalController.css'

export default function tonalControler() {
    return (
        <div className="tonal-controller">
            <div className="tonal-main-container">
                <div className="Key-controller">
                    <label id="Labels"> Key:</label>
                    <select>
                        <option value="">C</option>
                        <option value="">C#/Db</option>
                        <option value="">D</option>
                        <option value="">D#/Eb</option>
                        <option value="">F</option>
                        <option value="">F#</option>
                        <option value="">G</option>
                        <option value="">G#/Ab</option>
                        <option value="">A</option>
                        <option value="">A#/Bb</option>
                        <option value="">B</option>
                    </select>
                    <label id="Labels"> Chords:</label>
                    <select>
                        <option value="">Major</option>
                        <option value="">Minor</option>
                        <option value="">Diminished</option>
                        <option value="">Augmented</option>
                
                    </select>
                </div>
                <div className="Octive-controller">
                    <label id="Labels"> Key:</label>
                    <select>
                        <option value="">C</option>
                        <option value="">C#/Db</option>
                        <option value="">D</option>
                        <option value="">D#/Eb</option>
                        <option value="">F</option>
                        <option value="">F#</option>
                        <option value="">G</option>
                        <option value="">G#/Ab</option>
                        <option value="">A</option>
                        <option value="">A#/Bb</option>
                        <option value="">B</option>
                    </select>
                </div>
            </div>
            <div className="chord-display">
                <h1>chord</h1>
            </div>
        </div>
    )
}
