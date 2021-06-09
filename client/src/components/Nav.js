import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {
    return (
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
}

export default NavBar   
              
        