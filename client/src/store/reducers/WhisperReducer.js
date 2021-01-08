import { ADD_WHISPER, NEW_WHISPER, REMOVE_WHISPER, ADD_MEME, REMOVE_MEME, GET_WHISPERS } from '../types'

const initialState = {
    whispers: [],
    newWhisper:''
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
        return {...state}
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
        case GET_WHISPERS:
      return { ...state, whispers: action.payload }
      
      default:
        return { ...state }
    }
  }
  export default WhisperReducer