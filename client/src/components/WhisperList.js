import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import WhisperForm from './WhisperForm'
import { AddWhisper, NewWhisper, RemoveWhisper, GetWhisper, GetWhispers } from '../store/actions/WhisperActions'
import {Link} from 'react-router-dom'


  const mapStateToProps = (state) => {
    //   console.log(state)
    return {
      whisperState: state.whisperState
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
    useEffect(() => {
      props.getWhispers()
    }, [])

    const handleChange = (event) => {
        props.newWhisper(event.target.value)
        console.log(event.target.value)
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
            <div>
              <Link key={whisper.id} to ={`/whispers/${whisper.id}`}>{whisper.title}</Link>
              <button onClick={() => handleRemoveWhisper(index)}>Delete</button>
            </div>
          )
          )}
        </div>
    )
}

  export default connect(mapStateToProps, mapActionsToProps)(WhisperList)
    