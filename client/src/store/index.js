import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import WhisperReducer from './reducers/WhisperReducer'
import AppReducer from './reducers/AppReducer'
import UserReducer from './reducers/UserReducer'

const store = createStore(
    combineReducers({ 
        WhisperState: WhisperReducer, 
        UserState: UserReducer,
        appState: AppReducer 
    }),
    applyMiddleware(thunk)
  )
// Create store accepts a function as an argument, this setup is just temporary until we set up reducers.

export default store