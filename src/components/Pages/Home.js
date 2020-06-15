import React, { Component } from 'react'
import Header from '../Layouts/Mainheader'
import '../../css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
    
                <Header/>


                
                <div className="container">
                    <div className="grid font">
                        <a href="/links" className="Links"> 
                            <h1>Links</h1>
                        </a>
                        <a href="/piano" className="pianoLinks">
                            <h1>Piano</h1>
                        </a>
                        <a href="/radio" className="radioLinks"> 
                            <h1>Radio</h1>
                        </a>
                    </div>
                </div>
                    
               

                <footer>
                    <h4>Done by James Lopez</h4>
                </footer>
                    
            </div>
        )
    }
}
