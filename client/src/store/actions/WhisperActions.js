import {ADD_WHISPER, NEW_WHISPER, REMOVE_WHISPER, GET_WHISPER, GET_WHISPERS} from '../types'
import {__GetWhisper, __GetWhispers} from '../../services/WhisperServices' 

export const AddWhisper = (whisper) => ({
    type: ADD_WHISPER,
    payload: {whisper}
        //implicit return od an object
})

export const NewWhisper = (formValue) => ({
    type: NEW_WHISPER,
    payload: formValue
        //implicit return od an object
})

export const RemoveWhisper = (index) => ({
    type: REMOVE_WHISPER,
    payload: index
        //implicit return od an object
})

export const GetWhisper = () => async (dispatch) => {
    try {
      const whisper = await __GetWhisper()
     
      dispatch({
        type: GET_WHISPER,
        payload: whisper
      })
    } catch (error) {
      throw error
    }
  }
  
    export const GetWhispers = () => async (dispatch) => {
      try {
        const whispers = await __GetWhispers()
        console.log(whispers)
        dispatch({
          type: GET_WHISPERS,
          payload: whispers
        })
      } catch (error) {
        throw error
      }
  }
  