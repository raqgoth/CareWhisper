import { ADD_WHISPER, NEW_WHISPER, REMOVE_WHISPER, ADD_MEME, REMOVE_MEME } from '../types'

const initialState = {
    whispers: [{
     title: '',
      content: '',
      grateful: ''

        }],
    newWhisper: '',
    memes: []
}

const WhisperReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WHISPER:
        console.log(action.payload)
        return { ...state, whispers: [...state.whispers, action.payload], newWhisper: '' }
      case NEW_WHISPER:
        return { ...state, newWhisper: action.payload }
      case REMOVE_WHISPER:
        console.log(state)
        let filteredWhispers = state.whispers.filter(
          (whisper, index) => index !== action.payload
        )
        console.log(filteredWhispers)
        return { ...state, whispers: filteredWhispers }
           case ADD_MEME :
            let addItem = state.todos.filter(
              (meme, index) => index === action.payload
            )
            let newMeme = state.memes
                newMeme.push(addItem[0])
          return { ...state, memes: newMeme }
          case REMOVE_MEME:
            let filteredMemes = state.memes.filter(
              (meme, index) => index !== action.payload
            )
            console.log(filteredMemes)
        return { ...state, memes: filteredMemes }   
      
      default:
        return { ...state }
    }
  }
  export default WhisperReducer

