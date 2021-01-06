import React,{ useState } from "react"
import Nav from "../components/Nav"
import WhisperEntry from "../components/WhisperEntry"
import Memes from "../components/Memes"


const Whispers = () => {
    return (
        <div className="Whispers">
            <Nav />
            <WhisperEntry />
            <Memes />

        </div> 
    )
}

export default Whispers