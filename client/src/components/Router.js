import React from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Landing from '../pages/Landing'
import CreateWhisper from '../pages/CreateWhisper'
import CreateMeme from '../pages/CreateMeme'
import Memes from '../pages/Memes'
import WhisperDetails from '../pages/WhisperDetails'

const Routes = ({user, whispers, setUser, clearUser, props}) => {
   
       return (
        <div>
          <Switch>
                  <Route
                      exact
                      path="/"
                      render={props => (user ? <Home /> : <Landing {...props} whispers={whispers} />)}
                  />
                  <Route
                      path="/login"
                      render={props => <SignIn {...props} setUser={setUser} />}
                  />
                  <Route
                      path="/signup"
                      render={props => <SignUp {...props} setUser={setUser} />}
                      />
                  <Route
                      path="/new-whisper"
                      user={user}
                      render={props => <CreateWhisper {...props} user={user} />}
                  />
                  <Route
                      path="/whispers"
                      user={user}
                      render={props => <Home {...props} user={user} />}
                  />
                  <Route
                      path="/whisper-details/:whisperId"
                      user={user}
                      render={props => <WhisperDetails {...props} user={user} />}
                  />
                  <Route
                  path="/new-meme"
                        user={user}
                      render={props => <CreateMeme {...props} user={user} />}
                  />
                  <Route
                  path="/memes"
                  user={user}
                  render={props => <Memes {...props} user={user}  />}
                  />  
              </Switch>
          </div>
          )

}

export default withRouter(Routes)