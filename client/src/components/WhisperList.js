import React from 'react'
import { connect } from 'react-redux'
import WhisperForm from './WhisperForm'
import { AddWhisper, CreateNewWhisper, RemoveWhisper } from '../store/actions/WhisperActions'


const WhisperList = (props) => {

    const handleChange = (event) => {
        props.createWhisper(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addWhisper(props.whisperState.newWhisper)
    }

    const handleRemoveWhisper = (index) => {
        console.log('Index of whisper to be removed', index)
        props.removeWhisper(index)
    }

    return (
    <div>
    <WhisperForm
        newWhisper={props.whisperState.newWhisper}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

        />
        {props.whisperState.whispers.map((whisper, index) => (
            <div key={index}>
              <li>{whisper.newTitle} </li> 
              <button onClick={() => handleRemoveWhisper(index)}>Delete</button>
            </div>
          )
          )}
        </div>
    )
}

const mapStateToProps = (state) => {
    //   console.log(state)
    return {
      whisperState: state.WhisperState
    }
  }
  const mapActionsToProps = (dispatch) => {
    return {
      addWhisper: (newWhisper) => dispatch(AddWhisper(newWhisper)),
      removeWhisper: (index) => dispatch(RemoveWhisper(index)),
      createWhisper: (formValue) => dispatch(CreateNewWhisper(formValue)),
      
    }
  }
  export default connect(mapStateToProps, mapActionsToProps)(WhisperList)
    