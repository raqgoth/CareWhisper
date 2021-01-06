import React from "react"
import Signin from '../pages/Signin'
import Signout from '../pages/Signout'
import Signup from '../pages/Signup'

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg primary-color ">
                    <span className="material-icons mr-2">import_contacts</span>
                    <span>CareWhisper</span>           
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Signin />Sign in
                    </li>
                    <li className="nav-item">
                        <Signup />Sign up
                    </li>
                    <li className="nav-item">
                        <Signout />Sign out
                    </li>
                    <li className="nav-item">
                    </li>

                </ul>
            </nav>
        </div>
    );
}
  
export default NavBar

       