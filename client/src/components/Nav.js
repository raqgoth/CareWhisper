import React from "react"
import Signin from '../pages/Signin'
import Signout from '../pages/Signout'
import Signup from '../pages/Signup'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg primary-color "> 
            <NavLink className="btn btn-outline-primary" exact to='/signup'>
                    Sign Up
                </NavLink>
                <NavLink className="btn btn-outline-primary" exact to='/login'>
                    Log In
                </NavLink>
                <NavLink className="btn btn-outline-primary" to='/home' >
                    Home
                </NavLink >
                <NavLink className="btn btn-outline-primary" exact to='/signout'>
                    Log Out
                </NavLink>
            </nav>
        </div>
    );
}
  
export default NavBar

       