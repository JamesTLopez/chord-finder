import React, { Component } from 'react'
import Header from '../Layouts/Mainheader'
import '../../css/links.css'
export default class Links extends Component {
    render() {
        return (
            <div className="links-container">
                <Header/>
                <div className="links-main-container">
                    <h1>GHelo</h1>
                </div>
                <footer>
                    <h4>Done by James Lopez</h4>
                </footer>
            </div>
        )
    }
}
