import React from 'react'
import { connect } from 'react-redux'
import MemeForm from './MemeForm'
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
    <MemeForm
        newMeme={props.memeState.newMeme}
        handleChange={handleChange}
        handleSubmit={handleSubmit}

        />
        {props.memeState.memes.map((meme, index) => (
            <div key={index}>
              <li>{meme.name}</li>
              <button onClick={() => handleRemoveMeme(index)}>Delete</button>
            </div>
          )
          )}
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
    