import React from "react";
import Nav from '../components/Nav'
import '../styles/Landing.css'

const Landing = () => {
    return (
        <div className="Landing">
            <Nav />
            <div className="About us">
                <h2>CareWhisper</h2>
                <h5>Open up, get to understand your deepest thoughts</h5>
                <p>
                    Ever since the pandemic, our lives changed. Everyone 
                    started wondering what the important things in life are, 
                    what kind of life do I want to live? Am I having the best life
                    I can have? What are my goals?
                </p>
                <p>
                    Sometimes the best way to understand our thoughts and our feelings
                    is to write them down. But we are too scared. Of people reading our 
                    deepest thoughts and finding out the truth about ourselves that 
                    we dont even tell ourselves..
                </p>
                <p>
                    This is a private place for you to jot down your deepest thoughts, dreams,
                    feelings, dreams, and get to know yourself better, get to grow, and become the 
                    person you really want to be!
                </p>
                <p>
                    If you died tomorrow, would you be happy with the way your life turned out to be?

                </p>
            </div>

        </div> 
    )
}

export default Landing