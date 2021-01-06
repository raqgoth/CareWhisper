import React from "react"

const NavBar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg primary-color ">
                <a className="navbar-brand">
                    <span className="material-icons mr-2">import_contacts</span>
                    <span>CareWhisper</span>
                </a>            
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

       