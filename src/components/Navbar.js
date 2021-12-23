
import './Navbar.css'
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
      
                <div className="navbar">
                    <div className="box1">
                        {/* <i class="fas fa-bars"></i> */}
                        <img src="/anubadak.webp" alt="" />
                        <p>Anubadak</p>
                    </div>
                    <div className="box2">
                        <div className="products"><i class="fas fa-globe-asia"></i></div>
                    </div>
                </div>
    
        )
    }
}

