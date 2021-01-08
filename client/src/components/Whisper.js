import React,{ useEffect, useState } from "react"
import { connect } from 'react-redux'
import {AddWhisper, RemoveWhisper, CreateNewWhisper, getWhisper} from '../store/actions/WhisperActions'
import WhisperForm from './WhisperForm'

const mapStateToProps = (state) => {
    return {
      whisperState: state.WhisperState
    } 
}

  
  const mapActionsToProps = (dispatch) => {
    return {
      addWhisper: (newWhisper) => dispatch(AddWhisper(newWhisper)),
      removeWhisper: (index) => dispatch(RemoveWhisper(index)),
      createWhisper: (formValue) => dispatch(CreateNewWhisper(formValue)) 
      }
}

const WhisperList = (props) => {
    const handleChange = (event) => {
      props.createWhisper(event.target.value)
    } 
    const handleSubmit = (event) => {
      event.preventDefault()
      props.addWhisper(props.whisperState.newWhisper)
    }
    const handleRemove = (index) => {
      props.removeWhisper(index)
    }
    
    return (
      <div>
        <WhisperForm 
          newWhisper={props.whisperState.newWhisper}
          handleChange = {handleChange}
          handleSubmit = {handleSubmit}
          />
         {props.whisperState.whispers.map((whispers, index) => (
           <span onClick={() => handleRemove(index)}
           className="remove"
           key ={`rem${index}`}>
             (remove)
           </span>
         ))}
      </div>
    )
}
  
  export default connect(mapStateToProps, mapActionsToProps)(WhisperList)


