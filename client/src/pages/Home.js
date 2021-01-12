import React from "react"
import Nav from "../components/Nav"
import WhisperList from "../components/WhisperList"
import '../styles/index.css'


const Home = (props) => {
    return (
        <div className="Home">
            <Nav />
            <WhisperList />
        </div> 
    )
}

export default Home