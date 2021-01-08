import React from "react"
import Nav from "../components/Nav"
import WhisperEntry from "../components/WhisperEntry"
import Memes from "../components/Memes"

const CreateWhispers = () => {
    return (
        <div className="Whispers">
            <Nav />
            <WhisperEntry />
            <Memes />

        </div> 
    )
}

export default CreateWhispers