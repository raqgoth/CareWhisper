import React from "react"
import Nav from "../components/Nav"
import WhisperList from "../components/WhisperList"
import MemeList from "../components/MemeList"


const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <WhisperList />
            <MemeList/>

        </div> 
    )
}

export default Home