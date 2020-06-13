import React from 'react'
import Header from '../Layouts/Mainheader'
import Keyboard from '../Keyboard/Keys'


export default function Piano() {
    return (
        <div className="piano-container">
                <Header/>
            <div className="container">
                <Keyboard/>
            </div> 

            <footer>
                <h4>Done by James Lopez</h4>
            </footer> 
        </div> 
    )
}
