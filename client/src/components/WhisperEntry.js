import {useEffect, React} from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import WhisperForm from './WhisperForm'
import {
  AddWhisper,
  RemoveWhisper,
  CreateNewWhisper,
} from '../store/actions/WhisperActions'
import '../styles/App.css'

const WhisperEntry = (props) => {
  //   console.log(props)
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
       <NavLink className="btn btn-outline-primary" exact to='/sign-out'>
                    Log out
        </NavLink>
      <WhisperForm
        newWhisper={props.whisperState.newWhisper.title}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {props.whisperState.whispers.map((whisper, index) =>(
        <div key={index}>
          <li>{whisper.title}</li>
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
export default connect(mapStateToProps, mapActionsToProps)(WhisperEntry)