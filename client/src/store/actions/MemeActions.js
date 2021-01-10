import {ADD_MEME, REMOVE_MEME, GET_MEME, GET_MEMES} from '../types'



export const AddMeme = (index) => ({
    type: ADD_MEME,
    payload:index
        //implicit return od an object
    })

    export const RemoveMeme = (index) => ({
        type: REMOVE_MEME,
        payload: index
            //implicit return od an object
    })

    export const GetMeme = () => async (dispatch) => {
        try {
          const memes = await __GetMeme()
          dispatch({
            type: GET_MEME,
            payload: memes
          })
        } catch (error) {
          throw error
        }
      }

      export const GetMemes = () => async (dispatch) => {
        try {
          const memes = await __GetMemes()
          dispatch({
            type: GET_MEMES,
            payload: memes
          })
        } catch (error) {
          throw error
        }
    }
    
  
