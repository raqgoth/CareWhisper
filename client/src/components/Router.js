import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import WhisperDetails from '../pages/WhisperDetails'
import Whispers from '../pages/Whispers'
import AuthenticatedRoute from './AuthenticatedRoute'
import Landing from '../pages/Landing'
import { useEffect, useState } from 'react'
import { __CheckSession } from '.././services/UserServices'

const Routes  = (props) => {

    const [currentUser,setCurrentUser]=useState(null)
    const [authenticated,setAuthenticated]=useState(false)
    
    let a=()=> props.history.push('/home')
    let b=()=> props.history.push('/')

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        
        if (token) {
          try {
            const session = await __CheckSession()
            
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
              path='/sign-up' 
              component={ props => 
                  <SignUp {...props}/>
              }/>

              <AuthenticatedRoute 
                authenticated={authenticated}
                currentUser={currentUser}
                exact path='/whispers'
                component={props=><Whispers {...props} authenticated={authenticated}
                currentUser={currentUser}/>}
              />

              {/* <AuthenticatedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
              exact path='/whisper/:id' 
              component={ props => 
                  <WhisperDetails {...props}/>
              }/>    */}
    q         <AuthenticatedRoute
               authenticated={authenticated}
               currentUser={currentUser}  
               exact path='/home' 
               component={props=>
                <Home {...props} authenticated={authenticated}
                currentUser={currentUser}  />
               }/>
              </Switch>
    </div>
    )    
}

export default withRouter(Routes)