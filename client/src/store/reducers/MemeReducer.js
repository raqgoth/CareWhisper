import { ADD_MEME, REMOVE_MEME, GET_MEMES } from '../types'

const initialState = {
    memes: [],
    newMeme:''
}

const MemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEME:
            return { ...state, memes: [...state.memes, action.payload] , newMeme: '' }
        case REMOVE_MEME:
            console.log(state)
            return {...state}
            case GET_MEMES:
                return { ...state, memes: action.payload }
            default:
                return { ...state }
        }
    }
    
    export default MemeReducer