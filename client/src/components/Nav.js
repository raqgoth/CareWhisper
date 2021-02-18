import React, { useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Nav.css'

const NavBar = (props) => {
    return (
        props.authenticated && props.currentUser  ? (
        <header>
       
        <nav className='navbar navbar-light'>

<       NavLink className="btn btn-outline-primary" to='/home' >
            Home
        </NavLink >

        <NavLink className="btn btn-outline-primary" exact to='/whispers'>
            Whispers
        </NavLink>
        <NavLink className="btn btn-outline-primary" exact to='/new-whisper'>
                Create New Whisper
        </NavLink>



    <NavLink className="btn btn-outline-primary" onClick={() => {
        localStorage.clear()
        props.setAuthenticated(false)
    }} 
        exact to='/'>
            Sign Out
    </NavLink>

    </nav>
    </header>

) : (
<header>
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
            
           
          
            </div>
            </div>
            </nav>
        </header>
        
    )
    )
}

export default NavBar   
              
        