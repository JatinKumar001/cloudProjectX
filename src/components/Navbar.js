import React from 'react'
import '../style/Navbarstyle.css'
import logo from '../img/R.png'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className='navbar'>
                    <div className='left'>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                    <div className='right'>
                        <ul>
                            <li><p> Home </p></li>
                            <li><p>Contest</p></li>
                            <li><p>Announcement</p></li>
                            <li><p>Discuss</p></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
