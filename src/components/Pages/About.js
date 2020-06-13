import React, { Component } from 'react'
import Header from '../Layouts/Mainheader'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Header/>

                
                    <div className="container">
                        <h1>About</h1>
                    </div>
                

                <footer>
                    <h4>Done by James Lopez</h4>
                </footer>
                    
            </div>
        )
    }
}
