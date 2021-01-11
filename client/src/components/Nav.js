import React from "react"

import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            
           <nav className='navbar navbar-expand-sm bg-dark'>
           <div className="container">
            <div className="row row-cols-4">
            <div className="col">
            <NavLink exact to='/sign-up'>
                    SignUp
                </NavLink>
                </div>
            <div className="col">
            <NavLink exact to='/login'>
                    Log In
                </NavLink>
                </div>
            <div className="col">
            <NavLink exact to='/' >
                    Home
                </NavLink>
                </div>
            <div class ="col">
            <NavLink exact to='/whispers'>
                    Whispers
                </NavLink>
            </div>
            <div class = "col">
            <NavLink onClick={() => {
                    localStorage.clear()
                }} 
                    exact to='/'>
                        Sign Out
                </NavLink>
              
            </div>
        </div>
        </div>
    </nav>

</div>
    );
}
  
export default NavBar

       