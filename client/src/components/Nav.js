import React from "react"
import Signin from '../pages/Signin'
import Signout from '../pages/Signout'
import Signup from '../pages/Signup'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg primary-color "> 
            <NavLink className="btn btn-outline-primary" exact to='/sign-up'>
                    Sign Up
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/sign-in'>
                    Log In
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/' >
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/sign-out'>
                    Log Out
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/whispers'>
                    Whispers
                </NavLink>

            </nav>
        </div>
    );
}
  
export default NavBar

       