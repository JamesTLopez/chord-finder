import React from 'react'
import '../styles/visualizer.css'
import { connect } from 'react-redux'


function Visualizer({chord,notes}) {

    let isMoreThan1 = false;
    let isNotEmpty = false;


    if(chord.length === 0){
        isNotEmpty = false;
       
    }else{
        isNotEmpty = true;
        console.log(chord)
    }

    if(chord.length > 1){
        isMoreThan1 = true;
        console.log(`${chord[0]} - ${chord[1]}`);

    }else{
       
    }


    return (
        isNotEmpty ? (
            isMoreThan1 ? (
            <div className="visualizer-container">
                <div className="chord-display-container">
                    {chord.map((not,i) =>
                       <p key={i} id="text"> {not} </p>
                    )}
 
                </div>
            </div>
            ): (
            <div className="visualizer-container">
                <div className="chord-display-container">
                    <h1 id="text"> {chord} </h1>
                </div>
            </div>
            )
        ) : (
            <div className="visualizer-container">
                <div className="note-display-container">
                    {notes.map((not,i) =>
                        <p key={i} id="note-text"> {not} </p>
                    )}

                </div>
            </div>
        )
    )
}

const mapStateToProps = ({tonalState}) =>({
    scale:tonalState.scale,
    chord:tonalState.chord,
    notes:tonalState.notes
})

export default connect(mapStateToProps,null)(Visualizer)