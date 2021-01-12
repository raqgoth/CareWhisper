import React from "react"

import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <nav className='navbar navbar-expand-sm bg-dark'>
           <div className="container">
            <div className="row row-cols-4">
            <NavLink exact to='/signup'>
                    SignUp
                </NavLink>
                
           
            <NavLink exact to='/login'>
                    Log In
                </NavLink>
                
           
            <NavLink exact to='/' >
                    Home
                </NavLink>
                
            <NavLink exact to='/whispers'>
                    Whispers
                </NavLink>
            <NavLink exact to='/new-whisper'>
                    Create New Whisper
                </NavLink>
            
            <NavLink onClick={() => {
                    localStorage.clear()
                }} 
                    exact to='/'>
                        Sign Out
                </NavLink>
              
            </div>
  </div>
       
    </nav>

</div>
    );
}
  
export default NavBar

       