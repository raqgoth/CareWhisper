import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import WhisperForm from './WhisperForm'
import { AddWhisper, NewWhisper, RemoveWhisper, GetWhisper, GetWhispers } from '../store/actions/WhisperActions'
import {Link} from 'react-router-dom'


  const mapStateToProps = ({whisperState}) => {

    //   console.log(state)
    return {
      whisperState
      //{whisperState}
    }
  }
  const mapActionsToProps = (dispatch) => {
    return {
      addWhisper: (newWhisper) => dispatch(AddWhisper(newWhisper)),
      removeWhisper: (index) => dispatch(RemoveWhisper(index)),
      newWhisper: (formValue) => dispatch(NewWhisper(formValue)),
      getWhisper:(whisper) => dispatch(GetWhisper(whisper)),
      getWhispers: (whispers) => dispatch(GetWhispers(whispers))
      
    }
  }

  const WhisperList = (props) => {
    console.log(props.whisperState)

    useEffect(() => {
      props.getWhispers()
    }, [])

    const handleChange = (event) => {
        props.newWhisper(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addWhisper(props.whisperState.newWhisper)
    }

    const handleRemoveWhisper = (index) => {
       // console.log('Index of whisper to be removed', index)
        props.removeWhisper(index)
    }

    return (
      props.whisperState ? 
    <div>
    <WhisperForm  
        newWhisper={props.whisperState.newWhisper}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

        />
        {props.whisperState.whispers.map((whisper, index) => (
            <div>
              <Link key={whisper.id} to ={`/whispers/${whisper.id}`}>{whisper.title}</Link>
              <button onClick={() => handleRemoveWhisper(index)}>Delete</button>
            </div>
          )
          )}
        </div>
        
        :
        <div>
          <h1>loading</h1>
        </div>
      
    )
}

  export default connect(mapStateToProps, mapActionsToProps)(WhisperList)
    