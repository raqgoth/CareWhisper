import { GET_WHISPER} from '../types'

const initialState = {
    details: []
}

const DetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WHISPER:
        return { ...state, details: action.payload }
      default:
        return { ...state }
    }
  }
  
  export default DetailsReducer
