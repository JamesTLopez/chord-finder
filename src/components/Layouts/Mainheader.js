import React from 'react'
import '../../css/header.css'

export default function Mainheader() {
    return (
            <header>
                <h1 className="home-title">Audio Visualizer</h1>
                <div className="header-Nav">
                    <a href="/" className="headerLink"> Home</a>
                    <a href="/about" className="headerLink"> About</a>
                </div>
            </header>
    )
}
