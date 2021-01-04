import { createStore, combineReducers } from 'redux'
import {composeWithDevTools } from 'redux-devtools-extension'
import WhisperReducer from './reducers/WhisperReducer'
import AppReducer from './reducers/AppReducer'

const store = createStore(
    combineReducers({ 
        whisperState: WhisperReducer, 
        appState: AppReducer 
    }),
    composeWithDevTools()
  )
// Create store accepts a function as an argument, this setup is just temporary until we set up reducers.

export default store