import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import WhisperList from '../components/WhisperList'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'
import CreateWhisper from '../pages/CreateWhisper'
import CreateMeme from '../pages/CreateMeme'
import Memes from '../pages/Memes'
import WhisperDetails from '../pages/WhisperDetails'
import {__CheckSessions}  from '../services/UserServices';

const Router  = (props) => { 
  return (
    <div>
      <Switch>
        <Route 
          exact path='/' 
          component={ props => 
                  <Landing {...props}/>
        }/>
        <Route 
          path='/login' 
          component={ props => 
            <SignIn />
          }/>
        <Route 
          path='/signup' 
          component={ props => 
            <SignUp {...props}/>
          }/>
        <Route
          exact path='/new-whisper' 
          component={ props => 
            <CreateWhisper {...props}/>
            }/>
        <Route
          exact path='/whispers' 
          render={ props => 
            <WhisperList {...props} 
            />
          }/>     
        <Route
          exact path='/whisper-details/:whisper_id' 
            component={props=>
              <WhisperDetails {...props}/>
            }/>
      </Switch>
    </div>
  )  
}

export default withRouter(Router)
           
