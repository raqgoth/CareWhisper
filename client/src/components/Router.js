import React, {useEffect, useState }from 'react'
import { Route,  Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import AuthenticatedRoute from './AuthenticatedRoute'
import Landing from '../pages/Landing'
import CreateWhispers from '../pages/CreateWhispers'
import CreateMeme from '../pages/CreateMeme'
import {__CheckSessions} from '../services/UserServices'
import MemeList from './MemeList'
import WhisperDetails from './WhisperDetails'

const Routes = ({user, whispers, setUser, clearUser, props}) => {
    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)
    
    let a=()=> props.history.push('/whipers')
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
 
       return (
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
            path="/sign-up"
            render={props => <SignUp {...props} setUser={setUser} />}
            />
            
            <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/whispers'
                component={props=><Home {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />
               <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/create-whisper'
                component={props=><CreateWhispers {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />
              <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/create-meme'
                component={props=><CreateMeme {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />
             <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/memes'
                component={props=><MemeList {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />
              <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/viewWhisper'
                component={props=><WhisperDetails {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />



</Switch>

</Landing>
</div>
)

}

export default withRouter(Routes)