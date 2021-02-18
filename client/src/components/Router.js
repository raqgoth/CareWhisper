import React, { useEffect,useState} from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'
import CreateWhisper from '../pages/CreateWhisper'
import CreateMeme from '../pages/CreateMeme'
import Memes from '../pages/Memes'
import WhisperDetails from '../pages/WhisperDetails'
import {__CheckSessions}  from '../services/UserServices';

const Router  = (props) => {

    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)
    
    let a=()=> props.history.push('/home')
    let b=()=> props.history.push('/')

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        
        if (token) {
          try {
            const session = await __CheckSessions()
            
            setAuthenticated(true)
            setCurrentUser(session.user)
            localStorage.setItem('user',JSON.stringify(session.user));
            console.log(session.user);
            a()
            
          } catch (error) {
            console.log(error);
            setCurrentUser(null)
            setAuthenticated(false)
            localStorage.clear()
            b()
          }
        }
      }
    
     const toggleAuthenticated = (value, user, done) => {
       setAuthenticated(value)
       currentUser(user)
       
      }
    
      useEffect(()=>{
          verifyTokenValid()
      },[authenticated])

      return(
        <div>
       <Landing 
        authenticated={authenticated} 
        currentUser={currentUser}
        setAuthenticated={setAuthenticated}
      >
          <Switch>
              <Route 
              exact path='/' 
              component={ props => 
                  <Landing {...props}/>
              }/>

              <Route 
              toggleAuthenticated={toggleAuthenticated} 
              path='/login' 
              component={ props => 
                  <SignIn {...props} toggleAuthenticated={toggleAuthenticated}  currentUser={currentUser}  />
              }/>

              <Route 
              path='/signup' 
              component={ props => 
                  <SignUp {...props}/>
              }/>


              <ProtectedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
              exact path='/new-whisper' 
              component={ props => 
                  <CreateWhisper {...props}/>
              }/>   

              <ProtectedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
              exact path='/whispers' 
              render={ props => 
                  <Home {...props} 
                  location={props.location}
                  />
              }/>     

              <ProtectedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
               exact path='/whisper-details/:whisperId' 
               component={props=>
                <WhisperDetails {...props} authenticated={authenticated}
                currentUser={currentUser}  />
               }/>
            </Switch>
       </Landing>
    </div>
    )
    
}

export default withRouter(Router)
           
