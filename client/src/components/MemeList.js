import React from 'react'
import { connect } from 'react-redux'
import { AddMeme, CreateNewMeme, RemoveMeme } from '../store/actions/MemeActions'


const MemeList = (props) => {

    const handleChange = (event) => {
        props.createMeme(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMeme(props.memeState.newMeme)
    }

    const handleRemoveMeme = (index) => {
        console.log('Index of meme to be removed', index)
        props.removeMeme(index)
    }

    return (
    <div>
        
          <div >
            <li>asd</li>
            <button >Delete</button>
          </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    //   console.log(state)
    return {
      memeState: state.MemeState
    }
  }
  const mapActionsToProps = (dispatch) => {
    return {
      addMeme: (newMeme) => dispatch(AddMeme(newMeme)),
      removeMeme: (index) => dispatch(RemoveMeme(index)),
      createMeme: (formValue) => dispatch(CreateNewMeme(formValue)),
      
    }
  }
  export default connect(mapStateToProps, mapActionsToProps)(MemeList)
    