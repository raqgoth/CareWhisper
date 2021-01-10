import { ADD_WHISPER, NEW_WHISPER, REMOVE_WHISPER, GET_WHISPERS } from '../types'

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
        case GET_WHISPERS:
      return { ...state, whispers: action.payload }
      
      default:
        return { ...state }
    }
  }
  export default WhisperReducer