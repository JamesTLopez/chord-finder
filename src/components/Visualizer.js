import React from 'react'
import '../styles/visualizer.css'
import { connect } from 'react-redux'


function Visualizer({scale,chord,notes}) {

    let isMoreThan1 = false;
    if(chord.length > 1){
        isMoreThan1 = true;
        console.log(`${chord[0]} - ${chord[1]}`);
        console.log(isMoreThan1);
    }else{
        console.log(chord)
    }

    return (
        isMoreThan1 ? (
        <div className="visualizer-container">
            <div className="chord-display-container">
                    <h1> {chord[0]} </h1>
                
            </div>
        </div>
        ): (
        <div className="visualizer-container">
            <div className="chord-display-container">
                    <h1> {chord} </h1>
            
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