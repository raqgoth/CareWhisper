import React from 'react'
import TextInput from '../components/TextInput'
import '../styles/Whisper.css'

const WhisperForm = (props) => {
    return (
     
                   <div className="col-sm-4 text-center">
                       <div className = "border-card">
            <form>
                <h4>Whisper Entry</h4>
                <p>Your Whisper Title</p>
                <TextInput
                    placeholder='Type Your Whisper Title Here'
                    type='title'
                    name='title'
                    value={props.newTitle}
                    // onChange={props.handleChange}
                />
                
                <div className="card-body">
                <p>Your Whisper Entry</p>
                <TextInput
                    placeholder='Type Your Whisper Entry Here'
                    type='content'
                    name='content'
                    value={props.newContent}
                    // onChange={props.handleChange}
                />
                </div>
                <div className="card-body">
                <p>Three Things You Are grateful For Today</p>
                <TextInput
                    placeholder='Type here three things you are grateful for'
                    type='grateful'
                    name='grateful'
                    value={props.newGrateful}
                    // onChange={props.handleChange}
                />
                </div>
                <button type = "submit" onClick={props.handleSubmit}>Submit</button>
            </form>
            </div>
           
    
    



        </div> 
    
         
    )
}
export default WhisperForm