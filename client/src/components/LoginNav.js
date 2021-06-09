import React from 'react'
import {NavLink} from 'react-router-dom'

const LoginNav = (props) => {
    return (
        <div>  
            <nav className = "navlogin">
                <NavLink  
                    exact to='/whispers'>
                    Whispers
                </NavLink>
                <NavLink 
                    exact to='/new-whisper'>
                    New Whisper
                </NavLink>
                <NavLink 
                    exact to="/"
                    onClick={() => localStorage.clear()}
                    >
                    Sign Out
                </NavLink>
            </nav>
        </div>
    )
}
export default LoginNav