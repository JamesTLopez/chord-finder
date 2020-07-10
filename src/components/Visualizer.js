import React from 'react'
import '../styles/visualizer.css'
import { connect } from 'react-redux'


function Visualizer({chord,notes}) {


    return (
    
            <div className="visualizer-container">
                <div className="main-visualizer-container">
                    <div className="title-container">
                        <h1 id='text'>Chords</h1>
                    </div>
                    <div className="chord-display-container">
                        {chord.map((not,i) =>
                            <p key={i} id="text"> {not} </p>
                        )}

                    </div>
                    <div className="title-container">
                        <h1 id="note-text">Notes</h1>
                    </div>
                    <div className="note-display-container">
                        {notes.map((not,i) =>
                            <p key={i} id="note-text"> {not} </p>
                        )}
                    </div>
                </div>
            </div>
 
    
    )
}

const mapStateToProps = ({tonalState}) =>({
    scale:tonalState.scale,
    chord:tonalState.chord,
    notes:tonalState.notes
})

export default connect(mapStateToProps,null)(Visualizer)